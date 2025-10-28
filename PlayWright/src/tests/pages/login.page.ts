import { Page, expect,Locator } from "@playwright/test";

export class LoginPage {
    private page: Page; 

    private username: Locator;
    private password: Locator;
    private loginButton: Locator;

constructor(page: Page) {
    this.page = page;

     this.username = page.locator("input[data-test='username']");
     this.password = page.locator("input[data-test='password']");
     this.loginButton= page.locator("#login-button");
}



async login(): Promise<void> {
        try {
            console.log('🔹 Iniciando sesión...');
            
            // Espera a que la página esté completamente cargada
            await this.page.waitForLoadState('domcontentloaded');
        
            // Manejar spinner de carga si está presente
            await this.page.goto('https://www.saucedemo.com/');
        
            // Verificar que la URL cambie después del login
            console.log('✅ Inicio de sesión completado.');
        } catch (error) {
            console.error(`❌ Error durante el inicio de sesión: `);
            throw error;
        }
        
    }

    // Verificar y llenar el campo de usuario
   async ingresUserName (username: string) {
        try {
                     if (await this.username.isVisible()){
            console.log('🔹 Llenando el campo de usuario...');
                await this.username.fill(username);
            } else {
                throw new Error('El campo de usuario no está disponible.');
            }
            } catch (error) {
            console.error(`❌ Error ingresar Username`);
            throw error;
        }
    }
        
            // Verificar y llenar el campo de contraseña
    async ingresPassword (password: string) {
        try {
            if (await this.password.isVisible()){
            console.log('🔹 Llenando el campo de contraseña...');
                await this.password.fill(password);
            } else {
                throw new Error('El campo de contraseña no está disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al ingerasr password`);
            throw error;
        }
    }
        
            // Verificar y hacer clic en el botón de login
    async clickBotonLogin () {
        try { 
            console.log('🔹 Click en login iniciado.');
        
            await this.loginButton.waitFor({ state: 'visible' });
            {
        -    await this.loginButton.waitFor({ state: 'visible' });
        await this.page.waitForTimeout(500);   
         await this.loginButton.click();
        +    // Espera a que la app termine de navegar/cargar después del login.
        +    // Si conoces la URL o un selector que aparece tras el login, usa waitForURL o waitForSelector en lugar de networkidle.
        +    await this.page.waitForLoadState('networkidle');
         console.log('🔹 Click en login realizado y navegación completada.');
        
             } 
        } catch (error) {
            console.error(`❌ Error al ingresar en botón de inicio de sesión:`);
            throw error;
        }
    }
/** Verificar texto de inicio */
    async verifySwagLabs() {
        try {
            await this.page.waitForTimeout(2000); // Espera adicional para asegurar que la página haya cargado
            console.log('🔹 Verificando éxito del inicio de sesión texto Hola...');
             await expect(this.page.getByText('Swag Labs')).toBeVisible();
            console.log('✅ Inicio de sesión exitoso.');
        } catch (error) {
            console.error(`❌ Error al verificar el inicio de sesión:`);
            throw error;
        }
    }
}
