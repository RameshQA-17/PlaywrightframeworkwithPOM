# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintest.spec.js >> login
- Location: tests\logintest.spec.js:7:5

# Error details

```
Error: expect(page).not.toHaveURL(expected) failed

Error: expected value must be a string or regular expression
Expected has value: undefined

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6] [cursor=pointer]:
        - img "logo" [ref=e7]
        - heading "Learn Automation Courses" [level=1] [ref=e8]
      - generic [ref=e9]:
        - img "menu" [ref=e10] [cursor=pointer]
        - generic [ref=e11]:
          - generic [ref=e12]:
            - text: Learn Automation Courses
            - img "delete" [ref=e13] [cursor=pointer]
          - generic [ref=e14]:
            - link "Home" [ref=e15] [cursor=pointer]:
              - /url: /
              - generic [ref=e16]: Home
            - link "Practise" [ref=e17] [cursor=pointer]:
              - /url: /practise
              - generic [ref=e18]: Practise
  - generic [ref=e20]:
    - img "Login" [ref=e22]
    - generic [ref=e23]:
      - generic [ref=e25]:
        - heading "Sign In" [level=2] [ref=e26]
        - textbox "Enter Email" [ref=e27]
        - textbox "Enter Password" [ref=e28]
        - button "Sign in" [ref=e29] [cursor=pointer]
        - link "New user? Signup" [ref=e30] [cursor=pointer]:
          - /url: /signup
      - generic [ref=e31]:
        - heading "Connect with us" [level=2] [ref=e32]
        - generic [ref=e33] [cursor=pointer]:
          - link [ref=e34]:
            - /url: https://youtube.com/MukeshOtwani
            - img [ref=e35]
          - link [ref=e38]:
            - /url: https://twitter.com/MukeshOtwani
            - img [ref=e39]
          - link [ref=e41]:
            - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
            - img [ref=e42]
          - link [ref=e44]:
            - /url: https://www.facebook.com/groups/256655817858291
            - img [ref=e45]
          - link [ref=e47]:
            - /url: https://learn-automation/reddit
            - img [ref=e48]
  - generic [ref=e62]:
    - generic [ref=e63]:
      - heading "Learn Automation By Mukesh Otwani" [level=3] [ref=e64]
      - heading "©2023 All rights reserved" [level=2] [ref=e65]
    - generic [ref=e66] [cursor=pointer]:
      - link [ref=e67]:
        - /url: https://youtube.com/MukeshOtwani
        - img [ref=e68]
      - link [ref=e71]:
        - /url: https://twitter.com/MukeshOtwani
        - img [ref=e72]
      - link [ref=e74]:
        - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
        - img [ref=e75]
      - link [ref=e77]:
        - /url: https://www.facebook.com/groups/256655817858291
        - img [ref=e78]
```

# Test source

```ts
  1  | import { expect } from "@playwright/test"
  2  | 
  3  | export class BasePage
  4  | 
  5  | {
  6  | /**
  7  |  * 
  8  |  * @param {import("@playwright/test").page} page         
  9  |  */ 
  10 | 
  11 |   constructor(page)
  12 |   {
  13 | 
  14 |     this.page=page
  15 |   }
  16 |    
  17 |   async refreshapplication()          //refresh application
  18 |   {
  19 |     await this.page.reload()
  20 |   }
  21 | 
  22 | 
  23 |   async goback()
  24 |   {
  25 |     await this.page.goBack()
  26 |   }
  27 | 
  28 |   async goforward()
  29 |   {
  30 |     await this.page.goforward()
  31 |   }
  32 | 
  33 |   async goto(path)
  34 |   {
  35 |     await this.page.goto(path)
  36 |   }
  37 | 
  38 |   getcurrenturl()
  39 |   {
  40 |     return this.page.url()
  41 |   }
  42 | 
  43 |   async getCurrentTitle()
  44 |   {
  45 |     return await this.page.title()
  46 |   }
  47 | 
  48 |   async assertUrlNotContains(text)
  49 |   {
> 50 |     await expect(this.page).not.toHaveURL(text)
     |                                 ^ Error: expect(page).not.toHaveURL(expected) failed
  51 |   }
  52 | 
  53 |   /**
  54 |    * 
  55 |    * @param {import ("@playwright/test").locator} locator 
  56 |    * @param {number} timeout 
  57 |    */
  58 | 
  59 | 
  60 | 
  61 |   async waitforVisible(locator,timeout=10000)
  62 |   {
  63 |     //await locator.waitFor({state:"Visible",timeout})
  64 |     await locator.waitFor({ state: "visible", timeout })
  65 |   }
  66 | }
```