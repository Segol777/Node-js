interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number
}

const student : Student = {
  firstName: 'Alice',
  lastName: 'Phoenix',
  grade: 1,
}

function studentsData(student: Student):void {
  const { firstName, lastName, grade } = student
  console.log(`Student: ${firstName} ${lastName}, grade ${grade}`)
  
}

studentsData(student)