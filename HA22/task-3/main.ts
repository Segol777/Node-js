import { UserManagement } from './userManagement';

const admin = new UserManagement.Admin.AdminUser("Alice", "alice@example.com");

admin.displayInfo();

admin.setSuperAdminStatus(true);

admin.displayInfo();
