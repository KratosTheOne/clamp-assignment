import React from 'react'
import eth from "../Images/Ethereum.png"
import Image from 'next/image'
import down from "../Images/Expand Arrow.png"

const Header = () => {
  return (
    <div className="border-b-2">
        <div className="flex justify-between text-center px-2 py-2 text-medium font-medium sticky top-0 z-20 max-w-7xl mx-auto"> 
            <div className="py-3">
                <ul className="flex justify-between items-center space-x-3">
                    <li className="pr-2 cursor-pointer">Features</li>
                    <li className="pl-1 pr-2 cursor-pointer">FAQs</li>
                    <li className="pl-1 cursor-pointer">Indexes</li>
                </ul>
            </div>
            <div className="py-3">
                <div>
                    <h4 className="cursor-pointer">clamp</h4>
                </div>
            </div>
            <div className="py-1 flex items-center space-x-3">
                <div className="flex items-center space-x-1 shadow-md px-2 py-1 font-bold">
                    <Image src={eth} alt="eth-btn" className="h-4 w-4 object-cover bg-gray-200 rounded-full" />
                    <button className="text-xs">Georli</button>
                    <Image src={down} alt="eth-btn" className="h-5 w-5 object-cover cursor-pointer" />
                </div>
                <div className="flex items-center space-x-1 shadow-md px-2 py-1 font-bold">
                    <div className="flex space-x-1 bg-gray-100 items-center">
                        <button className="ml-1">0x5c...d329</button>
                        <Image src={down} alt="eth-btn" className="h-5 w-5 object-cover cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

/*<button className="shadow-md px-2 py-1 font-bold">0x5c...d329</button>*/