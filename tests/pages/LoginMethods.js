import Page from './page'

class LoginMethods extends Page {
  constructor() {
    super()
    this.page = new Page()
  }

  Login(email, password) {
    browser.windowHandleFullscreen()
    this.page.LoginButton.waitForExist()
    this.page.Email1.setValue(email)
    this.page.Password1.setValue(password)
    this.page.LoginButton.click()
    this.page.MakeAnInvestmentButton1.waitForExist()
  }

  open(param) {
    super.open(/* '' */param)
  }
}

export default new LoginMethods()
