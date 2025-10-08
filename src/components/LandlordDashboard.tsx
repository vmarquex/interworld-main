import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2, Send, MessageSquare, Home } from 'lucide-react';
import { Textarea } from './ui/textarea';
import AddHouseModal from './AddHouseModal';

interface House {
  id: number;
  address: string;
  vacancies: number;
}

const LandlordDashboard = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddHouse = (house: House) => {
    setHouses([...houses, house]);
  };

  const handleDeleteHouse = (id: number) => {
    setHouses(houses.filter(house => house.id !== id));
  };

  return (
    <div className="p-4 md:p-8 grid gap-8 md:grid-cols-2">
      <AddHouseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddHouse={handleAddHouse}
      />

      {/* Houses Management */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Painel do Senhorio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Button onClick={() => setIsModalOpen(true)} className="w-full">
            <PlusCircle className="h-4 w-4 mr-2" />
            Adicionar Nova Propriedade
          </Button>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Minhas Propriedades</h3>
            {houses.length > 0 ? (
              <ul className="space-y-2">
                {houses.map((house) => (
                  <li key={house.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div className="flex items-center space-x-3">
                      <Home className="h-5 w-5 text-gray-500" />
                      <span className="font-medium">{house.address}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-md">{house.vacancies} vagas</span>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteHouse(house.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Nenhuma propriedade adicionada ainda.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Chat with Resident */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">Chat com Morador</CardTitle>
          <MessageSquare className="h-6 w-6 text-gray-400" />
        </CardHeader>
        <CardContent className="flex flex-col h-[400px]">
          <div className="flex-grow bg-gray-100 rounded-md p-4 space-y-4 overflow-y-auto">
            {/* Mock Messages */}
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">Olá! Tudo bem com a casa?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
                <p className="text-sm">Olá! Tudo ótimo, obrigado por perguntar.</p>
              </div>
            </div>
          </div>
          <form className="mt-4 flex items-center space-x-2">
            <Textarea placeholder="Digite sua mensagem..." className="flex-grow resize-none" />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandlordDashboard;
