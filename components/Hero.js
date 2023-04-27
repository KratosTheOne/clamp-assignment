import Image from 'next/image'
import React from 'react'
import user from "../Images/Male User.png"
import info from "../Images/Info.png"

const Hero = () => {
  return (
    <div className="border-b-2">
      <div className="flex max-w-[1440px] mx-auto px-2">
        <div className="border-r-2 w-[55%] pt-5 pb-6">
          <p className="text-xl font-bold">Home</p>
          <div className="mt-3 flex items-center space-x-3">
            <Image className="h-16 w-16 object-cover"src={user} alt="user" />
            <p className="text-xl font-bold">21040xC0...d398</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold pt-5 pl-12">Account Statistics</p>
          <div className="flex items-center space-x-1 pl-12 pt-2">
            <p className="text-gray-500 font-medium">Net Worth</p>
            <Image className="h-4 w-4 object-cover" src={info} alt="info" />
          </div>
          <p className="pl-12 text-3xl font-bold">$509.54</p>
        </div>
      </div>  
    </div>
  )
}

export default Hero