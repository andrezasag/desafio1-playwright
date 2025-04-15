const { expect } = require('@playwright/test');

export class FormPage{

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('https://demoqa.com/automation-practice-form')

        const userForm = this.page.locator('.practice-form-wrapper')
        await expect(userForm).toBeVisible()
    }

    async submitStudentForm(first_name, last_name, mobile, address) {
        await this.page.getByPlaceholder('First Name').fill(first_name)
        await this.page.getByPlaceholder('Last Name').fill(last_name)
        await this.page.getByPlaceholder('Mobile Number').fill(mobile)
        await this.page.getByPlaceholder('Current Address').fill(address)
    //    await this.page.getByText('Select State').selectOption({ label: 'NCR' });
        await this.page.getByText('Female').click()
        await this.page.getByText('Music').click()
        await this.page.getByText('Submit').click()
    }

    async sent(text){

     //   const confirmation = this.page.getByText('Thanks for submitting the form')
     //   await this.page.waitForLoadState('networkidle')
     //   await expect(confirmation).toBeVisible()
     
     const alert = this.page.locator('.modal-header')
     await expect(alert).toHaveText(text)

    }

  
}