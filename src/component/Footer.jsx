import React from "react";
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/logo_big.png'
const Footer = () => {
  return (
       <>
       <div data-aos='zoom-in' className="flex justify-center flex-wrap mt-20 rounded-sm bg-slate-100 gap-20 p-3">

        <div className="w-[200px]">
        <Link to='/'>
        <p className="font-bold text-black text-xl hover:text-orange-400 duration-300 hover:translate-x-1">Shopsy</p>
        <img src={footerlogo} alt=""
        className=""
        />
        </Link>
        </div>

      <div>
        <h2 className="text-2xl p-1 cursor-pointer hover:text-blue-950 hover:translate-x-1 duration-300">Use Full Links</h2>
        <Link to='/HomePage' className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">Home</Link>
        <Link to='OurProducts' className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">Products</Link>
        <Link className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">About</Link>
      </div>

      <div>
        <h2 className="text-2xl p-1 cursor-pointer hover:text-blue-950 hover:translate-x-1 duration-300">Help & Support</h2>
        <Link to='/Contact' className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">Contact Us</Link>
        <Link to='/Contact' className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">Mail Us</Link>
        <Link className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">Login</Link>
      </div>

      <div>
        <h2 className="text-2xl p-1 cursor-pointer hover:text-blue-950 hover:translate-x-1 duration-300">Need any Help</h2>
        <Link to='/Contact' className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">hr@Ecomweb.com</Link>
        <Link className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">+91 7397825886</Link>
        <Link className="flex flex-col text-[18px] p-1 text-black/80 font-bold hover:text-orange-400 hover:translate-x-1 duration-300">+91 8830772432</Link>
      </div>

       </div>
       </>
  );
};

export default Footer;
