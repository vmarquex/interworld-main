import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PlusCircle, Trash2 } from 'lucide-react';

interface Course {
  id: number;
  name: string;
}

const SchoolDashboard = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCourse.trim() === '') return;
    setCourses([...courses, { id: Date.now(), name: newCourse.trim() }]);
    setNewCourse('');
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
            <form onSubmit={handleAddCourse} className="flex items-center space-x-2">
              <div className="flex-grow">
                <Label htmlFor="course-name" className="sr-only">Nome do Curso</Label>
                <Input
                  id="course-name"
                  type="text"
                  placeholder="Ex: Inglês Intensivo"
                  value={newCourse}
                  onChange={(e) => setNewCourse(e.target.value)}
                />
              </div>
              <Button type="submit">
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
                    <Button variant="ghost" size="icon" onClick={() => handleDeleteCourse(course.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
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
