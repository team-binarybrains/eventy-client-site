import React from 'react'
import CountUp from 'react-countup';

function Count() {
    return (
        <div>

            <div className="stats stats-vertical lg:stats-horizontal shadow lg:h-40 gap-x-16 lg:mx-36">


                <div className="stat lg:w-72">
                    <div className="stat-title text-xl font-semibold flex">Traffic </div>

                    <CountUp
                        start={33}
                        end={36}
                        duration={4}
                        suffix="K"
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div className="stat-desc text-xl">2012 - 2022</div>
                </div>


                <div className="stat lg:w-72">
                    <div className="stat-title text-xl font-semibold flex">New Coustomers  </div>

                    <CountUp
                        start={2500}
                        end={4246}
                        duration={3}
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div className="stat-desc  text-xl">↗︎ 450 (22%)</div>
                </div>

                <div className="stat lg:w-72">
                    <div className="stat-title text-xl font-semibold flex">Sales</div>

                    <CountUp
                        start={123}
                        end={535}
                        duration={2}
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div className="stat-desc text-xl">↗︎ Throw your feedback </div>
                </div>

                <div className="stat lg:w-72">
                    <div className="stat-title text-xl font-semibold flex">Performance</div>

                    <CountUp
                        start={25}
                        end={72}
                        duration={3}
                        suffix="%"
                        className='text-stone-800 text-4xl font-bold'
                    ></CountUp>

                    <div className="stat-desc  text-xl">↗︎ 600 (72%)</div>
                </div>

            </div>
        </div>
    )
}

export default Count
