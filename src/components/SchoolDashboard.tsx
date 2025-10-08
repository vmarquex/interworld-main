import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  vacancies: number;
}

const SchoolDashboard = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState('');
  const [newVacancies, setNewVacancies] = useState('');

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCourse.trim() === '' || !newVacancies) return;
    setCourses([...courses, { id: Date.now(), name: newCourse.trim(), vacancies: parseInt(newVacancies, 10) }]);
    setNewCourse('');
    setNewVacancies('');
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Painel da Escola</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Adicionar Novo Curso</h3>
            <form onSubmit={handleAddCourse} className="flex items-start md:items-center space-x-2 flex-col md:flex-row gap-2">
              <div className="flex-grow w-full">
                <Label htmlFor="course-name" className="sr-only">Nome do Curso</Label>
                <Input
                  id="course-name"
                  type="text"
                  placeholder="Ex: Inglês Intensivo"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                  required
                />
              </div>
              <div className="w-full md:w-auto">
                <Label htmlFor="course-vacancies" className="sr-only">Vagas</Label>
                <Input
                  id="course-vacancies"
                  type="number"
                  placeholder="Vagas"
                  value={newVacancies}
                  onChange={(e) => setNewVacancies(e.target.value)}
                  className="w-full md:w-24"
                  required
                />
              </div>
              <Button type="submit" className="w-full md:w-auto">
                <PlusCircle className="h-4 w-4 mr-2" />
                Adicionar
              </Button>
            </form>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Cursos Oferecidos</h3>
            {courses.length > 0 ? (
              <ul className="space-y-2">
                {courses.map((course) => (
                  <li key={course.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <span className="font-medium">{course.name}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-md">{course.vacancies} vagas</span>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteCourse(course.id)}>
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">Nenhum curso adicionado ainda.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchoolDashboard;
