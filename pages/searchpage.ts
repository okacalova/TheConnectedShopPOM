import {expect, Locator} from '@playwright/test'
import Search from @playwright/test
export class SearchPage {
    readonly search:Search;
    readonly searchLink:Locator ; 
    readonly searchlink2: Locator;

    constructor (search:Search){
        this.search=search;
        this.searchLink=search.locator('.Heading Link Link--primary Text--subdued u-h8');
        this.searchlink2=search.locator('.a[data-action="toggle-search"]');
    }    
        async navigate (){
            await this.search.goto('https://theconnectedshop.com')
        }
        async checkTitle (){
            await expect(this.search).toHaveTitle('The Connected Shop - Smart Locks, Smart Sensors, Smart Home & Office');
        
        }
        async checkUrl(){
            await expect (this.search).toHaveURL('https://theconnectedshop.com/');
        
        }
        async checkLogoVisibility(){
            await expect (this.search.locator).toBeVisible();
            await expect (this.search.locator).not.toBeVisible();
        };
    };


