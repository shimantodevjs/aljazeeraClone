import React from 'react'
import { FaRegStar , FaRegBookmark } from "react-icons/fa";
import { BsPersonCheck , BsPersonDown } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const WhatsNew = () => {
  return (
    <div className='bg-gray-100 px-16 pt-12 max-lg:hidden pb-40'>
        <div className='lg:w-[80%] flex flex-col justify-center items-start gap-6'>
          
          <div>
          <h1 className='text-3xl mb-2'>Connect and engage with Al Jazeera</h1>
           <p className='text-l'>This is not a paywall. It’s free to join.</p>
          </div>

          <div className='flex flex-col justify-center items-start gap-6'>

            <div className='flex items-start gap-5'>
              <span className='text-aljazeera text-3xl'>
                <FaRegStar/>
              </span>

              <div>
                <h1 className='text-xl font-bold mb-1'>One Al Jazeera account</h1>
                <p className='text-sm'>Unlock access to all Al Jazeera services, from our regional news websites and mobile app to documentaries and the Al Jazeera OTT platform, using just one account.</p>
              </div>
            </div>

            <div className='flex items-start gap-5'>
              <span className='text-aljazeera text-3xl'>
                <FaRegBookmark/>
              </span>

              <div>
                <h1 className='text-xl font-bold mb-1'>Reading list</h1>
                <p className='text-sm'>Curate a personal library of articles and reports that you can return to.</p>
              </div>
            </div>

            <div className='flex items-start gap-5'>
              <span className='text-aljazeera text-3xl'>
                <BsPersonCheck/>
              </span>

              <div>
                <div className='flex gap-2 items-center mb-2'>
                <h1 className='text-xl font-bold mb-1'>Follow Authors and Topics</h1>
                <span className='bg-gray-200 p-1 rounded-2xl text-xs'>Coming soon</span>
                </div>
                <p className='text-sm'>Check out the latest from your preferred authors and on topics that matter to you.</p>
              </div>
            </div>

            <div className='flex items-start gap-5'>
              <span className='text-aljazeera text-3xl'>
                <BsPersonDown/>
              </span>

              <div>
                <div className='flex gap-2 items-center mb-2'>
                <h1 className='text-xl font-bold mb-1'>Personalized “For You” Section</h1>
                <span className='bg-gray-200 p-1 rounded-2xl text-xs'>Coming soon</span>
                </div>
                <p className='text-sm'>Immerse yourself in a carefully customised selection of articles and videos aligned with your preferences.</p>
              </div>
            </div>

            <div className='flex items-start gap-5'>
              <span className='text-aljazeera text-3xl'>
                <IoMdNotificationsOutline/>
              </span>

              <div>
                <div className='flex gap-2 items-center mb-2'>
                <h1 className='text-xl font-bold'>Notifications and Alerts</h1>
                <span className='bg-gray-200 p-1 rounded-2xl text-xs'>Coming soon</span>
                </div>
                <p>Remain ahead of the curve with timely notifications that update you on breaking developments and crucial news stories that shape our world.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
  )
}

export default WhatsNew