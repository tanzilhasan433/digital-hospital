import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../config/config";

const fetchAdminStatus = async (email) => {
  
  const response = await fetch(`${baseURL}/user-route/user/admin/${email}`);
  if (!response.ok) {
    throw new Error("Failed to fetch admin status");
  }
  const result = await response.json();
  return result?.admin || false;
};



const useAdmin = () => {
  const { currentUser } = useContext(AuthContext);


  const {
    data: isAdmin,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["admin", currentUser?.email],
    queryFn: () => fetchAdminStatus(currentUser?.email),
    enabled: !!currentUser?.email,
  });

 

  return [isAdmin, isLoading, isError,refetch];
};

export default useAdmin;
