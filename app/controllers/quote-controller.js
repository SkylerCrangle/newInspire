import QuoteService from "../services/quote-service.js";
import store from "../store.js"

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote() {
  let thing = store.State.quote.quoteTemplate
  document.getElementById("quote").innerHTML = thing
}
export default class QuoteController {
  constructor() {
    this.getQuote()
    store.subscribe("quote", drawQuote)
  }


  getQuote() {
    QuoteService.getQuote()

  }

}
