import { test} from "node:test"
import { HomePage } from "../pages/homepage";

test.describe ('HomePage',() => {
 let homePage:HomePage;
 test.beforeEach (async ({page})=>{
    homePage= new HomePage (page);
    await homePage.navigate();
 })
test( 'Open Home Page and check title',async () => {
await homePage.checkUrl();
await homePage.checkTitle();
})
test ('Logo is displayed',async()=> {
await homePage.toBeVisible()

)}
