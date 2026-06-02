// import React from 'react';
import MainLayout from '../Layout/MainLayout';
import { createBrowserRouter } from 'react-router';
import HomePage from '../components/pages/HomePage/HomePage';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import TimeLine from '../components/TimeLine/TimeLine';

export const router=createBrowserRouter([
  {
    path:'/',
    element:<MainLayout></MainLayout>,
    children:[
        {
      index:true,
      element:<HomePage/>,
    },
    {
      path:'/timeLine',
      element:<TimeLine></TimeLine>
    }
    ],errorElement:<ErrorPage/>
  }
])