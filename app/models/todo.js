export default class Todo {
  constructor(data) {
    //console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.message = data.message,
      //this.data = data.data || []
      // this.id = data.id || "",
      this.completed = data.completed || false,
      this.description = data.description,
      this._id = data._id


    // message: data[0].value,
    // completed: data[0].checked,
    // description: data[0].value,
    // _id: data._id

  };


  get todoTemplate() {

    return `
    <li>
    <label for="listBox"> ${this.message}</label>
    <span></span>
    <input type="checkbox" id="vehicle1" name="listBox" value="Bike">
  </li>
    `
  }

}
