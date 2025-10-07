import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Camera, User } from 'lucide-react';

interface EditLandlordProfileProps {
  onBack: () => void;
  onSave: () => void;
  userData: { name: string; email: string };
}

const EditLandlordProfile = ({ onBack, onSave, userData }: EditLandlordProfileProps) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicionar lógica de validação e envio de dados aqui
    onSave();
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Editar Perfil do Senhorio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={photoPreview || undefined} alt="Foto do senhorio" />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Label htmlFor="landlord-photo" className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4">
                <Camera className="h-4 w-4 mr-2" />
                <span>Adicionar Foto</span>
              </Label>
              <Input id="landlord-photo" type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} />
              <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" defaultValue={userData.name} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue={userData.email} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" type="tel" placeholder="(00) 00000-0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pais">País</Label>
            <Input id="pais" placeholder="Ex: Irlanda" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="local">Localidade</Label>
            <Input id="local" placeholder="Ex: Dublin" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="descricao">Descrição</Label>
            <Textarea id="descricao" placeholder="Fale um pouco sobre você..." />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2">
          <Button type="button" variant="ghost" onClick={onBack}>
            Sair
          </Button>
          <Button type="submit">Cadastrar intercâmbio</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default EditLandlordProfile;
