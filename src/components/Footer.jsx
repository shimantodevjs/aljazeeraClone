import { useState, useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FaFacebook , FaYoutube , FaInstagram , FaRss } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerLogo from '../assets/footerLogo.png'

const Footer = () => {
  const [dropDowns, setDropDowns] = useState({
    about: false,
    connect: false,
    ourChannels: false,
    ourNetwork: false,
  });

  const handleDropDown = (section) => {
    if (window.innerWidth < 1024) { // lg breakpoint is 1024px
      setDropDowns((prev) => ({
        ...prev,
        [section]: !prev[section],
      }));
    }
  };

  useEffect(() => {
    // Initially set dropdown state based on screen size
    if (window.innerWidth >= 1024) {
      setDropDowns({
        about: true,
        connect: true,
        ourChannels: true,
        ourNetwork: true,
      });
    } else {
      setDropDowns({
        about: false,
        connect: false,
        ourChannels: false,
        ourNetwork: false,
      });
    }

    // Add a resize event listener
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDropDowns({
          about: true,
          connect: true,
          ourChannels: true,
          ourNetwork: true,
        });
      } else {
        setDropDowns({
          about: false,
          connect: false,
          ourChannels: false,
          ourNetwork: false,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
      <div className='grid grid-cols-1 lg:grid-cols-5 items-start gap-2 lg:gap-15 pt-20 pl-5 pb-60 lg:w-[80%] mx-auto'>
        <div className='flex flex-col justify-center items-start mb-5'>
          <div
            onClick={() => handleDropDown('about')}
            className='flex items-center justify-center gap-1 cursor-pointer lg:cursor-text font-semibold text-xl mb-5'
          >
            About <span className='mt-1 lg:hidden'><IoIosArrowDown /></span>
          </div>
          {dropDowns.about && (
            <div className="mt-4 flex flex-col justify-center items-start gap-3 w-40 text-gray-800 lg:mt-0 text-sm">
              <a href='#' className="hover:underline">About Us</a>
              <a href='#' className="hover:underline">Code of Ethics</a>
              <a href='#' className="hover:underline">Terms and Conditions</a>
              <a href='#' className="hover:underline">EU/EEA Regulatory Notice</a>
              <a href='#' className="hover:underline">Privacy Policy</a>
              <a href='#' className="hover:underline">Cookie Policy</a>
              <a href='#' className="hover:underline">Cookie Preferences</a>
              <a href='#' className="hover:underline">Sitemap</a>
              <a href='#' className="hover:underline">Work for us</a>
              <a href='#' className="hover:underline">HR Quality</a>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-start mb-5'>
          <div
            onClick={() => handleDropDown('connect')}
            className='flex items-center justify-center gap-1 cursor-pointer lg:cursor-text font-semibold text-xl mb-5'
          >
            Connect <span className='mt-1 lg:hidden'><IoIosArrowDown /></span>
          </div>
          {dropDowns.connect && (
            <div className="mt-4 flex flex-col justify-center items-start gap-3 w-40 text-gray-800 lg:mt-0 text-sm">
              <a href='#' className="hover:underline">Contact Us</a>
              <a href='#' className="hover:underline">User Accounts Help</a>
              <a href='#' className="hover:underline">Advertise with us</a>
              <a href='#' className="hover:underline">Apps</a>
              <a href='#' className="hover:underline">Newsletters</a>
              <a href='#' className="hover:underline">Channel Finder</a>
              <a href='#' className="hover:underline">TV Schedule</a>
              <a href='#' className="hover:underline">Podcasts</a>
              <a href='#' className="hover:underline">Submit a Tip</a>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-start mb-5'>
          <div
            onClick={() => handleDropDown('ourChannels')}
            className='flex items-center justify-center gap-1 cursor-pointer lg:cursor-text font-semibold text-xl mb-5'
          >
            Our Channels <span className='mt-1 lg:hidden'><IoIosArrowDown /></span>
          </div>
          {dropDowns.ourChannels && (
            <div className="mt-4 flex flex-col justify-center items-start gap-3 w-40 text-gray-800 lg:mt-0 text-sm">
              <a href='#' className="hover:underline">Al Jazeera Arabic</a>
              <a href='#' className="hover:underline">Al Jazeera English</a>
              <a href='#' className="hover:underline">Al Jazeera Investigative Unit</a>
              <a href='#' className="hover:underline">Al Jazeera Mubasher</a>
              <a href='#' className="hover:underline">Al Jazeera Documentary</a>
              <a href='#' className="hover:underline">Al Jazeera Balkans</a>
              <a href='#' className="hover:underline">AJ+</a>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-start mb-5'>
          <div
            onClick={() => handleDropDown('ourNetwork')}
            className='flex items-center justify-center gap-1 cursor-pointer lg:cursor-text font-semibold text-xl mb-5'
          >
            Our Network <span className='mt-1 lg:hidden'><IoIosArrowDown /></span>
          </div>
          {dropDowns.ourNetwork && (
            <div className="mt-4 flex flex-col justify-center items-start gap-3 w-40 text-gray-800 lg:mt-0 text-sm">
              <a href='#' className="hover:underline">Al Jazeera Centre for Studies</a>
              <a href='#' className="hover:underline">Al Jazeera Media Institute</a>
              <a href='#' className="hover:underline">Learn Arabic</a>
              <a href='#' className="hover:underline">Al Jazeera Centre for Public Liberties & Human Rights</a>
              <a href='#' className="hover:underline">Al Jazeera Forum</a>
              <a href='#' className="hover:underline">Al Jazeera Hotel Partners</a>
            </div>
          )}
        </div>
        <div className='flex flex-col justify-center items-center gap-5 mt-5'  >
          <h1 className='font-bold text-gray-800'>Follow Al Jazeera English:</h1>
          <div className='flex justify-center items-center gap-3'>
              <span className='text-[#1877F2] text-4xl'><FaFacebook /></span>
              <span className='text-4xl'><FaXTwitter /></span>
              <span className='text-[#FF0000] text-4xl'><FaYoutube /></span>
              <span className='text-pink-400 text-4xl'><FaInstagram /></span>
              <span className='text-aljazeera text-4xl'><FaRss /></span>
          </div>
          <img src={footerLogo} alt="" className='mt-5 w-44 h-28'  />
          <p className='text-sm'>© 2024 Al Jazeera Media Network</p>
        </div>
      </div>
  );
};

export default Footer;
