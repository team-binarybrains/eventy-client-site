import React from 'react'

function Gallery() {
    return (
        <div>
            <section className="overflow-hidden text-gray-700">
                <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg" src="https://i.ibb.co/k9Y7gPF/7.jpg" />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/rbYNcgz/8.jpg" />
                            </div>

                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/5j9cdzD/5.jpg" />
                            </div>

                        </div>

                        <div className="flex flex-wrap w-1/2">

                            <div className="w-full p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/ync0N3k/3.jpg" />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/HDKyXYR/4.jpg" />
                            </div>

                            <div className="w-1/2 p-1 md:p-2">
                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                    src="https://i.ibb.co/6tMqJ4v/1.jpg" />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery
