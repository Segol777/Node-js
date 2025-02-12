interface Employee {
  name: string;
  salary: number;
}

const employees: Employee[] = [
  { name: "Alice", salary: 5000 },
  { name: "Bob", salary: 6000 },
  { name: "Charlie", salary: 7000 }
]

function getSalaries(employees: Employee[]): number[] {
  return employees.map(employee => employee.salary);
}

const salaries = getSalaries(employees);
console.log(salaries); 