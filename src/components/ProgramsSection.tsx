
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, DollarSign, Clock, GraduationCap, Home, Briefcase } from 'lucide-react';

const programs = [
  {
    id: 1,
    title: 'Inglês Intensivo em Nova York',
    country: 'Estados Unidos',
    flag: '🇺🇸',
    duration: '4 semanas',
    vacancies: 15,
    deadline: '2025-12-31',
    price: 'US$ 1,850',
    requirements: ['Nível Básico', 'Visto de Turista'],
    description: 'Aprenda inglês no coração da Big Apple. Aulas dinâmicas com foco em conversação e cultura local.',
    level: 'Curso de Idioma',
    scholarship: false,
    housing: {
      type: 'Casa de Família',
      description: 'Acomodação em casa de família americana com café da manhã incluído',
      price: 'US$ 320/semana',
      facilities: ['Wi-Fi', 'Café da manhã', 'Quarto individual']
    },
    internship: null
  },
  {
    id: 2,
    title: 'Inglês Geral em Londres',
    country: 'Reino Unido',
    flag: '🇬🇧',
    duration: '8 semanas',
    vacancies: 10,
    deadline: '2025-12-31',
    price: 'US$ 3,200',
    requirements: ['Nível Intermediário', 'Passaporte Válido'],
    description: 'Desenvolva sua fluência em um ambiente acadêmico tradicional e explore a capital britânica.',
    level: 'Curso de Idioma',
    scholarship: true,
    housing: {
      type: 'Residência Estudantil',
      description: 'Residência universitária no centro de Londres com outros estudantes internacionais',
      price: 'US$ 280/semana',
      facilities: ['Wi-Fi', 'Cozinha compartilhada', 'Quarto individual', 'Área de estudos']
    },
    internship: {
      available: true,
      description: 'Oportunidade de estágio em empresas locais após completar 6 semanas do curso',
      duration: '4-8 semanas',
      areas: ['Marketing', 'Turismo', 'Educação']
    }
  },
  {
    id: 3,
    title: 'Francês e Cultura em Paris',
    country: 'França',
    flag: '🇫🇷',
    duration: '12 semanas',
    vacancies: 8,
    deadline: '2025-11-30',
    price: 'US$ 4,500',
    requirements: ['Nível Básico de Francês', 'Visto de Estudante'],
    description: 'Imersão completa na língua e cultura francesa na cidade mais charmosa do mundo.',
    level: 'Curso de Idioma',
    scholarship: false,
    housing: {
      type: 'Apartamento Compartilhado',
      description: 'Apartamento compartilhado com outros estudantes no quartier Latin',
      price: 'US$ 350/semana',
      facilities: ['Wi-Fi', 'Cozinha completa', 'Quarto individual', 'Próximo ao metrô']
    },
    internship: {
      available: true,
      description: 'Estágio remunerado em empresas francesas após 8 semanas de curso',
      duration: '6-12 semanas',
      areas: ['Gastronomia', 'Fashion', 'Arte e Cultura', 'Negócios']
    }
  },
  {
    id: 4,
    title: 'Alemão para Negócios em Berlim',
    country: 'Alemanha',
    flag: '🇩🇪',
    duration: '8 semanas',
    vacancies: 12,
    deadline: '2025-10-31',
    price: 'US$ 3,500',
    requirements: ['Nível Intermediário de Alemão', 'Visto Schengen'],
    description: 'Curso focado em linguagem de negócios para impulsionar sua carreira no mercado europeu.',
    level: 'Curso de Idioma',
    scholarship: true,
    housing: {
      type: 'Studio Privado',
      description: 'Studio privado mobiliado em bairro jovem e moderno de Berlim',
      price: 'US$ 400/semana',
      facilities: ['Wi-Fi', 'Cozinha própria', 'Banheiro privativo', 'Área de trabalho']
    },
    internship: {
      available: true,
      description: 'Programa de estágio em startups e empresas alemãs com possibilidade de contratação',
      duration: '8-16 semanas',
      areas: ['Tecnologia', 'Engenharia', 'Finanças', 'Startups']
    }
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

                {/* Informações de Moradia */}
                <div className="border rounded-lg p-3 bg-blue-50">
                  <h4 className="font-semibold text-sm flex items-center mb-2">
                    <Home className="h-4 w-4 mr-2 text-blue-600" />
                    Acomodação: {program.housing.type}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">{program.housing.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-700">{program.housing.price}</span>
                    <div className="flex flex-wrap gap-1">
                      {program.housing.facilities.map((facility, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {facility}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Informações de Estágio */}
                {program.internship ? (
                  <div className="border rounded-lg p-3 bg-green-50">
                    <h4 className="font-semibold text-sm flex items-center mb-2">
                      <Briefcase className="h-4 w-4 mr-2 text-green-600" />
                      Oportunidade de Estágio
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">{program.internship.description}</p>
                    <div className="space-y-1">
                      <p className="text-xs"><strong>Duração:</strong> {program.internship.duration}</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs text-gray-600">Áreas:</span>
                        {program.internship.areas.map((area, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="border rounded-lg p-3 bg-gray-50">
                    <p className="text-xs text-gray-500 italic flex items-center">
                      <Briefcase className="h-4 w-4 mr-2" />
                      Programa focado em estudos - sem estágio disponível
                    </p>
                  </div>
                )}

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
