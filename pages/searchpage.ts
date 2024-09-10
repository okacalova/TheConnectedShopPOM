import {expect, Locator , Page } from '@playwright/test'
import { constants } from 'buffer';

export class SearchPage {
    readonly search:Page;
    readonly searchLink:Locator ; 
    readonly searchInput: Locator;

    constructor (search:Page){
        this.search=search;
        this.searchLink=search.locator('a[data-action="toggle-search"].Link--primary');
        
    }    
     
        async checkSearchLink(){
            await this.searchLink.waitFor({ state: 'visible' });
            await expect(this.searchLink).toBeTruthy();
        };
        async checkSearchLinkText(expectText:string){
            await this.searchLink.waitFor({ state: 'visible' });
            const actualText = await this.searchLink.innerText();
            await expect(actualText).toBe(expectText);
            
    
        }
        async checkAttributeSearchLink(expectAttribute:string){
            await this.searchLink.waitFor({ state: 'visible' });
            const actualAttribute = await this.searchLink.getAttribute('href');
            await expect(actualAttribute).toBe(expectAttribute);
        }
    };


