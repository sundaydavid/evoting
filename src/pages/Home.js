import React from "react";
import { useNav } from "../hooks/useNav";
import { Carousel, Typography } from "@material-tailwind/react";

const Home = () => {
  const homeRef = useNav("Home");
  //   const navigator = useNavigate();

  return (
    <section ref={homeRef} id="homeSection">
      {/* <div className=" mt-6"></div> */}
      <div className=" w-full h-full">
        <Carousel className="">
          <div className="h-full w-full">
            <img
              src="https://th.bing.com/th/id/OIP.xh_EOLV5F17lNRiDnNzTuAHaEK?pid=ImgDet&rs=1"
              alt="image1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="green"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Nacos SouthEast General Election 2023-2024
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Our service is impeaceable with 24/7 support in more than 100
                  languages.
                  <br></br>
                  Why can`t you rush now and cast your vote instead of wasting papers and time writing peoples name
                </Typography>
                
              </div>
            </div>
          </div>

          <div className="relative h-full w-full">
            <img
              src="https://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2018/02/20/931/524/694940094001_5736835016001_5736829953001-vs.jpg?ve=1&tl=1"
              alt="image2"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
              <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                <Typography
                  variant="h1"
                  color="green"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                 Try e-Vote Today for Excellent Vote Count
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  e-Vote is a new platform design to eliminate the stress of voting manually
                  <br></br>
                  e-vote offer perhaps excellent vote count without manipulations
                </Typography>
                
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://media.istockphoto.com/photos/conceptual-image-of-a-person-voting-during-elections-picture-id1277965612?k=20&m=1277965612&s=170667a&w=0&h=G0P0Hj-o5pHYdcQKw3SZT9TKQa6ExsvEmKw1fVbKAm0="
              alt="image3"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
              <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                <Typography
                  variant="h1"
                  color="green"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Enjoy! Hassle Voting System
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  e-Vote have been in existence for a long and have help solve rigging issues
                  <br></br>
                  Don`t forget to register in our platform for easy voting process
                </Typography>
                
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
