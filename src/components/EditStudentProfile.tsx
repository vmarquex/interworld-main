import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface UserData {
  id: string;
  name: string;
  email: string;
}

interface EditStudentProfileProps {
  onBack: () => void;
  onSave: (data: { name: string }) => void;
  userData: UserData;
}

const EditStudentProfile = ({ onBack, onSave, userData }: EditStudentProfileProps) => {
  const [name, setName] = useState(userData.name);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch(`http://localhost:8081/api/users/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken') || ''}`
        },
        body: JSON.stringify({
          nome: name,
          email: userData.email, // Email não é editável, mas pode ser necessário no corpo
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        toast({
          title: 'Sucesso',
          description: 'Perfil atualizado com sucesso!',
        });
        onSave({ name: updatedUser.nome });
      } else {
        const errorData = await response.text();
        toast({
          title: 'Erro ao atualizar perfil',
          description: errorData || 'Não foi possível salvar as alterações.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      toast({
        title: 'Erro de conexão',
        description: 'Não foi possível se conectar ao servidor.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Editar Perfil do Estudante</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={userData.email} disabled />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button type="button" variant="ghost" onClick={onBack} disabled={isLoading}>
            Cancelar
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditStudentProfile;
