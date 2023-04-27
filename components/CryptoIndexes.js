import Image from 'next/image'
import React from 'react'
import star from "../Images/Star.png";
import bitcoin from "../Images/Bitcoin.png";
import eth from "../Images/Ethereum.png";
import usdc from "../Images/usd-coin-usdc-logo.svg"
import arrow from "../Images/Right.png" 

const CryptoIndexes = () => {
  return (
    <div className="w-96 h-[223px] border border-black stroke-2 mb-12">
        <div className="w-full flex">
            <div className="bg-[#F19241] w-1/3 h-[6px]"></div>
            <div className="bg-[#2F3030] w-1/3 h-[6px]"></div>
            <div className="bg-[#2775CA] w-1/3 h-[6px]"></div>
        </div>
        <div className="px-4 pt-4 flex items-center space-x-16">
            <p className="mr-[114px] font-bold">WBTC-ETH-USDC</p>
            <Image className="h-6 w-6 object-cover" src={star} alt="star"/>
        </div>
        <p className="px-4 font-bold">Index</p>
        <div className="flex items-center justify-between">
            <div className="pt-[16px]">
                <p className="px-4 text-sm">Underlying Tokens</p>
                <div className="flex items-center px-4 pt-[2px] space-x-1 space-y-2">
                    <Image className="h-6 w-6 object-cover mt-2" src={bitcoin} alt="bitcoin"/>
                    <Image className="h-5 w-5 object-cover bg-gray-200 rounded-full" src={eth} alt="ethereum"/>
                    <Image className="h-5 w-5 object-cover" src={usdc} alt="usdc"/>
                </div>
            </div>
            <div className="pt-6">
                <p className="pr-[20px] text-sm">Price Change(in 24 hrs)</p>
                <div className="flex items-center pl-14 px-4">
                    <Image className="h-10 w-10 object-cover" src={arrow} alt="arrow"/>
                    <p className="text-2xl font-bold ">12%</p>
                </div>
            </div>
        </div>
        <div className="w-full bg-black mt-5 flex items-center justify-center text-white py-[6px]">
            BUY
        </div>
    </div>
  )
}

export default CryptoIndexes