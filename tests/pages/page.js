'use strict'

export default class Page {
  // Login Selectors
  get LoginButton() {
    return browser.element('#app > div > div > div > div.panel-body > form > button')
  }
  get Email1() {
    return browser.element('#signupInputEmail1')
  }

  get Password1() {
    return browser.element('#signupInputPassword1')
  }

  // Account Summary
  get MakeAnInvestmentButton1() {
    return browser.element('#app > section > div > div.row > div > div > button')
  }
  // PurchaseNote
  get InvestmentAmount1() {
    return browser.element('#app > section > div > div.row > div > div > div.panel-body > div > div.col-md-6 > form > div:nth-child(1) > input')
  }

  get RateTerm1() {
    return browser.element('#app > section > div > div.row > div > div > div.panel-body > div > div.col-md-6 > form > div:nth-child(2) > select')
  }

  get PurchaseNoteCbx() {
    return browser.element('#app > section > div > div.row > div > div > div.panel-body > div > div.col-md-6 > form > div.checkbox.c-checkbox.check-margin > label > span')
  }
  get PurchaseNoteSubmit1() {
    return browser.element('#app > section > div > div.row > div > div > div.panel-body > div > div.col-md-6 > button')
  }
  get AcceptInvestment1() {
    return browser.element('#app > section > div > div.modal-overlay > div > div > div > div > button.btn.btn-info.btn-lg.btn-accept')
  }

  // Investment

  get InvestmentSection() {
    return browser.element('#app > aside > div > nav > ul > li:nth-child(3) > a > span')
  }

  get MakeInvestmentButton2() {
    return browser.element('#panelChart9 > button')
  }
  get TableInvestment1() {
    return browser.element('#panelChart9 > div.table-responsive.top-margin > table > tbody > tr')
  }
  get LastNoteInserted() {
    return browser.element('#panelChart9 > div.table-responsive.top-margin > table > tbody > tr:nth-child(1) > td:nth-child(1)')
  }

  get StatusOfNoteInserted() {
    return browser.element('#panelChart9 > div.table-responsive.top-margin > table > tbody > tr:nth-child(1) > td:nth-child(9)')
  }

  // constructor(title) {
  // this.title = title
  // }

  open(path) {
    browser.url(`/${path}`)
  }

  getUrl() {
    return browser.getUrl()
  }
}
