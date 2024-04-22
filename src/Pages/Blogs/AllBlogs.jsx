import { useQuery } from "@tanstack/react-query";
import { baseURL } from "../../config/config";

const AllBlogs = () => {

    const { isLoading,  data, } = useQuery({
        queryKey: ['allBlogs'],
        queryFn: async () => {
            try {
                const response = await fetch(`${baseURL}/blog-route/getAllBlogs`);
                const data = await response.json();
                return data;
            } catch (error) {
                throw new Error('Error fetching data');
            }
        },
    });

    if(isLoading){
        return "loading..."
    }
   
    return (
        <div>
           <div className="p-12">
            {
                data?.result.map((blog,index)=> <div className="grid opacity-90 md:grid-cols-2 grid-cols-1 gap-12 text-justify lg:grid-cols-2 items-center" key={index}>
                  <div className="mb-6">
                  <p className="text-3xl mb-6 mt-6 text-[#DF5EA2] ">{blog.title}</p> 
                   <p>{blog.description}</p>
                  </div>
                    <div>
                    <img src={blog.photo} alt="" />
                    </div>
                    
                     </div> )
            }
           </div>
        </div>
    );
};

export default AllBlogs;