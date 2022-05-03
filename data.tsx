import CoursesIcon from './public/courses.svg';
import SchoolIcon from './public/school.svg';
import StudentsIcon from './public/students.svg';

export const menuItems = [
  { icon: <CoursesIcon /> },
  ,
  ,
  ,
  { icon: <SchoolIcon /> },
  { icon: <StudentsIcon /> },
];

export const categories: (keyof typeof Category)[] = [
  'courses',
  ,
  ,
  ,
  'school',
  'students',
];

export const categoryLabels = {
  courses: 'Курсы',
  school: 'Для школьников',
  students: 'Студентам',
};

export enum Category {
  courses = 0,
  school = 4,
  students = 5,
}
