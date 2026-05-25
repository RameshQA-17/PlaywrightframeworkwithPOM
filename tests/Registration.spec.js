import {test,expect} from "../fixtures/Fixtures.js"

import testdata from"../testdata/registration.json"



test.describe("New user registration",()=>
{
  
    for(const data of testdata)
    
    test(`create new user using POM ${data.name}`,async function({registrartionpage})
    {
      
    await registrartionpage.goto("https://freelance-learn-automation.vercel.app/login")
    
    await registrartionpage.clickOnNewUser()

    await registrartionpage.enterName(data.name)

    await registrartionpage.enterEmail(`${data.email}_${Date.now()}@email.com`)

    await registrartionpage.enterPassword(data.password)

    await registrartionpage.selectInterest()

    await registrartionpage.selectGender()

    await registrartionpage.selectState(data.state)

    await registrartionpage.enterHobbies(data.hobbies)

    await registrartionpage.clickSignIn()

    //await registrartionpage.assertUrlNotContains(/signup/)


})

})