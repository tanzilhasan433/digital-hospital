/* eslint-disable react/prop-types */
import {  Card } from "keep-react";
const DoctorsCard = ({ doctor }) => {
  const {
    name,
    title,
    
    location,
    doctorImg,
 
    position,
  } = doctor;

  const { facebook, youtube, linkedin } = doctor.socialLinks;
  return (
    <div>
      <Card
      
        className="text-white bg-[#6F2A6D]  "
      >
        <div className="">
        <img className=" w-full"  src={doctorImg} alt="" />
        </div>
       <div className="">
       <Card.Container className="absolute   flex  cursor-pointer items-center justify-center rounded-full bg-metal-200"></Card.Container>
        <Card.Container className="flex flex-col items-center justify-center">
          
          <Card.Container className=" text-center">
            <Card.Title className="text-body-5 text-metal-800 md:text-body-4 font-light">
              {title}
            </Card.Title>
            <Card.Title className="  text-metal-400 md:text-body-5 text-2xl font-bold mt-4">
              {name}
            </Card.Title>
            {/* <h2 className="p-3">{designation}</h2> */}
            <h2 className="pt-3 font-light">{position}</h2>
            <h2 className=" font-semibold ">{location}</h2>

            <div className="flex lg:flex-row flex-row justify-center py-6 gap-4">
              <img
                className="w-6 h-6 border rounded-full bg-white"
                src={facebook}
                alt=""
              />
              <img
                className="w-6 h-6 border rounded-full bg-white"
                src={linkedin}
                alt=""
              />
              <img
                className="w-6 h-6 border rounded-full bg-white"
                src={youtube}
                alt=""
              />
            </div>
          </Card.Container>
        </Card.Container>
       </div>
      </Card>
    </div>
  );
};

export default DoctorsCard;
