import TodoService from "../services/todo-service.js";
import store from "../store.js";
//import todoService from "../services/todo-service.js";

//TODO Create the render function
function _drawTodos() {
  console.log(store.State.todo)
  let things = store.State.todo;
  let template = "";
  things.forEach(thing => {
    if (thing.completed) {
      template += thing.todoTemplateT
    } else {
      template += thing.todoTemplateF;
    }
  })
  document.getElementById("allThings").innerHTML = template;
}

export default class TodoController {
  constructor() {
    //debugger;
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
      //message: data[0].value,
      completed: data[0].checked,
      description: data[0].value,
      _id: data._id
      // id: data.id.value || "",
      // checked: false

      // TODO build the todo object from the data that comes into this method
    };
    console.log(todo, 1)
    TodoService.addTodoAsync(todo);
    event.target.reset();
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    //event.preventDefault();
    TodoService.toggleTodoStatusAsync(todoId);
    console.log(todoId)
  }

  uncheck(todoId) {
    TodoService.uncheck(todoId);
  }
  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
