type Admin = {
  name: string;
  permissions: string[];
}

type User = {
  name: string;
  email: string;
}

type AdminUser = Admin & User

const userAdmin : AdminUser = {
  name: 'John',
  permissions: ['read', 'write', 'delete'],
  email: 'user@admin.test'

}

console.log(userAdmin);
