import { Link, Outlet } from "react-router-dom";
import { FaBlog, FaHandHoldingMedical, FaHome, FaPlusSquare, FaUserMd, FaUserPlus } from "react-icons/fa";
import useAdmin from "../Hook/useAdmin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { baseURL } from "../../config/config";


const DashBoard = () => {
  const [isAdmin]= useAdmin()
  const {currentUser} = useContext(AuthContext)
  const [user,setUser] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      if (currentUser) {
        try {
          const response = await fetch(`${baseURL}/user-route/getSingleUser/${currentUser.email}`);
          const data = await response.json();
          setUser(data.result);
        } catch (error) {
          console.error('Error fetching user data', error);
        }
      }
    };
  
    fetchData();
  }, [currentUser]);




    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">
    {/* Page content here */}
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side bg-[#6F2A6D]">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
      <img className="w-24   mt-12 mx-auto flex h-24 rounded-full " src={user?.photo} alt="" />
      {
        isAdmin ? <ul className="menu pt-12 text-center w-80 min-h-full  text-white text-xl">
        {/* Sidebar content here */}
        <li><Link to='/dashboard/addFeatures'><FaPlusSquare></FaPlusSquare> ফিচার এডড করুন</Link></li>
        <li><Link to='/dashboard/addDoctor' className="text-white"><FaUserMd></FaUserMd> ডাক্তার এডড করুন</Link></li>
        <li><Link to='/dashboard/manageUsers' className="text-white"> <FaUserPlus></FaUserPlus> ইউজার ম্যানেজ</Link></li>
        <li><Link to='/dashboard/appointmentSerial' className="text-white"> <FaHandHoldingMedical></FaHandHoldingMedical> রোগীর সিরিয়াল </Link></li>
        <li><Link to='/dashboard/addBlog' className="text-white"> <FaBlog></FaBlog>  ব্লগ  এডড করুন </Link></li>
      
        <li>  <Link to='/'><FaHome className="text-white"></FaHome> হোম</Link></li>
      </ul> 
      
      
       :
       <ul className="menu pt-12 text-center w-80 min-h-full  text-white text-xl">   
        <li><Link to='/dashboard/callDoctor'><FaPlusSquare></FaPlusSquare> Call Doctors</Link></li>
        <li><Link to='/dashboard/myAppointment' className="text-white"><FaUserMd></FaUserMd>My Appointment</Link></li>
        {/* <li><Link to='/dashboard/manageUsers' className="text-white"> <FaUserPlus></FaUserPlus> Payment</Link></li>
        <li><Link to='/dashboard/addBlog' className="text-white"> <FaBlog></FaBlog>  Select Doctor  </Link></li>
       */}
        <li>  <Link to='/'><FaHome className="text-white"></FaHome> Home</Link></li>
      </ul> 
      }


   
  
  </div>
</div>

    );
};

export default DashBoard;