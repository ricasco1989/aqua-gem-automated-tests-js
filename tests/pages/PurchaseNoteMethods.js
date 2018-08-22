import Page from './page'

class PurchaseNoteMethods extends Page {
  constructor() {
    super()
    this.page = new Page()
  }

  purchaseNote(Amount) {
    browser.pause(15000)
    this.page.MakeAnInvestmentButton1.waitForVisible()
    this.page.MakeAnInvestmentButton1.click()
    browser.pause(15000)
    this.page.PurchaseNoteSubmit1.waitForVisible()
    this.page.PurchaseNoteSubmit1.waitForExist()
    this.page.InvestmentAmount1.setValue(Amount)
    this.page.RateTerm1.waitForVisible()
    this.page.RateTerm1.click()
    this.page.RateTerm1.selectByVisibleText('1.50%, 1 year')
    this.page.PurchaseNoteCbx.click()
    this.page.PurchaseNoteSubmit1.click()
    this.page.AcceptInvestment1.waitForExist()
    this.page.AcceptInvestment1.click()
    browser.pause(10000)
  }

  InvestmentSectionMethod() {
    this.page.InvestmentSectio.click()
    browser.pause(10000)
    this.page.MakeInvestmentButton2.waitForVisible()
  }

  GetDynamicNotesStatus(Value, Column1, Column2) {
    // var val = ''
    // var count = $(this.page.TableInvestment1).length
    // var x = document.getElementById(this.page.TableInvestment1).rows.length

    // for (i = 0; i < count; i++) {
    /* Pending add the equivalent on
     Javascript to run a table and get values for a dynamic object */
    // }
  }

  open() {
    super.open('')
  }
}

export default new PurchaseNoteMethods()
