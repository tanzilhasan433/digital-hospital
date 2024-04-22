import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Main from './Component/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Registar/Register';
import AuthProvider from './Provider/AuthProvider';
import DashBoard from './Component/DashBoard/DashBoard';
import AddFeatures from './Component/DashBoard/AdminRoute/AddFeatures';
import AddDoctors from './Component/DashBoard/AdminRoute/AddDoctors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import from '@tanstack/react-query'
import ManageUsers from './Component/DashBoard/AdminRoute/ManageUser/ManageUsers';
import AddBlog from './Pages/Home/Blogs/AddBlog';
import Gallery from './Pages/Gallery/Gallery';
import FrequentlyAsked from './Pages/General-Discussion/FrequentlyAsked';
import IUI from './Pages/Treatement/IUI/IUI';
import AllDoctors from './Pages/Doctot/AllDoctior/AllDoctors';
import Appointment from './Component/Appointment/Appointment';
import AllBlogs from './Pages/Blogs/AllBlogs';
import IVF from './Pages/Treatement/IVF/IVF';
import ICSI from './Pages/Treatement/ICSI/ICSI';
import FemaleInfertility from './Pages/Treatement/Infertility/FemaleInfertility';
import MaleINfertility from './Pages/Treatement/Infertility/MaleINfertility';
import AllDoctorsForUser from './Component/DashBoard/UserRoute/AllDoctorsForUser';
import MyAppointment from './Component/DashBoard/UserRoute/MyAppointment';
import AppointmentSerial from './Component/DashBoard/AdminRoute/AppointmentSerial';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path : '/gallery',
        element : <Gallery></Gallery>
      },
      {
        path : '/logout',
        element : <Login></Login>
      },
      {
        path : '/faq',
        element : <FrequentlyAsked></FrequentlyAsked>
      },
      {
        path : '/IUI',
        element : <IUI></IUI>
      },
      {
        path : '/allDoctors',
        element : <AllDoctors></AllDoctors>
      },
      {
        path : '/appointment/:id',
        element : <Appointment></Appointment>
      },
      {
        path : '/allBlogs',
        element : <AllBlogs></AllBlogs>
      },
      {
        path : '/IVF',
        element : <IVF></IVF>
      },
      {
        path : '/ICSI',
        element : <ICSI></ICSI>
      },
      {
        path : '/femaleInfertility',
        element : <FemaleInfertility></FemaleInfertility>
      },
      {
        path : '/maleInFertility',
        element : <MaleINfertility></MaleINfertility>
      }
    ],
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      // this is for admin role 
      {
        path: 'addFeatures',
        element: <AddFeatures></AddFeatures>,
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: 'addDoctor',
        element: <AddDoctors></AddDoctors>,
      },
      {
        path : 'addBlog',
        element : <AddBlog></AddBlog>
      },
      {
        path : 'appointmentSerial',
        element : <AppointmentSerial></AppointmentSerial>
      },




      // this is for user role

      {
        path : 'callDoctor',
        element : <AllDoctorsForUser></AllDoctorsForUser>
      },
      {
        path : 'myAppointment',
        element : <MyAppointment></MyAppointment>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
  
  </React.StrictMode>
);
