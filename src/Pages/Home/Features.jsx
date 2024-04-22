import { useEffect, useState } from "react";
import FeaturesCard from "./Cards.jsx/FeaturesCard";
import { baseURL } from "../../config/config";

const Features = () => {
    const [features,setFeatures] = useState([])

    useEffect(()=>{

        fetch(`${baseURL}/bd-fertility/getAllFeatures`)
        .then(res => res.json())
        .then(data => {
          
            setFeatures(data.result)
        })

    },[])
    return (
        <div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {
                features.map((feature,index)=> <div  key={index}>

                <FeaturesCard feature={feature} ></FeaturesCard>

                </div>)
            }
        </div>


        </div>
    );
};

export default Features;