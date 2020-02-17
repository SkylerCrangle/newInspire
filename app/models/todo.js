export default class Todo {
  constructor(data) {
    this.completed = data.completed || false,
      this.description = data.description,
      this._id = data._id
  };

  get todoTemplateT() {
    return `
    <li>
    <label for="${this._id}"> ${this.description}</label>
    <span></span>
    <input type="checkbox" id="${this._id}" name="${this._id}" value="${this.description}" onclick="app.todoController.uncheck('${this._id}')" checked>
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


