/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../../config/config";

const AllDoctors = () => {

    const [doctors,setDoctors] = useState([])
    useEffect(()=>{
        fetch(`${baseURL}/allDoctors-route/getAllDoctors2`)
        .then(res => res.json())
        .then(data => {
            setDoctors(data.result)
        })
    },[])


    return (
        <div className="">
          
            <img className="w-full " src="https://birlafertility.com/wp-content/uploads/2021/05/doctr-banner-desktop.jpg" alt="" />

        <div className="p-8 grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-6 ">
            {
                doctors.map((doctor,index)=> <div className="bg-slate-200 p-12" key={index}>
                    <img  className="rounded-full px-12 " src={doctor.image} alt="" />


                   <div className="flex gap-3 pt-6">
                   <img className="h-6 w-6" src="https://i.ibb.co/SNCTxnR/icons8-location-48-removebg-preview.png" alt="" />
                    <p>অবস্থান : {doctor.location} </p>
                   </div>

               <div className="flex gap-3 pt-2">
               <img className="h-6 w-6" src="https://i.ibb.co/cyt3Hyv/whatsapp-removebg-preview.png" alt="" />
                <p>যোগাযোগ  : {doctor.number} </p>
               </div>

               <Link to={`/appointment/${doctor._id}`}>  <button className=" border-[#DF5EA2] bg-[#6F2A6D] text-white hover:border-none mt-6 w-full py-2">  অ্যাপয়েন্টমেন্ট বুক করুন</button></Link>
              
                </div>)
            }
        </div>


        </div>
    );
};

export default AllDoctors;