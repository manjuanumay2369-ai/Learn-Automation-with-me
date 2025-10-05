

import {test, expect} from '@playwright/test';

// test ('ADD rediff email regester check box', async ({ page }) => {


//     await page.goto ('https://register.rediff.com/register/register.php?FormName=user_details')

//     const checkbox_status= await page.locator ('input[name^="chk_altemail"]').isChecked()

//     console.log(checkbox_status)  // here checkbox status is false means not checked the check box

//     if (checkbox_status) {   // here in if it is true then it will execute first if statement,

//         await page.locator ('input[name^="chk_altemail"]').check()
//     } else {   // if statement is false then else statemtn will execute as true will check the check box
//         await page.locator ('input[name^="chk_altemail"]').check()

//     }

// })


//Baesd on browser need to open the wesites like amazon,flipcart,meesho

// test('open browser based on websites', async ({ page , browserName }) => {

// if (browserName == "chromium") {
//  await page.goto ("https://www.flipkart.com/")
// } 
// else if(browserName == "firefox") {

//     await page.goto("https://www.amazon.in/")

// } else if (browserName == "webkit") {

//     await page.goto("https://www.meesho.com/")
// } else  (browserName =="Microsoft Edge") 
// { 
//        await page.goto("https://copilot.microsoft.com/chats/8xHrkYpWYXghHQfKBP3K9")
// }

// })



test('open browser based on websites using Switch', async ({ page, browserName }) => {

    switch (browserName) {

        case "chromium":

            await page.goto("https://www.flipkart.com/")

            break;

        case "firefox":

            await page.goto("https://www.amazon.in/")

            break;

        case "webkit":

            await page.goto("https://www.meesho.com/")

            break;


        // default  "Microsoft Edge": 


        // await page.goto("https://copilot.microsoft.com/chats/8xHrkYpWYXghHQfKBP3K9")


    }

})