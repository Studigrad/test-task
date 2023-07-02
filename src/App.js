import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import TodoApp from "./components/todoApp/TodoApp";
import TodoForm from "./components/todoForm/TodoForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <TodoApp />
      ),
    },
    {
      path: "/create",
      element: (
          <TodoForm />
      ),
    }
  ])

  return ( 
    <div>
  <RouterProvider router={router} />
    </div>

  )
}

export default App;