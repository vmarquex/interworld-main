import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from './ui/textarea';

interface AddHouseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddHouse: (house: any) => void;
}

const AddHouseModal = ({ isOpen, onClose, onAddHouse }: AddHouseModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const houseData = Object.fromEntries(formData.entries());
    onAddHouse({ id: Date.now(), ...houseData });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar Nova Propriedade</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 p-4">
            <div className="space-y-2">
              <Label htmlFor="address">Endereço</Label>
              <Input id="address" name="address" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rent">Aluguel (mensal)</Label>
              <Input id="rent" name="rent" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rooms">Número de Quartos</Label>
              <Input id="rooms" name="rooms" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vacancies">Vagas para estudantes</Label>
              <Input id="vacancies" name="vacancies" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" name="description" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="photos">Fotos</Label>
              <Input id="photos" name="photos" type="file" multiple />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit">Adicionar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddHouseModal;
