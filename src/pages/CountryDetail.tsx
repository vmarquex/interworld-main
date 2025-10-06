
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Users, DollarSign, Calendar, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const countryData = {
  'estados-unidos': {
    name: 'Estados Unidos',
    flag: '🇺🇸',
    description: 'O país da inovação e diversidade cultural, oferecendo oportunidades únicas em tecnologia, negócios e artes.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'Califórnia',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Centro da tecnologia mundial e inovação.',
        programs: [
          {
            title: 'Graduação em Ciência da Computação - Stanford',
            duration: '4 anos',
            price: 'US$ 80,000/ano',
            vacancies: 3,
            deadline: '2024-03-15',
            requirements: ['TOEFL 110+', 'SAT 1500+', 'GPA 3.9+']
          },
          {
            title: 'MBA Silicon Valley - UC Berkeley',
            duration: '2 anos',
            price: 'US$ 85,000/ano',
            vacancies: 2,
            deadline: '2024-04-01',
            requirements: ['GMAT 700+', 'TOEFL 105+', '3+ anos exp.']
          }
        ]
      },
      {
        name: 'Nova York',
        image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Capital financeira mundial e centro cultural.',
        programs: [
          {
            title: 'Mestrado em Finanças - Columbia',
            duration: '2 anos',
            price: 'US$ 75,000/ano',
            vacancies: 4,
            deadline: '2024-03-30',
            requirements: ['GMAT 680+', 'TOEFL 100+', 'Graduação relacionada']
          },
          {
            title: 'Arte e Design - Parsons',
            duration: '4 anos',
            price: 'US$ 65,000/ano',
            vacancies: 6,
            deadline: '2024-02-15',
            requirements: ['Portfolio', 'TOEFL 92+', 'Ensaio criativo']
          }
        ]
      }
    ]
  },
  'canada': {
    name: 'Canadá',
    flag: '🇨🇦',
    description: 'País conhecido pela qualidade de vida excepcional e sistema educacional de alto padrão.',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'Ontário',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Província mais populosa com Toronto e Ottawa.',
        programs: [
          {
            title: 'Graduação em Engenharia - University of Toronto',
            duration: '4 anos',
            price: 'CAD$ 45,000/ano',
            vacancies: 8,
            deadline: '2024-03-01',
            requirements: ['IELTS 6.5+', 'Notas altas em matemática', 'Carta motivação']
          }
        ]
      },
      {
        name: 'British Columbia',
        image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Costa oeste com Vancouver e natureza exuberante.',
        programs: [
          {
            title: 'Mestrado em Sustentabilidade - UBC',
            duration: '2 anos',
            price: 'CAD$ 35,000/ano',
            vacancies: 5,
            deadline: '2024-04-15',
            requirements: ['IELTS 7.0+', 'Graduação relacionada', 'Experiência ambiental']
          }
        ]
      }
    ]
  },
  'reino-unido': {
    name: 'Reino Unido',
    flag: '🇬🇧',
    description: 'Berço da tradição acadêmica com universidades centenárias e excelência em pesquisa.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'Inglaterra',
        image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Lar de Oxford, Cambridge e Londres.',
        programs: [
          {
            title: 'Graduação em História - Oxford',
            duration: '3 anos',
            price: '£ 40,000/ano',
            vacancies: 2,
            deadline: '2024-01-15',
            requirements: ['IELTS 7.5+', 'A-Levels AAA', 'Entrevista']
          }
        ]
      }
    ]
  },
  'australia': {
    name: 'Austrália',
    flag: '🇦🇺',
    description: 'Combinação única de excelência acadêmica e estilo de vida descontraído.',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'New South Wales',
        image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Sydney e suas praias mundialmente famosas.',
        programs: [
          {
            title: 'Mestrado em Medicina - UNSW',
            duration: '2 anos',
            price: 'AUD$ 55,000/ano',
            vacancies: 3,
            deadline: '2024-05-01',
            requirements: ['IELTS 7.0+', 'Graduação em ciências', 'GAMSAT']
          }
        ]
      }
    ]
  },
  'alemanha': {
    name: 'Alemanha',
    flag: '🇩🇪',
    description: 'Potência em engenharia e pesquisa, com muitas universidades gratuitas.',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'Bayern',
        image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Munique e tradição em engenharia.',
        programs: [
          {
            title: 'Doutorado em Engenharia - TUM',
            duration: '3-4 anos',
            price: 'Gratuito',
            vacancies: 4,
            deadline: '2024-06-01',
            requirements: ['Alemão B2+', 'Mestrado', 'Projeto pesquisa']
          }
        ]
      }
    ]
  },
  'franca': {
    name: 'França',
    flag: '🇫🇷',
    description: 'Centro mundial de arte, cultura e gastronomia com tradição acadêmica sólida.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    states: [
      {
        name: 'Île-de-France',
        image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Paris, a cidade luz e centro cultural.',
        programs: [
          {
            title: 'Mestrado em Arte - Sorbonne',
            duration: '2 anos',
            price: '€ 15,000/ano',
            vacancies: 6,
            deadline: '2024-04-30',
            requirements: ['Francês B2+', 'Portfolio', 'Graduação em artes']
          }
        ]
      }
    ]
  }
};

const CountryDetail = () => {
  const { countrySlug } = useParams();
  const country = countryData[countrySlug as keyof typeof countryData];

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">País não encontrado</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao início</span>
          </Link>
        </div>
      </div>

      {/* Hero section - Reduced height */}
      <div 
        className="relative h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${country.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">{country.flag}</div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{country.name}</h1>
            <p className="text-sm md:text-base max-w-xl mx-auto px-4">
              {country.description}
            </p>
          </div>
        </div>
      </div>

      {/* States/Regions section - Compressed */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Programas por Região
        </h2>

        <div className="space-y-6">
          {country.states.map((state, stateIndex) => (
            <div key={stateIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/4">
                  <img 
                    src={state.image} 
                    alt={state.name}
                    className="h-32 md:h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-3/4 p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{state.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">{state.description}</p>

                  <div className="grid gap-4">
                    {state.programs.map((program, programIndex) => (
                      <Card key={programIndex} className="border-l-4 border-l-blue-500">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{program.title}</CardTitle>
                          <div className="flex flex-wrap gap-2 mt-1">
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
                        <CardContent className="space-y-3">
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Investimento</p>
                              <div className="flex items-baseline gap-1">
                                <DollarSign className="h-4 w-4 text-green-600" />
                                <span className="text-sm font-bold text-gray-900">
                                  {program.price}
                                </span>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Prazo</p>
                              <p className="font-semibold text-red-600 flex items-center text-sm">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(program.deadline).toLocaleDateString('pt-BR')}
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs text-gray-500 mb-1">Requisitos</p>
                            <div className="flex flex-wrap gap-1">
                              {program.requirements.map((req, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Link to="/candidatar-se">
                            <Button 
                              className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white text-sm h-9"
                            >
                              <GraduationCap className="h-4 w-4 mr-2" />
                              Candidatar-se
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
