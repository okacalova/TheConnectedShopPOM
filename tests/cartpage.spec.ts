import {test} from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { SearchPage } from "../pages/searchpage";
import { CartPage } from "../pages/cartpage";

test.describe ('CheckCART Functional',() => {
 let homePage:HomePage;
 let cartPage:CartPage;
 test.beforeEach (async ({page})=>{
    homePage= new HomePage (page);
    cartPage = new CartPage(page);
    await homePage.navigate();

 });
 test('check Card Null', async () => {
    await cartPage.checkCardLink('/cart'); 
    // await cartPage.checkCartLinkText('cart');
    await cartPage.checkCardLinkClick();
});


});