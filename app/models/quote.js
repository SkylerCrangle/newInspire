export default class Quote {
  constructor(data) {
    this.quote = data.quote.body,
      this.id = data.quote.id,
      this.author = data.quote.author
  }
  get quoteTemplate() {
    return `
    <h5 class="no-op">"${this.quote}"</h5>
    <p>---${this.author}---</p>
    `
  }
}