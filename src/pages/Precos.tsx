
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ArrowRight, DollarSign, Calendar, MapPin, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Precos = () => {
  const [selectedWeeks, setSelectedWeeks] = useState(2);
  const { toast } = useToast();

  const weeks = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  const languageCourses = [
    {
      name: "EF Curso Básico",
      price: 1460,
      description: "Curso de idioma básico com foco em conversação",
      features: ["20 aulas por semana", "Material didático incluído", "Atividades culturais"]
    },
    {
      name: "EF Curso Geral",
      price: 1560,
      description: "Curso de idioma geral com equilíbrio entre gramática e conversação",
      features: ["26 aulas por semana", "Material didático incluído", "Atividades culturais", "Certificado"]
    },
    {
      name: "EF Curso Intensivo",
      price: 1660,
      description: "Curso de idioma intensivo para aprendizado acelerado",
      features: ["32 aulas por semana", "Material didático incluído", "Atividades culturais", "Certificado", "Aulas particulares"]
    }
  ];

  const careerCourses = [
    {
      name: "Curso Geral de Career Skills da EF",
      price: 1560,
      description: "Desenvolva habilidades profissionais em inglês",
      features: ["26 aulas por semana", "Foco em inglês para negócios", "Simulações de entrevistas", "Certificado"]
    },
    {
      name: "Curso Intensivo de Career Skills da EF",
      price: 1660,
      description: "Programa intensivo para carreira internacional",
      features: ["32 aulas por semana", "Foco em inglês para negócios", "Simulações de entrevistas", "Certificado", "Mentoria profissional"]
    }
  ];

  const calculatePrice = (basePrice: number) => {
    return basePrice + (selectedWeeks - 2) * 200;
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
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Selecione o número de semanas:
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
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                  Cursos de idiomas
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  {selectedWeeks} semanas
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {languageCourses.map((course, index) => (
                  <Card key={index} className="border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {course.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {course.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <span className="text-3xl font-bold text-gray-900">
                            {calculatePrice(course.price).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">USD</p>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Ver detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cursos de Carreira */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                  Carreira
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  {selectedWeeks} semanas
                </Badge>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {careerCourses.map((course, index) => (
                  <Card key={index} className="border-2 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {course.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {course.description}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <DollarSign className="h-5 w-5 text-green-600" />
                          <span className="text-3xl font-bold text-gray-900">
                            {calculatePrice(course.price).toLocaleString()}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">USD</p>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {course.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Ver detalhes
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

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
