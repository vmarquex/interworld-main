
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, DollarSign, Clock, GraduationCap } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Graduação em Engenharia - MIT',
    country: 'Estados Unidos',
    flag: '🇺🇸',
    duration: '4 anos',
    vacancies: 5,
    deadline: '2024-03-15',
    price: 'US$ 75,000/ano',
    requirements: ['TOEFL 100+', 'SAT 1400+', 'GPA 3.8+'],
    description: 'Programa de graduação em engenharia em uma das universidades mais prestigiadas do mundo.',
    level: 'Graduação',
    scholarship: true
  },
  {
    id: 2,
    title: 'MBA Internacional - Oxford',
    country: 'Reino Unido',
    flag: '🇬🇧',
    duration: '2 anos',
    vacancies: 3,
    deadline: '2024-04-01',
    price: '£ 65,000/ano',
    requirements: ['IELTS 7.5+', 'GMAT 650+', '5+ anos exp.'],
    description: 'MBA executivo focado em negócios internacionais e liderança global.',
    level: 'Pós-graduação',
    scholarship: false
  },
  {
    id: 3,
    title: 'Intercâmbio de Verão - Toronto',
    country: 'Canadá',
    flag: '🇨🇦',
    duration: '3 meses',
    vacancies: 15,
    deadline: '2024-02-28',
    price: 'CAD$ 8,000',
    requirements: ['TOEFL 80+', 'Cursando graduação'],
    description: 'Programa intensivo de inglês e cultura canadense durante o verão.',
    level: 'Intercâmbio',
    scholarship: true
  },
  {
    id: 4,
    title: 'Doutorado em Ciências - Melbourne',
    country: 'Austrália',
    flag: '🇦🇺',
    duration: '4 anos',
    vacancies: 2,
    deadline: '2024-05-15',
    price: 'AUD$ 45,000/ano',
    requirements: ['IELTS 6.5+', 'Mestrado', 'Projeto de pesquisa'],
    description: 'Programa de doutorado com foco em pesquisa avançada em ciências.',
    level: 'Doutorado',
    scholarship: true
  }
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Programas{' '}
            <span className="bg-gradient-to-r from-blue-900 to-blue-400 bg-clip-text text-transparent">
              Disponíveis
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore oportunidades únicas de intercâmbio e programas acadêmicos ao redor do mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{program.flag}</span>
                    <div>
                      <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin className="h-3 w-3 mr-1" />
                        {program.country}
                      </p>
                    </div>
                  </div>
                  {program.scholarship && (
                    <Badge className="bg-yellow-100 text-yellow-800 text-xs">
                      Bolsa
                    </Badge>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    {program.level}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {program.duration}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    <Users className="h-3 w-3 mr-1" />
                    {program.vacancies} vagas
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Investimento</p>
                    <div className="flex items-baseline gap-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="text-lg font-bold text-gray-900">
                        {program.price}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">USD</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Prazo</p>
                    <p className="font-semibold text-red-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(program.deadline).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">Requisitos</p>
                  <div className="flex flex-wrap gap-1">
                    {program.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {req}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Link to="/candidatar-se" className="flex-1">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-400 hover:from-blue-800 hover:to-blue-300 text-white text-sm h-9"
                    >
                      Candidatar-se
                    </Button>
                  </Link>
                  <Link to="/precos">
                    <Button variant="outline" className="text-sm h-9 px-3">
                      <GraduationCap className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/precos">
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-3 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
            >
              Ver Todos os Programas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
