interface Student {
  name: string;
  grade: number;
}

function printStudentInfo({ name, grade }: Student) {
  console.log(`Student: ${name}, Grade: ${grade}`);
}

printStudentInfo({ name: 'Bob', grade: 1 });
