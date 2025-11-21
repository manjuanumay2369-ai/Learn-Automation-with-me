import {test, expect} from "@playwright/test"


test('verify shadow dom', async({page})=>{

await page.goto ("https://practice.expandtesting.com/")
await page.locator("#search-input").fill('shadow dom')
await page.locator("#search-button").click()


}


)