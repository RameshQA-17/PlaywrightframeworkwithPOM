import { test } from "../fixtures/Fixtures.js"

import { randomEmail } from "../utils/Helper.js"



test("login",async function({loginpage})
{  
  
  await loginpage.goto("https://freelance-learn-automation.vercel.app/login")

  //const email_id=randomEmail("Ramesh")

  await loginpage.enteremail("admin@email.com")

  await loginpage.enterpassword("admin@123")

  await loginpage.clickonLoginButton()

 
  //await loginpage.waitforVisible(loginpage.menubutton);

  await loginpage.clickonmenubutton()


  await loginpage.clickonLogout()

  await loginpage.assertUrlNotContains("/login")

  
})  