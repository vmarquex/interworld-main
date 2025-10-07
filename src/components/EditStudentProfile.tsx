import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EditStudentProfileProps {
  onBack: () => void;
  onSave: () => void;
  userData: { name: string; email: string };
}

const EditStudentProfile = ({ onBack, onSave, userData }: EditStudentProfileProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar lógica de validação e envio de dados aqui
    onSave();
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
            <Input id="name" defaultValue={userData.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={userData.email} disabled />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button type="button" variant="ghost" onClick={onBack}>
            Sair
          </Button>
          <Button type="submit">Salvar intercâmbio</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditStudentProfile;
