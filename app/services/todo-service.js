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
    todoApi.get();
    //TODO Handle this response from the server
  }

  addTodoAsync(todo) {
    //debugger;
    //let myTodo = new Todo(todo)
    todoApi.post("", todo)
      .then(thing => {
        let myTodo = new Todo(thing.data.data);
        //console.log(myTodo)
        let todo = [...store.State.todo, myTodo];
        store.commit("todo", todo)

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
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
