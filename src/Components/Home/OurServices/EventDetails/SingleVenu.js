import { Slide } from 'pure-react-carousel';
import React from 'react';

const SingleVenu = ({ VenuDetails, index, handleSelectVenu, selectVenu }) => {

    const { image, location, price, quantity, description } = VenuDetails;

    return (
        <Slide index={index}>
            <div>
                <img
                    src={image}
                    alt="A black chair with wooden legs"
                    className=""
                />
                <div className="p-3">
                    <p className="text-lg"><b>Event Location :</b> {location}</p>
                    <p className="text-base pt-1"><b>Price :</b> {price}</p>
                    <p className="text-base pt-1"><b>Quantity :</b> {quantity} peoples</p>
                    <p className="w-full pt-1"><b>Details : </b> {description.slice(0, 190)}...</p>
                    <button onClick={() => handleSelectVenu(VenuDetails)} className="bg-gray-800 text-white mt-3 px-10 py-2">Select Venu</button>

                </div>
            </div>
        </Slide>
    );
};

export default SingleVenu;