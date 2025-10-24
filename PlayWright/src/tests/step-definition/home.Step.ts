import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/home.page";
import { Page } from "playwright";

let homePage: HomePage;
let page: Page; // Asegúrate de obtener la instancia de page



When('Seleccionar productos y agregarlos al carrito', async function () {
 // Supón que tienes acceso a 'page' desde el contexto o lo recibes de otra forma
  homePage = new HomePage(this.page);
  await homePage.clickbackpack();
  await homePage.clickbikeLight();
  await homePage.clickbotShirt();
  await homePage.clickfleeceJacket();
});
Then('Verificar productos en el carrito', async function () {
  await homePage.clickshoppingCartLink();
});
