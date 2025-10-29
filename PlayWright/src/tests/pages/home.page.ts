import { Page, expect,Locator } from "@playwright/test";

export class HomePage {
    private page: Page; 

    private backpack: Locator;
    private bikeLight: Locator;
    private botShirt: Locator;
    private fleeceJacket: Locator;
    private shoppingCartLink: Locator;

constructor(page: Page) {
    this.page = page;

    this.backpack = page.locator("[data-test='add-to-cart-sauce-labs-backpack']");
     this.bikeLight = page.locator("[data-test='add-to-cart-sauce-labs-bike-light']");
     this.botShirt= page.locator("[data-test='add-to-cart-sauce-labs-bolt-t-shirt']");
     this.fleeceJacket= page.locator("[data-test='add-to-cart-sauce-labs-fleece-jacket']");
    this.shoppingCartLink= page.locator("[data-test='shopping-cart-link']");
     
    }

    // Verificar y hacer clic en el botón de login
    async clickbackpack () {
        try { 
            await this.page.waitForTimeout(500);
            if (await this. backpack.isVisible()) {
                console.log('🔹 Haciendo clic en el producto backpack...');
                await this.backpack.click({force:true});
            } else {
                throw new Error('El botón de producto no disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al seleción de producto:`);
            throw error;
        }
    }
    async clickbikeLight () {
        try { 
            if (await this. bikeLight.isVisible()) {
                console.log('🔹 Haciendo clic en el producto bikeLight...');
                await this.bikeLight.click({force:true});
            } else {
                throw new Error('El botón de producto no disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al seleción de producto:`);
            throw error;
        }
    }
    async clickbotShirt () {
        try { 
            if (await this. botShirt.isVisible()) {
                console.log('🔹 Haciendo clic en el producto botShirt...');
                await this.botShirt.click({force:true});
            } else {
                throw new Error('El botón de producto no disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al seleción de producto:`);
            throw error;
        }
    }
    async clickfleeceJacket () {
        try { 
            if (await this. fleeceJacket.isVisible()) {
                console.log('🔹 Haciendo clic en el producto fleeceJacket...');
                await this.fleeceJacket.click({force:true});
            } else {
                throw new Error('El botón de producto no disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al seleción de producto:`);
            throw error;
        }
    }
    async clickshoppingCartLink () {
        try { 
            await this.page.waitForTimeout(500);
            if (await this. shoppingCartLink.isVisible()) {
                console.log('🔹 Haciendo clic en el carrito de compra...');
                await this.shoppingCartLink.click({force:true});
            } else {
                throw new Error('El botón de carrito de comra no disponible.');
            }
        } catch (error) {
            console.error(`❌ Error al seleción carrito de compra:`);
            throw error;
        }
    }
}
