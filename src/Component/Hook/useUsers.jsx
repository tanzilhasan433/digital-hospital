import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../config/config";

const useUsers = () => {
    const {  data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/user-route/getAllUser`);
            return res.json();
        }
    })

    return [users, refetch];
};

export default useUsers;