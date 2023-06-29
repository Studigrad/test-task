import React from "react";
import TodoApp from "./TodoApp";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import TodoForm from "./TodoForm";

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