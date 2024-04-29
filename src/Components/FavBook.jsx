import React from "react";
import favbookimage from "../assets/favbookimage.jpeg";
import { Link } from "react-router-dom";

export default function FavBook() {
  return (
    <div className="px-4 lg:px-24 mx-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2 space-y-6">
        <img src={favbookimage} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold my-5 md:3/4 leading-snug">
          Find Your Favorite{" "}
          <span className="text-blue-700">Book Here...!!!</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam aliquam,
          enim minima tenetur natus soluta dolor provident labore dolorum
          impedit, tempore fugit consequuntur. Neque doloremque libero provident
          cupiditate veniam totam.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listening</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">600+</h3>
            <p className="text-base">Registered Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">Pdf's Download</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">Explore More</button>
        </Link>
      </div>
    </div>
  );
}
