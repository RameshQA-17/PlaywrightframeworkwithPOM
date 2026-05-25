# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.js >> New user registration >> create new user using POM Sanju
- Location: tests\Registration.spec.js:12:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByText('New user? Signup')
    - locator resolved to <a href="/signup" class="subLink">New user? Signup</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { BasePage } from "./Basepage.js"
  2  | 
  3  | export class RegistrationPage extends BasePage{
  4  | 
  5  | 
  6  |     constructor(page)
  7  |     {
  8  |         super(page)
  9  |         this.newURLLink=this.page.getByText("New user? Signup")
  10 |         this.name=this.page.getByPlaceholder("Name")
  11 |         this.email=this.page.getByPlaceholder("Email")
  12 |         this.password=this.page.getByPlaceholder("Password")
  13 |         this.interest=this.page.getByText("JavaScript",{exact:true})
  14 |         this.gender=this.page.locator("//input[@value='Male']")
  15 |         this.state=this.page.locator("#state")
  16 |         this.hobbies=this.page.locator("#hobbies")
  17 |         this.signInButton=this.page.locator(".submit-btn")
  18 |         
  19 |     }
  20 | 
  21 |     async clickOnNewUser(){
> 22 |         await this.newURLLink.click();
     |                               ^ Error: locator.click: Target page, context or browser has been closed
  23 |     }
  24 | 
  25 |     async enterName(name){
  26 |         await this.name.fill(name);
  27 |     }
  28 |     
  29 |     async enterEmail(email){
  30 |         await this.email.fill(email);
  31 |     }
  32 | 
  33 |     async enterPassword(password){
  34 |         await this.password.fill(password);
  35 |     }
  36 | 
  37 |     async selectInterest(){
  38 |         await this.interest.click();
  39 |     }
  40 | 
  41 |     async selectGender(){
  42 |         await this.gender.click();
  43 |     }
  44 | 
  45 |     async selectState(state){
  46 |         await this.state.selectOption({value:state});
  47 |     }
  48 | 
  49 |     async enterHobbies(hobbies){
  50 |         await this.hobbies.selectOption(hobbies);
  51 |     }
  52 | 
  53 |     async clickSignIn(){
  54 |         await this.signInButton.click();
  55 |     }
  56 | 
  57 |     
  58 | }
```