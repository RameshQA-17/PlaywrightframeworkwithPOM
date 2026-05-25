import{test as base,expect} from "@playwright/test"
import { Loginpage } from "../Pages/Loginpage.js"
import { RegistrationPage } from "../Pages/RegistrationPage.js";

/** @type {import('@playwright/test').TestType<CustomFixtures & import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */
const test=base.extend({

    loginpage:async ({page},use)=>
    {

        const loginpage=new Loginpage(page)
       
        await use(loginpage)

    },

    registrartionpage:async ({page},use)=>
    {

        const registrartionpage=new RegistrationPage(page)
       
        await use(registrartionpage)

    }


});
export{test,expect}
