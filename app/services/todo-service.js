import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Skyler/todos",
  timeout: 8000
});

class TodoService {
  getTodos() {
    todoApi.get("")
      .then(thing => {
        let allTodos = thing.data.data.map(t => new Todo(t));
        store.commit("todo", allTodos)
      })
      .catch(error => {
        console.error(error);
      });
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
      .then(thing => {
        let myTodo = new Todo(thing.data.data);
        let todo = [...store.State.todo, myTodo];
        store.commit("todo", todo)
      })
      .catch(error => {
        console.error(error);
      });
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    // From a process standpoint: find > edit > send to sever (put) > commit to state
    let todo = store.State.todo.find(t => t._id == todoId);
    todo.completed = true
    todoApi.put(todoId, todo)
      .then(res => {
        store.commit("todo", store.State.todo)
      })
      .catch(error => {
        console.error(error);
      });
  }

  uncheck(todoId) {
    let todo = store.State.todo.find(t => t._id == todoId);
    todo.completed = false
    todoApi.put(todoId, todo)
      .then(res => {
        store.commit("todo", store.State.todo)
      })
      .catch(error => {
        console.error(error);
      });
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
      .then(() => {
        let filteredTodos = store.State.todo.filter(t => t._id != todoId);
        store.commit("todo", filteredTodos)
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const todoService = new TodoService();
export default todoService;
