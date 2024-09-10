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
 test( 'SearchAtrributeLink',async () => {
    await searchPage.checkAttributeSearchLink('/search');
    await searchPage.checkSearchLinkText('SEARCH');
    })

});