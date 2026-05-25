import { expect } from "@playwright/test"

export class BasePage

{
/**
 * 
 * @param {import("@playwright/test").page} page         
 */ 

  constructor(page)
  {

    this.page=page
  }
   
  async refreshapplication()          //refresh application
  {
    await this.page.reload()
  }


  async goback()
  {
    await this.page.goBack()
  }

  async goforward()
  {
    await this.page.goforward()
  }

  async goto(path)
  {
    await this.page.goto(path)
  }

  getcurrenturl()
  {
    return this.page.url()
  }

  async getCurrentTitle()
  {
    return await this.page.title()
  }

  async assertUrlNotContains(text)
  {
    await expect(this.page).not.toHaveURL(text)
  }

  /**
   * 
   * @param {import ("@playwright/test").locator} locator 
   * @param {number} timeout 
   */



  async waitforVisible(locator,timeout=10000)
  {
    //await locator.waitFor({state:"Visible",timeout})
    await locator.waitFor({ state: "visible", timeout })
  }
}