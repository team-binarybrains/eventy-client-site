import React from 'react'
import './OurServices.css'

function OurServices() {
    return (
        <div className='grid justify-center my-10'>

            <div className='mt-12 mb-8'>
                <h1 className='uppercase title_line text-center text-4xl'>our services</h1>
            </div>

            <div className="grid grid-cols-3 gap-5">

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/fSkLx14/marrige.webp" className="max-w-xs" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>Marrige</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/vqZ2qKw/fashion.webp" className="max-w-xs h-[213px]" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>fashion</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/t2pj2VC/iftar.jpg" className="max-w-xs h-[215px]" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>iftar</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/XVhFNcB/crits.jpg" className="max-w-xs" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>christmas</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/2v1Sg87/Birthday.jpg" className="max-w-xs h-[215px] w-[400px]" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>birthday</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4 cursor-pointer">
                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                        <img src="https://i.ibb.co/M7L8JXM/eid.jpg" className="max-w-xs h-[215px] w-[400px]" alt="Louvre" />

                        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition-all duration-500 ease-in-out bg-green-700 bg-opacity-40">

                            <div className='text-white grid items-end justify-center h-full'>
                                <h1 className='text-5xl uppercase text-center text-white'>Eid Event</h1>

                                <button className='btn-selection type-1'>Full Details</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurServices
