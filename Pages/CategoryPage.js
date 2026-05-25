import{test} from "../fixtures/Fixtures.js"

import {Credentials} from "../testdata/Credentials.json" assert{type:"json"}
import { DashboardPage } from "./DashboardPage.js"

test.describe("category page tests",()=>{

    test("Add new category and verify",async({Loginpage,DashboardPage})=>
    {
        const catagoryname=`playwright_${Date.now()}`

        await loginpage.goto("/Login")
     

    }
        

}
