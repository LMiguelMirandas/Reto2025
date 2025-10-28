import { Given, When, Then,setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "playwright";
import { LoginPage } from "../pages/login.page";

setDefaultTimeout(60 * 1000); // Aumenta el timeout a 60s


let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given('Ingresa a bowser web', async function ()  {
  browser = await chromium.launch({ headless: false }); // Cambia a true si no quieres ver el navegador
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.login();
});

When(/Ingresar usuario\s+['"]?([^'"]+)['"]?, contraseña\s+['"]?([^'"]+)['"]?, y clicks en boton login/, async function (username: string, password: string) {
  await loginPage.ingresUserName(username);
  await loginPage.ingresPassword(password);
  await loginPage.clickBotonLogin();
});

Then('Verificacion de ingreso a web', async function () {
  await loginPage.verifySwagLabs();
});
Then('Cerrar borwser', async function () {
  await browser.close();
});