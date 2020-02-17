export default class Weather {
  constructor(data) {
    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name,
      this.kelvin = data.main.temp,
      this.faren = Math.round(((this.kelvin - 273.15) * (9 / 5) + 32)),
      this.icon = data.weather[0].icon,
      this.iconurl = "http://openweathermap.org/img/w/" + this.icon + ".png";
  };
  get weatherTemplate() {
    return `
    <span id="icon">
    <img id="wicon" src="${this.iconurl}" alt="Weather icon"></span>
    <span>${this.city}: <span> <b> ${this.faren}&#176;F </b></span>
    </span>
    `
  }
}
//(0K − 273.15) × 9/5 + 32