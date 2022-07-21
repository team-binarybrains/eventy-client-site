import React from 'react'
import video_1 from '../video/video_1.mp4'
import video_3 from '../video/Video_3.mp4'
function LasMonth() {
    return (
        <div>
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-2 mx-auto lg:pt-9 lg:px-32">
                {/* <div className='my-4'>
                    <h1 className='text-4xl font-serif'>LasMonth</h1>
                </div> */}
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.ibb.co/k9Y7gPF/7.jpg" />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/rbYNcgz/8.jpg" />
                            </div>

                            <div className="w-full p-1 md:p-2">
                                {/* <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/5j9cdzD/5.jpg" /> */}

                                   <video autoPlay loop muted className="block object-cover  w-full h-full rounded-lg" src={video_1}>
                                   
                                   </video>
                                    {/* <video src="https://invideo.io/preview?id=NzM1NjI1NjI5OTU1MTk4NzM1MTkzNDE3MDI5Nzg5NDUwOTIzMjM5"></video> */}
                            </div>

                        </div>

                        <div className="flex flex-wrap w-1/2">

                            <div className="w-full p-1 md:p-2">
                                {/* <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/ync0N3k/3.jpg" /> */}
                                     <video autoPlay loop muted className="block object-cover  w-full h-full rounded-lg" src={video_3}>
                                   
                                   </video>
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/HDKyXYR/4.jpg" />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="LasMonth" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/6tMqJ4v/1.jpg" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default LasMonth