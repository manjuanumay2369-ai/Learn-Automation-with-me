import {test, expect} from '@playwright/test';
import { log } from 'console';

test('add products into cart and sum of the total cost of product', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');

    await page.locator("//input[@class='Pke_EE']").fill("iphone 14 pro max");// we can provide any product name related to search box
    await page.keyboard.press('Enter');

const item1 = await page.locator("div.Nx9bqj._4b5DiR").nth(0).textContent()
 console.log( item1);

 
const item2 = await page.locator("div.Nx9bqj._4b5DiR").nth(1).textContent()
console.log( item2);



console.log ("totalcost ="  + (Number(item1.replace ("₹","" ).replace(",","").replace(",",""))
 + Number(item2.replace ("₹","" ).replace(",","").replace(",","")) ))


});
