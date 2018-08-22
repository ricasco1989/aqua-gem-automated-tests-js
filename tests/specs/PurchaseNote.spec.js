import LoginMethods from '../pages/LoginMethods.js'
import PurchaseNoteMethods from '../pages/PurchaseNoteMethods.js'
import * as ElementClass from '../resources/Elements.js'

describe('PurchaseNote', () => {
  browser.timeoutsImplicitWait(90000)
  it('Login', () => {
    LoginMethods.open('#/login')
    LoginMethods.Login(ElementClass.investorEmail, ElementClass.investorPassword)
  })

  it('PurchaseNote', () => {
    PurchaseNoteMethods.purchaseNote(ElementClass.amount)
  })
})
