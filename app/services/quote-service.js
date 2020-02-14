import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  getQuote() {
    console.log("quote call")
    _quoteApi.get("")
      .then(res => {
        let myQuote = new Quote(res.data);
        console.log(myQuote)
      })
      .catch(err => {
        throw new Error(err);
      });
  }


}

const quoteService = new QuoteService();
export default quoteService;
