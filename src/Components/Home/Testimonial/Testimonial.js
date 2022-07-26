import React, { useEffect, useState } from "react";
import "./Testimonail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonail = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("projectReview.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    const ratingStar = <input type="radio" name="rating" class="mask mask-star-2 bg-yellow-500" checked disabled/>;

    const showStars = (star)=> {
        if(star>1){
            return <>
                {ratingStar}
                {showStars(star-1)}
            </>
        }
        else{
            return ratingStar;
        }
    }

    return (
        <div>
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold px-4 leading-10 pt-20 uppercase  text-center title_line">
                What our client says
            </h1>
            <div className="overflow-x-hidden overflow-y-hidden pt-8 pb-20">
                <Slider {...settings}>
                    {reviews?.slice(0, 6).map((review) => (
                        <div className="px-5">
                            <div className="group w-full bg-white relative flex flex-col items-center hover:bg-green-400 cursor-pointer shadow-md p-5 md:p-10 ">
                                <div className="text-gray-600 group-hover:text-white flex flex-col items-center">
                                    <svg
                                        width={26}
                                        height={27}
                                        viewBox="0 0 26 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect
                                                    width="24.5767"
                                                    height={27}
                                                    fill="white"
                                                    transform="translate(25.2578 27) rotate(-180)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="xl:w-80 text-base leading-normal text-center mt-4">
                                        {review.description.slice(0, 100)}
                                    </p>
                                    <div className="rating rating-sm">
                                        {
                                            showStars(review?.rating)
                                        }
                                    </div>
                                </div>
                                <div className="text-white group-hover:text-green-400 absolute bottom-0 -mb-6">
                                    <svg
                                        width={34}
                                        height={28}
                                        viewBox="0 0 34 28"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g filter="url(#filter0_dd)">
                                            <path
                                                d="M17 19L28.2583 3.25H5.74167L17 19Z"
                                                fill="currentColor"
                                            />
                                        </g>
                                        <defs>
                                            <filter
                                                id="filter0_dd"
                                                x="0.741699"
                                                y="0.25"
                                                width="32.5167"
                                                height="27.75"
                                                filterUnits="userSpaceOnUse"
                                                colorInterpolationFilters="sRGB"
                                            >
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                />
                                                <feMorphology
                                                    radius={1}
                                                    operator="erode"
                                                    in="SourceAlpha"
                                                    result="effect1_dropShadow"
                                                />
                                                <feOffset dy={4} />
                                                <feGaussianBlur stdDeviation={3} />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="BackgroundImageFix"
                                                    result="effect1_dropShadow"
                                                />
                                                <feColorMatrix
                                                    in="SourceAlpha"
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                />
                                                <feOffset dy={2} />
                                                <feGaussianBlur stdDeviation="2.5" />
                                                <feColorMatrix
                                                    type="matrix"
                                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in2="effect1_dropShadow"
                                                    result="effect2_dropShadow"
                                                />
                                                <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="effect2_dropShadow"
                                                    result="shape"
                                                />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-10">
                                <img src={review.image} alt="profile pictre" className="testimonial-image rounded-full" />
                                <p className="text-base font-semibold leading-4 my-2 text-gray-800">
                                    {review.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="text-center mb-12">
                <button className="btnc btn-gradient gradient2 text-center">
                    See More
                </button>
            </div>
        </div>
    );
};

export default Testimonail;