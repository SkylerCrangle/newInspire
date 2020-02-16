export default class Todo {
  constructor(data) {
    //console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    // this.message = data.message,
    //this.data = data.data || []
    // this.id = data.id || "",
    this.completed = data.completed || false,
      //this.completed = data.completed,
      this.description = data.description,
      this._id = data._id


    // message: data[0].value,
    // completed: data[0].checked,
    // description: data[0].value,
    // _id: data._id

  };


  get todoTemplateT() {
    return `
    <li>
    <label for="${this._id}"> ${this.description}</label>
    <span></span>
    <input type="checkbox" id="${this._id}" name="${this._id}" value="${this.description}" checked>
    <button class="btn btn-clear text-muted" onclick="app.todoController.removeTodo('${this._id}')">X</button>
  </li>
    `}

  get todoTemplateF() {
    return `
      <li>
      <label for="listBox"> ${this.description}</label>
      <span></span>
      <input type="checkbox" id="vehicle1" name="listBox" value="Bike" onclick="app.todoController.toggleTodoStatus('${this._id}')">
      <button class="btn btn-clear text-muted" onclick="app.todoController.removeTodo('${this._id}')">X</button>
    </li>
      `
  }
}


