import { BasePage } from "./Basepage.js"

export class Loginpage extends BasePage
{

   constructor(page)  //10 of spec
   {
      super(page)    //parent class constructor in our case parent class is basepage //super() calls the parent class constructor
      //this.page=page
      this.emailField=page.locator("#email1")
      this.passwordfield=page.locator("#password1")
      this.loginbutton=page.locator(".submit-btn")
      this.menubutton=page.locator("//img[@alt='menu']")
      this.logoutbutton=page.locator("//button[text()='Sign out']")
      
   }
    

   async enteremail(email)
   {
       await this.emailField.fill(email)
   }


   async enterpassword(pass)
   {
       await this.passwordfield.fill(pass)    
   }

   async clickonLoginButton()
   {
    await this.loginbutton.click()
   }

   async clickonmenubutton()
   {
     await this.menubutton.click()
   }

   async clickonLogout()
   {
    await this.logoutbutton.click()
   }


}