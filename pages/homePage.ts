import { expect, Locator, Page } from '@playwright/test';
export class HomePage {
    readonly page:Page;
    readonly primaryLogo:Locator ; 
    readonly transporentLogo:Locator ; 
      
    
    constructor (page:Page){
        this.page=page;
        this.primaryLogo=page.locator('.Header__LogoImage--primary');
        this.transporentLogo=page.locator('.Header__LogoImage.Header--transparent');
    }
async navigate (){
    await this.page.goto('https://theconnectedshop.com')
}
async checkTitle (){
    await expect(this.page).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');

}
async checkUrl(){
    await expect (this.page).toHaveURL('https://theconnectedshop.com/');

}
}