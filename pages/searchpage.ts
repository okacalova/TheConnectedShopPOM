import {expect, Locator , Page } from '@playwright/test'
import { constants } from 'buffer';

export class SearchPage {
    readonly search:Page;
    readonly searchLink:Locator ; 
    readonly searchInput: Locator;

    constructor (search:Page){
        this.search=search;
        this.searchLink=search.locator('.a[data-action="toggle-search"]');
    }    
     
        async checkSearchLink(){
            // await expect(this.searchLink).toBeVisible();
            await expect(this.searchLink).toBeTruthy;
        };
        async checkSearchLinkText(expectText:string=('Search')){
            const actualText = await this.searchLink.innerText();
            await expect(actualText).toBe(expectText);
    
        }
        async checkAttributeSearchLink(expectAttribute:string=('Get attribute')){
            const actualAttribute= await this.searchLink.getAttribute('href');
            await expect(actualAttribute).toBe(expectAttribute);
        }
    };


