import TodoService from "../services/todo-service.js";
import store from "../store.js";

function _drawTodos() {
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
    store.subscribe("todo", _drawTodos)
    TodoService.getTodos();
  }

  addTodo(event) {
    event.preventDefault();
    var data = event.target;
    var todo = {
      completed: data[0].checked,
      description: data[0].value,
      _id: data._id
    };
    TodoService.addTodoAsync(todo);
    event.target.reset();
  }
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
    console.log(todoId)
  }

  uncheck(todoId) {
    TodoService.uncheck(todoId);
  }
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
