
import React, { useState } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="logo.jpg"
              alt="InterWorld logo"
             className="w-[100px] h-[100px] object-contain"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
              InterWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/paises" 
                className={`transition-colors ${
                  isActive('/paises') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Países
              </Link>
              <Link 
                to="/programas" 
                className={`transition-colors ${
                  isActive('/programas') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Programas
              </Link>
              <Link 
                to="/quem-somos" 
                className={`transition-colors ${
                  isActive('/quem-somos') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Quem Somos
              </Link>
            </nav>
          )}

          {/* Desktop Actions */}
          {!isMobile && (
            <div className="hidden md:flex space-x-4">
              <Link to="/login">
                <Button variant="outline" className="flex items-center space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/cadastro-estudante">
                <Button className="bg-gradient-to-r from-blue-900 to-blue-400 hover:from-blue-800 hover:to-blue-500">
                  Cadastre-se
                </Button>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 mt-4">
              <Link 
                to="/" 
                className={`transition-colors py-2 ${
                  isActive('/') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Início
              </Link>
              <Link 
                to="/paises" 
                className={`transition-colors py-2 ${
                  isActive('/paises') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Países
              </Link>
              <Link 
                to="/programas" 
                className={`transition-colors py-2 ${
                  isActive('/programas') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Programas
              </Link>
              <Link 
                to="/quem-somos" 
                className={`transition-colors py-2 ${
                  isActive('/quem-somos') ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Quem Somos
              </Link>
            </nav>
            <div className="mt-4 space-y-2">
              <Link to="/login">
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Área do Aluno</span>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
