import React from 'react'
import CryptoIndexes from './CryptoIndexes'

const CryptoContainer = () => {
  return (
    <div>
        <div className="max-w-[1440px] px-2 mx-auto">
            <div >
                <p className="pt-8 text-xl font-bold">Buy Clamp Indexes</p>
                <p className="pt-4 font-semibold text-gray-700">Buy any crypto index, anytime, anywhere. Easily keep track of all the indexes in your portfolio.</p>
            </div>
            <div className="pt-10 text-lg font-semibold flex flex-wrap items-center justify-between">
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
                <CryptoIndexes />
            </div>
        </div>
    </div>
  )
}

export default CryptoContainer