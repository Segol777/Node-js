// userManagement.ts
export namespace UserManagement {

    export namespace Admin {

        export class AdminUser {
            constructor(
                public name: string,
                public email: string,
                public isSuperAdmin: boolean = false
            ) {}

            setSuperAdminStatus(status: boolean): void {
                this.isSuperAdmin = status;
                console.log(`Права супер-администратора для ${this.name} установлены на: ${status}`);
            }

            displayInfo(): void {
                console.log(`Имя: ${this.name}`);
                console.log(`Email: ${this.email}`);
                console.log(`Супер-администратор: ${this.isSuperAdmin}`);
            }
        }
    }
}
