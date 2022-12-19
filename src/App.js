import { useState } from 'react';
import { Home, Contact, About, Product,Login,Signup,AddProduct } from './Components'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA3tFlBYNeMTKXHsZdODWkfmTF4u687IQ8",
  authDomain: "email-pass-auth-d15c7.firebaseapp.com",
  projectId: "email-pass-auth-d15c7",
  storageBucket: "email-pass-auth-d15c7.appspot.com",
  messagingSenderId: "220090554291",
  appId: "1:220090554291:web:18259befba6a54ea7f5dc6"
};

firebase.initializeApp(firebaseConfig); 

const routes = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <h2>Wrong url</h2> },
  { path: '/product', element: <Product />, errorElement: <h2>Wrong url</h2> },
  { path: '/contact', element: <Contact />, errorElement: <h2>Wrong url</h2> },
  { path: '/about', element: <About />, errorElement: <h2>Wrong url</h2> },
  { path: '/login', element: <Login />, errorElement: <h2>Wrong url</h2> },
  { path: '/signup', element: <Signup />, errorElement: <h2>Wrong url</h2> },
  { path : '/addproduct', element: <AddProduct/>, errorElement: <h2>Wrong url</h2> }
  

])

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
