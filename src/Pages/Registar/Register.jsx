// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseURL } from "../../config/config";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const navigate = useNavigate();
  const {setCurrentUserUser} = useContext(AuthContext)

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = 'user';

    // Upload image to ImgBB
    const imgbbAPIKey = '3175c3bd6870b807a81f5454a96c494d'; // Replace with your ImgBB API key
    const imgbbUploadURL = 'https://api.imgbb.com/1/upload';

    const formData = new FormData();
    formData.append('image', image);
    formData.append('key', imgbbAPIKey);

    try {
      const response = await fetch(imgbbUploadURL, {
        method: 'POST',
        body: formData,
      });

      const imgbbData = await response.json();
      const photo = imgbbData.data.url;

      // Create user with the uploaded image URL
      const user = {
        name,
        email,
        password,
        photo,
        role,
      };

      console.log(user);
      setCurrentUserUser(user)

      const createUserResponse = await fetch(`${baseURL}/user-route/createUser`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await createUserResponse.json();
      console.log(data);

      if (data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Great user is created",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      navigate('/login');
    } catch (error) {
      console.error('Error uploading image or creating user:', error);
    }
  };



    return (
        <div className="px-12 py-4">
            <section className="flex flex-col items-center ">
  <div
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-[#DF5EA2] md:text-2xl dark:text-white">Create an
        account
      </h1>
      <form onSubmit={handleRegisterSubmit} className="space-y-4 md:space-y-6">
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
          <input type="text" name="name"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson" required="" />
        </div>
        <div>
          <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
          <input type="email" name="email" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24" required="" />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input type="password" name="password"  placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
     
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
          <input onChange={handleImageChange} type="file" name="photo"  placeholder="photo" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
        </div>
     
     
     
        <button type="submit" className="w-full text-white bg-[#DF5EA2]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account? <Link to='/login'
            className="font-medium text-blue-600 hover:underline dark:text-blue-500" >Sign in here</Link>
        </p>
      </form>
    </div>
  </div>
</section>
        </div>
    );
};

export default Register;