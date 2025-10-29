import { Given, When, Then } from "@cucumber/cucumber";
import { HomePage } from "../pages/home.page";
import { Page } from "playwright";

let homePage: HomePage;
let page: Page; 

When('Seleccionar productos y agregarlos al carrito', async function () {
  page = (this as any).page;
  if (!page) throw new Error('Page no inicializado. Asegúrate de crear page en Before hook y asignar this.page = page');
  homePage = new HomePage(page);
  await homePage.clickbackpack();
  await homePage.clickbikeLight();
  await homePage.clickbotShirt();
  await homePage.clickfleeceJacket();
});
Then('Verificar productos en el carrito', async function () {
  await homePage.clickshoppingCartLink();
});
