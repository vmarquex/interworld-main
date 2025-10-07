
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Building, Home, Settings, LogOut, Bell, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import StudentDashboard from '@/components/StudentDashboard';
import SchoolDashboard from '@/components/SchoolDashboard';
import LandlordDashboard from '@/components/LandlordDashboard';
import EditProfile from '@/components/EditProfile';
import ChangePassword from '@/components/ChangePassword';
import Preferences from '@/components/Preferences';
import Notifications from '@/components/Notifications';

type SettingsView = 'main' | 'profile' | 'password' | 'preferences' | 'notifications';

interface UserData {
  id: string;
  email: string;
  userType: 'student' | 'school' | 'senhorio';
  name: string;
  loginTime: string;
  profileComplete: boolean;
}

const Dashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [settingsView, setSettingsView] = useState<SettingsView>('main');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');

    if (!isLoggedIn || !storedUserData) {
      navigate('/login');
      return;
    }

    try {
      const user = JSON.parse(storedUserData);
      setUserData(user);
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      navigate('/login');
    }
  }, [navigate]);

  const handleProfileSave = () => {
    if (!userData) return;
    const updatedUserData = { ...userData, profileComplete: true };
    localStorage.setItem('userData', JSON.stringify(updatedUserData));
    setUserData(updatedUserData);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    toast({
      title: "Logout realizado",
      description: "Você foi desconectado com sucesso.",
    });
    navigate('/');
  };

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Se o perfil não estiver completo para escola ou senhorio, mostrar o formulário de edição
  if (!userData.profileComplete && (userData.userType === 'school' || userData.userType === 'senhorio')) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 bg-gray-100`}>
        <div className="w-full max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Complete seu Perfil</CardTitle>
              <p className="text-gray-600">
                Para continuar, por favor, preencha as informações abaixo.
              </p>
            </CardHeader>
            <CardContent>
              <EditProfile
                userData={userData}
                onBack={handleLogout} // O botão "Cancelar" fará logout
                onSave={handleProfileSave}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const renderSettingsContent = () => {
    switch (settingsView) {
      case 'profile':
        return <EditProfile userData={userData} onBack={() => setSettingsView('main')} />;
      case 'password':
        return <ChangePassword onBack={() => setSettingsView('main')} />;
      case 'preferences':
        return <Preferences onBack={() => setSettingsView('main')} />;
      case 'notifications':
        return <Notifications onBack={() => setSettingsView('main')} />;
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Configurações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Informações da Conta</h4>
                <p className="text-sm text-gray-600">Email: {userData.email}</p>
                <p className="text-sm text-gray-600">
                  Tipo: {isSchool ? 'Instituição' : isSenhorio ? 'Senhorio' : 'Estudante'}
                </p>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm" onClick={() => setSettingsView('profile')}>
                  Editar Perfil
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm" onClick={() => setSettingsView('password')}>
                  Alterar Senha
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm" onClick={() => setSettingsView('preferences')}>
                  Preferências
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm" onClick={() => setSettingsView('notifications')}>
                  Notificações
                </Button>
              </div>
              <div className="pt-4 border-t">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm text-red-600 hover:text-red-700"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair da Conta
                </Button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  const isSchool = userData.userType === 'school';
  const isSenhorio = userData.userType === 'senhorio';
  
  const themeColors = isSchool 
    ? {
        primary: 'from-teal-600 to-cyan-500',
        bg: 'from-teal-50 via-white to-cyan-50',
        accent: 'text-teal-600',
        button: 'from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800'
      }
    : isSenhorio
    ? {
        primary: 'from-green-600 to-blue-500',
        bg: 'from-green-50 via-white to-blue-50',
        accent: 'text-green-600',
        button: 'from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'
      }
    : {
        primary: 'from-blue-600 to-green-500',
        bg: 'from-blue-50 via-white to-green-50',
        accent: 'text-blue-600',
        button: 'from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
      };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeColors.bg}`}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 bg-gradient-to-r ${themeColors.primary} rounded-full flex items-center justify-center`}>
                {isSchool ? <Building className="h-5 w-5 text-white" /> : isSenhorio ? <Home className="h-5 w-5 text-white" /> : <User className="h-5 w-5 text-white" />}
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">InterWorld</h1>
                <p className="text-sm text-gray-600">
                  {isSchool ? 'Painel Institucional' : isSenhorio ? 'Área do Senhorio' : 'Área do Estudante'}
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className={showSettings ? themeColors.accent : ''}
              >
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-red-600 hover:text-red-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="md:hidden border-t py-4 space-y-2">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => {
                  setShowSettings(!showSettings);
                  setShowMobileMenu(false);
                }}
              >
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="h-4 w-4 mr-2" />
                Notificações
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          )}
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Welcome Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  Olá, {userData.name}! 👋
                </CardTitle>
                <p className="text-gray-600">
                  {isSchool 
                    ? 'Gerencie suas oportunidades de intercâmbio e conecte-se com estudantes.'
                    : isSenhorio
                    ? 'Gerencie suas propriedades e conecte-se com estudantes de intercâmbio.'
                    : 'Explore oportunidades de intercâmbio e avance em sua jornada acadêmica.'
                  }
                </p>
              </CardHeader>
            </Card>

            {userData.userType === 'student' && <StudentDashboard />}
            {userData.userType === 'school' && <SchoolDashboard />}
            {userData.userType === 'senhorio' && <LandlordDashboard />}

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {isSchool ? 'Gerenciar Programas' : isSenhorio ? 'Gerenciar Propriedades' : 'Explorar Programas'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isSchool 
                      ? 'Crie e gerencie seus programas de intercâmbio.'
                      : isSenhorio
                      ? 'Gerencie suas propriedades disponíveis para locação.'
                      : 'Descubra programas que combinam com seu perfil.'
                    }
                  </p>
                  <Button className={`bg-gradient-to-r ${themeColors.button} text-white`}>
                    {isSchool ? 'Gerenciar' : isSenhorio ? 'Gerenciar' : 'Explorar'}
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {isSchool ? 'Candidatos' : isSenhorio ? 'Estudantes Interessados' : 'Minhas Candidaturas'}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {isSchool 
                      ? 'Veja estudantes interessados em seus programas.'
                      : isSenhorio
                      ? 'Veja estudantes interessados em suas propriedades.'
                      : 'Acompanhe o status de suas candidaturas.'
                    }
                  </p>
                  <Button variant="outline">
                    {isSchool ? 'Ver Candidatos' : isSenhorio ? 'Ver Estudantes' : 'Ver Status'}
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Actions for Senhorio */}
            {isSenhorio && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Adicionar Propriedade
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Cadastre uma nova propriedade para locação.
                    </p>
                    <Button variant="outline" className="w-full">
                      Cadastrar
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Relatórios
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Visualize relatórios de ocupação e receita.
                    </p>
                    <Button variant="outline" className="w-full">
                      Ver Relatórios
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Settings Sidebar - só aparece quando ativado */}
          {showSettings && (
            <div className="lg:col-span-1">
              {renderSettingsContent()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
