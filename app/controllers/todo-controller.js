import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  let things = store.State.todo;
  let template = "";
  things.forEach(thing => {
    template += thing.todoTemplate;
  })
  document.getElementById("allThings").innerHTML = template;
}

export default class TodoController {
  constructor() {
    store.subscribe("todo", _drawTodos)
    //TODO Remember to register your subscribers
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    //debugger;
    console.log(event)
    var data = event.target;
    console.log(data[0].value)
    var todo = {
      message: data[0].value,
      completed: data[0].checked,
      description: data[0].value,
      _id: data._id
      // id: data.id.value || "",
      // checked: false

      // TODO build the todo object from the data that comes into this method
    };
    console.log(todo, 1)
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
    console.log(todoId)
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
