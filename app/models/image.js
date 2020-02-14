export default class Image {
  constructor(data) {
    //console.log('[RAW Quote API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.url = data.url,
      this.id = data.id,
      this.urlLarge = data.large_url || data.url
    //this.author = data.quote.author
  }
}