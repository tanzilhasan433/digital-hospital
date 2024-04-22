import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../../config/config";

const fetchAllDoctors = async () => {
    const response = await fetch(`${baseURL}/allDoctors-route/getAllDoctors2`);
    if (!response.ok) {
      throw new Error('Failed to fetch all doctors');
    }
    const result = await response.json();
    return result?.result;
  };

const AllDoctorsForUser = () => {

    const {data} = useQuery({
        queryKey : ['allDoctors'],
        queryFn : fetchAllDoctors
    })

  


    return (
        <div className="p-16">
  
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
                    Name
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
                 Address
                  </th>
                

                 
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map(person => (
                  <tr key={person.email}>
                   
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.number}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.location}</div>
                    </td>
                    

              
              
              

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

export default AllDoctorsForUser;