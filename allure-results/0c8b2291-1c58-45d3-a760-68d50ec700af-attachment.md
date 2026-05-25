# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration.spec.js >> New user registration >> create new user
- Location: tests\Registration.spec.js:7:9

# Error details

```
ReferenceError: Cannot access 'registrartionpage' before initialization
```

# Test source

```ts
  1  | import{test as base,expect} from "@playwright/test"
  2  | import { Loginpage } from "../Pages/Loginpage.js"
  3  | import { RegistrationPage } from "../Pages/RegistrationPage.js";
  4  | 
  5  | /** @type {import('@playwright/test').TestType<CustomFixtures & import('@playwright/test').PlaywrightTestArgs & import('@playwright/test').PlaywrightTestOptions, import('@playwright/test').PlaywrightWorkerArgs & import('@playwright/test').PlaywrightWorkerOptions>} */
  6  | const test=base.extend({
  7  | 
  8  |     loginpage:async ({page},use)=>
  9  |     {
  10 | 
  11 |         const loginpage=new Loginpage(page)
  12 |        
  13 |         await use(loginpage)
  14 | 
  15 |     },
  16 | 
  17 |     registrartionpage:async ({page},use)=>
  18 |     {
  19 | 
> 20 |         const registrartionpage=new registrartionpage(page)
     |                                 ^ ReferenceError: Cannot access 'registrartionpage' before initialization
  21 |        
  22 |         await use(registrartionpage)
  23 | 
  24 |     }
  25 | 
  26 | 
  27 | });
  28 | export{test,expect}
  29 | 
```