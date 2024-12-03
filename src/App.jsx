// import "./App.css";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="main bg-[#000430] min-h-screen py-8 flex justify-center w-full">
      <div className="w-[600px] px-10 py-2">
        <div className="w-full py-5 mb-10 flex flex-col items-center bg-transparent border border-[#828dff]  shadow-sm shadow-white/50 rounded-2xl transition duration-500 hover:scale-105 delay-150">
          <h1 className="text-3xl font-bold font-serif text-[#fff]">
            Todo App
          </h1>
          <AddTodo />
        </div>
        <div className="w-full">
          <hr className="h-px w-full border-0 mt-5 bg-[#828dff]" />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

//s-bg171c48 purple: 828dff teal: 24feee
