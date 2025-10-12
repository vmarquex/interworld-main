
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ArrowRight, DollarSign, Calendar, MapPin, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Precos = () => {
  const [selectedWeeks, setSelectedWeeks] = useState(4);
  const { toast } = useToast();

  const weeks = [2, 4, 8, 12, 16, 24];

  const languageCourses = [
    {
      destination: "Canadá",
      city: "Toronto",
      pricePer4Weeks: 1550,
      description: "Inglês geral em um ambiente multicultural vibrante.",
      features: ["20 aulas/semana", "Acomodação em casa de família", "Material didático", "Certificado de conclusão"],
      flag: "🇨🇦"
    },
    {
      destination: "Irlanda",
      city: "Dublin",
      pricePer4Weeks: 1750,
      description: "Aprenda inglês na Ilha Esmeralda, rica em cultura e história.",
      features: ["20 aulas/semana", "Acomodação em residência estudantil", "Atividades sociais", "Suporte local"],
      flag: "🇮🇪"
    },
    {
      destination: "Malta",
      city: "St. Julian's",
      pricePer4Weeks: 1350,
      description: "Estude inglês em uma ilha paradisíaca do Mediterrâneo.",
      features: ["25 aulas/semana", "Acomodação em apartamento", "Passeios inclusos", "Ambiente internacional"],
      flag: "🇲🇹"
    },
    {
      destination: "África do Sul",
      city: "Cidade do Cabo",
      pricePer4Weeks: 1200,
      description: "Combine o aprendizado do inglês com uma aventura inesquecível.",
      features: ["20 aulas/semana", "Acomodação em residência", "Excursões e safáris", "Voluntariado opcional"],
      flag: "🇿🇦"
    }
  ];

  const calculatePrice = (basePrice: number) => {
    // Calculation based on a 4-week base price
    return (basePrice / 4) * selectedWeeks;
  };

  const handleRequestQuote = () => {
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve com seu orçamento personalizado.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Botão Voltar */}
      <div className="absolute top-4 left-4 z-10">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
            Preços
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Compare os preços rapidamente. Mensalidade, hospedagem e refeições incluídas.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-6xl mx-auto shadow-2xl border-0">
          <CardContent className="p-8">
            {/* Seleção de Semanas */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Selecione a duração do seu intercâmbio:
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const currentIndex = weeks.indexOf(selectedWeeks);
                    if (currentIndex > 0) {
                      setSelectedWeeks(weeks[currentIndex - 1]);
                    }
                  }}
                  disabled={selectedWeeks === weeks[0]}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                <div className="flex space-x-2">
                  {weeks.map((week) => (
                    <Button
                      key={week}
                      variant={selectedWeeks === week ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedWeeks(week)}
                      className={`w-12 h-12 rounded-full ${
                        selectedWeeks === week 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {week}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const currentIndex = weeks.indexOf(selectedWeeks);
                    if (currentIndex < weeks.length - 1) {
                      setSelectedWeeks(weeks[currentIndex + 1]);
                    }
                  }}
                  disabled={selectedWeeks === weeks[weeks.length - 1]}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Cursos de Idiomas */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                  Cursos de idiomas
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  {selectedWeeks} semanas
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {languageCourses.map((course, index) => (
                  <Card key={index} className="border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {course.destination}
                        </CardTitle>
                        <span className="text-2xl">{course.flag}</span>
                      </div>
                      <p className="text-sm font-semibold text-blue-600">{course.city}</p>
                      <p className="text-sm text-gray-600 pt-2">
                        {course.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="mb-4">
                          <div className="flex items-baseline gap-1">
                            <DollarSign className="h-5 w-5 text-green-600" />
                            <span className="text-3xl font-bold text-gray-900">
                              {calculatePrice(course.pricePer4Weeks).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">USD</p>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {course.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-auto">
                        Ver detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cursos de Carreira REMOVED */}

            {/* Botão de Solicitar Orçamento */}
            <div className="text-center pt-6">
              <Button 
                onClick={handleRequestQuote}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg font-semibold"
              >
                Solicitar orçamento
              </Button>
            </div>

            {/* Informações Adicionais */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  Informações adicionais sobre viagens e preços
                  <ArrowRight className="h-4 w-4" />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Precos;
