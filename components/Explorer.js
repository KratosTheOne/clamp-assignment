import React from 'react'

const Explorer = () => {
  return (
    <div className="border-b-2">
        <div className="max-w-7xl mx-auto px-2">
            <ul className="flex items-center space-x-20  font-semibold">
                <li className="border-b-[3px] border-b-black py-3 rounded-sm cursor-pointer">Explore</li>
                <li className="cursor-pointer">Dashboard</li>
                <li className="cursor-pointer">Watchlist</li>
                <li className="cursor-pointer">History</li>
            </ul>
        </div>
    </div>
  )
}

export default Explorer