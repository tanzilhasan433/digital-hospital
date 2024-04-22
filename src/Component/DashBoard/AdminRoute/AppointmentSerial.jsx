import {  useEffect, useState } from "react";
import { baseURL } from "../../../config/config";
import Swal from "sweetalert2";
import useAdmin from "../../Hook/useAdmin";

const AppointmentSerial = () => {
  const [appointments, setAppointments] = useState([]);
  const [refetch] = useAdmin()
  useEffect(() => {
    fetch(`${baseURL}/appointment-route/getAllAppointment`)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data?.result);
      });
  }, [setAppointments]);


  const handleAppointmentApproved = (id) => {
    fetch(`${baseURL}/appointment-route/status/${id}`,{
        method : 'PUT',
        headers : {
            'Content-type' : 'application/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data){
          
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Appointment is Approved',
                showConfirmButton: false,
                timer: 1500
              });
        }
        refetch()
    })

  }



  return (
    <div className="p-16">
        <h1 className="text-3xl text-center py-6 bg-slate-100 mb-6 ">Approve Patent Serial</h1>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Doctor Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Number
                    </th>
                   
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                     Status
                    </th>
                   
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments?.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            
                            <p className="" >{person.doctor_name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.patient_name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {person.email}
                        </div>
                      </td>

                      <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                      <span className=""> {person.number}</span>
                      </td>

                      {
                        person.status === 'pending' ? <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={()=> handleAppointmentApproved(person._id)}
                          className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-stone-400 rounded-lg group"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                          <span className="relative">{person.status}</span>
                        </button>
                      </td> : <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={()=> handleAppointmentApproved(person._id)}
                          className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-500 rounded-lg group"
                        >
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                          <span className="relative">{person.status}</span>
                        </button>
                      </td>
                      }

                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentSerial;
