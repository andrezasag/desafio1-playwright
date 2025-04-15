// @ts-check
const { test, expect } = require('@playwright/test')

const { FormPage } = require('../pages/FormPage')

let formPage

test.beforeEach(async ({ page }) => {
    formPage = new FormPage(page)
})

test('realizar cadastro com sucesso', async ({ page }) => {
    await formPage.visit()
    await formPage.submitStudentForm('Andreza', 'Goncalves', '5521995632', 'Rua dos Bobos 10')
    await formPage.sent('Thanks for submitting the form')
})

test('não cadastrar com campo de nome vazio', async({ page }) =>{
    await formPage.visit()
    await formPage.submitStudentForm('', 'Goncalves', '5521995632', 'Rua dos Bobos 10')
    
    await page.waitForTimeout(800);
    
    const campo = page.getByPlaceholder('First Name');
    const borderColor = await campo.evaluate((el) => getComputedStyle(el).borderColor);
    await expect(borderColor).toBe('rgb(220, 53, 69)');

}) 

test('não cadastrar com campo de telefone vazio', async({ page }) =>{
    await formPage.visit()
    await formPage.submitStudentForm('Andreza', 'Goncalves', '', 'Rua dos Bobos 10')
    
    await page.waitForTimeout(800);
    
    const campo = page.getByPlaceholder('Mobile Number');
    const borderColor = await campo.evaluate((el) => getComputedStyle(el).borderColor);
    await expect(borderColor).toBe('rgb(220, 53, 69)');

}) 