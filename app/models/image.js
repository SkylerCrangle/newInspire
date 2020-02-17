export default class Image {
  constructor(data) {
    this.url = data.url,
      this.id = data.id,
      this.urlLarge = data.large_url || data.url
  }
}