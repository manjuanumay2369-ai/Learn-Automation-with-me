import {test, expect} from "@playwright/test"


test ('verify naukri',async ({page})=>{

await page.goto('https://www.naukri.com/mnjuser/profile?id=&altresid')

await page.setInputFiles('input[type="file"]', 'e2e\MANJUNATH R.docx')

await expect(page.locator("Today"))

})