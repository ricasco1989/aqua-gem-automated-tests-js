// import { expect } from 'chai'
import LoginMethods from '../pages/LoginMethods.js'
import * as ElementClass from '../resources/Elements'

describe('Login', () => {
  it('Login', () => {
    LoginMethods.open('#/login')
    LoginMethods.Login(ElementClass.investorEmail, ElementClass.investorPassword)
  })
})
