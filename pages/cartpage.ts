import {expect, Locator , Page } from '@playwright/test'
import { constants } from 'buffer';

export class CartPage {
    readonly cart:Page;
    readonly cartLink:Locator; 
    readonly cartText:Locator;


    constructor (cart:Page){
        this.cart=cart;
        this.cartText=cart.locator('.Header__CartCount');
        this.cartLink=cart.locator('a[data-action="open-drawer"][data-drawer-id="sidebar-cart"]').first();
        
    }   
            async checkCartText(){
            await this.cartLink.waitFor({ state: 'visible' });
            await expect(this.cartLink).toBeTruthy();
            await expect(this.cartText).toHaveText('0');
            
        };
        async checkCartLinkText(expectText:string){
            await this.cartLink.waitFor({ state: 'visible',timeout: 5000});
            const actualText = await this.cartLink.innerText();
            await expect(actualText).toBe(expectText);
            
    
        }
        async checkAttributeCartLink(expectAttribute:string){
            await this.cartLink.waitFor({ state: 'visible',timeout:5000 });
            const actualAttribute = await this.cartLink.getAttribute('href');
            await expect(actualAttribute).toBe(expectAttribute);
        }
         async checkCardLink (expectAttribute:string){
            await this.cartLink.waitFor({ state: 'visible',timeout:5000 });
            const actualAttribute = await this.cartLink.getAttribute('href');
            await expect(actualAttribute).toBe(expectAttribute);
         }
         async checkCardLinkClick(){
            await this.cartLink.click();
         }
        };


