//random email
//random Number
//readcsv
//readExcel
//readJson


export function randomEmail(prefix="testuser")
{
    const email=`${prefix}_${Date.now()}@email.com`
    return email

}