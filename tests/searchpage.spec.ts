import {test} from "@playwright/test";
import { HomePage } from "../pages/homepage";
import { SearchPage } from "../pages/searchpage";

test.describe ('CheckSearch Functional',() => {
 let homePage:HomePage;
 let searchPage:SearchPage;
 test.beforeEach (async ({page})=>{
    homePage= new HomePage (page);
    searchPage = new SearchPage(page);
    await homePage.navigate();

 });
 test( 'SearchLink',async () => {
    await searchPage.checkSearchLink();
    await searchPage.checkSearchLinkText();
    })
});