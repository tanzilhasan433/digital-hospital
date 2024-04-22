import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { baseURL } from "../../../config/config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const GlobalAppointment = () => {
    const navigate = useNavigate()

    const handleAppointment = (event)=> {
        event.preventDefault()
        const form = event.target 
        const doctor_name = form.doctor_name.value 
        const patient_name = form.patient_name.value 
        const number  = form.number.value 
        const email = form.email.value 

        const appointment = {
            doctor_name,
            patient_name,
            number,
            email,
            status : 'pending'
            
        }

        console.log(appointment);

        fetch(`${baseURL}/appointment-route/createAppointment`,{
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'

            },
            body : JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Appointment is Submit,check your dashboard",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }

            navigate('/dashboard/myAppointment')
        })

    }



    return (
        <div>
             <div className=" p-12 bg-[#6F2A6D] mb-6  ">
            
            <div className="flex gap-10 flex-col lg:flex-row md:flex-col ">
            <form onSubmit={handleAppointment}  >
            <p className="text-white text-3xl">অ্যাপয়েন্টমেন্ট বুক জন্য</p>
                 <p className="mt-4 text-white mb-4 text-justify">আমাদের বিশেষজ্ঞদের সাথে কথা বলুন এবং অভিভাবকত্বের দিকে আপনার প্রথম পদক্ষেপ নিন। <br /> একটি অ্যাপয়েন্টমেন্ট বুক করতে বা একটি তদন্ত করতে, দয়া করে আপনার বিশদ বিবরণ দিন <br /> এবং আমরা আপনার কাছে ফিরে আসব।</p>
              <div className="flex lg:flex-row md:flex-row flex-col gap-4 mb-4">
               <input  className="text-sm py-3 px-24 " name="doctor_name" type="text" placeholder="Doctor Name" />
               <input className="text-sm py-3 px-24 " name="patient_name" type="text" placeholder="Patient Name" />
               </div>
               
               <div className="flex lg:flex-row md:flex-row flex-col  gap-4">
               <input className="text-sm py-3 px-24 " name="number" type="number" placeholder="Number" />
               <input className="text-sm py-3 px-24 " name="email" type="email" placeholder="Email" />
               </div>
                 <input className="bg-[#DF5EA2] py-2 px-8 mt-4 text-white cursor-pointer " type="submit" value="জমা দিন" />
              </form>
     
             <div className="bg-white rounded-md">
                 <div className="py-8 px-6">
                     <p className="text-2xl font-semibold ">আপনি আমাদের কাছেও পৌঁছাতে পারেন</p>
                     <hr className="mt-6" />
                     <div className="flex mt-4 items-center gap-4 ">
                     <FaTelegramPlane className="text-4xl border p-1 rounded-full text-[#DF5EA2]  " />
                     <p className="text-xl font-semibold">ই-মেইল: <br /> bdfertility@gmail.com </p>
                     </div>
                     <hr className="mt-6" />
                     <div className="flex mt-4 items-center gap-4 ">
                     <FaPhoneAlt className="text-4xl border p-1 rounded-full text-[#DF5EA2]  " />
                     <p className="text-xl font-semibold">ফোন: <br /> +8801316037657 </p>
                     </div>
                 </div>
             </div>
     
            </div>
     
             </div>
        </div>
    );
};

export default GlobalAppointment;