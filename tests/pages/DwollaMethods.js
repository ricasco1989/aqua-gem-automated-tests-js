import Page from './page'
class DwollaMethods extends Page {
  constructor() {
    super()
    this.page = new Page()
  }

  purchaseNote(Amount) {
  }

  open() {
    super.open('')
  }
}

export default new DwollaMethods()
