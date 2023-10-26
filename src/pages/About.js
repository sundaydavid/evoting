import React from 'react'
import {useNav} from '../hooks/useNav'
import { Link } from 'react-router-dom';

const About = () => {
    const aboutRef = useNav("About");
//   const navigator = useNavigate();

  return (
    <section ref={aboutRef} id="aboutSection">
      <div className="m-6 px-7 w-full h-full flex justify-between">
        {/*Left hand*/}
        <div className=" w-2/4 flex justify-between">
          <div className=" h-full relative">
            <img
              src="https://th.bing.com/th/id/R.530037c9cecf86a1a5130ed53321ddff?rik=s1t8JrzvKzzUJA&pid=ImgRaw&r=0"
              alt="image1"
              className="h-full w-3/4 object-cover rounded-2xl"
            />
            <div className="absolute grid inset-80 h-2/5 w-4/6 place-items-center px-4 bg-white/100 shadow-2xl rounded-2xl">
              <div class="experience">
                <h4 className=" text-7xl text-green-800 font-bold text-center">
                  10+
                </h4>
                <p className=" text-xl font-normal">
                  We have more than years of experience. You will learn more and
                  transformative things as you continue
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*Right hand*/}
        <div className=" w-2/5">
        
            <h5 className="side-line-left text-green-800 font-black mb-4">
              About e-Vote Organization
            </h5>
            <h2 className=" text-5xl font-black text-green-900 mb-8">
              TRUSTED ONLINE VOTING PLATFORM
            </h2>
            <ul className="order-list primary-color mb-10">
              <li>Reliable Voting.</li>
              <li> 24/7 accurate.</li>
              <li>Secured and convienient service.</li>
              <li>Timely voting</li>
            </ul>
            <p className="mb-10">
              The principles of our organization have remained steadfast through the
              years–fast and reliable accurate of even the most difficult
              election while following all safety and government guidelines.
            </p>
            <p className="mb-10">
              When you trust us to control your election, you’ll know that the safe
              efficiency of your election are in the hands of skilled, qualified
              professionals and if you are a staff, you can be rest
              assured you have a partner that will enable you to deliver even
              against odds.
            </p>
            <div className="flex items-center mt-10">
              <Link to="#" className="animate-btn mr-12">
                Read More
              </Link>
              <div className="signature">
                {/* <img src={signature} alt="" width="125px"/> */}
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About