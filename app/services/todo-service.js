import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Skyler/todos",
  timeout: 8000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get("")
      .then(thing => {
        let allTodos = thing.data.data.map(t => new Todo(t));
        store.commit("todo", allTodos)
      })
      .catch(error => {
        console.error(error);
      });
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    //debugger;
    //let myTodo = new Todo(todo)
    todoApi.post("", todo)
      .then(thing => {
        let myTodo = new Todo(thing.data.data);
        console.log(myTodo, 2)
        //console.log(myTodo)
        let todo = [...store.State.todo, myTodo];
        store.commit("todo", todo)
        console.log(store.State.todo)
      })
      //thing.data.push(myTodo)
      //let myTodo = new Todo(thing.data)
      //let todo = [...store.State.todo, myTodo]; WHADDAFRICK
      //console.log(thing)
      //store.commit("todo", todo);
      // })
      .catch(error => {
        console.error(error);
      });
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  toggleTodoStatusAsync(todoId) {
    todoApi.put(todoId)
      .then(res => {
        let todo = store.State.todo.find(t => t._id == todoId);
        todo.completed = true
        console.log(todo)
        store.commit("todo", store.State.todo)
      })
      .catch(error => {
        console.error(error);
      });

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //  todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    console.log(todoId)
    todoApi.delete(todoId)
      .then(() => {
        let filteredTodos = store.State.todo.filter(t => t._id != todoId);
        store.commit("todo", filteredTodos)
      })
      .catch(error => {
        console.error(error);
      });
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
