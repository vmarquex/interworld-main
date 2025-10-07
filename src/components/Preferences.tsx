import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface PreferencesProps {
  onBack: () => void;
}

const Preferences = ({ onBack }: PreferencesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferências</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="theme-mode">Modo Escuro</Label>
          <Switch id="theme-mode" />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="language">Idioma</Label>
          <select id="language" className="border rounded-md p-2">
            <option>Português</option>
            <option>Inglês</option>
          </select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="button" variant="ghost" onClick={onBack}>
          Voltar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Preferences;
