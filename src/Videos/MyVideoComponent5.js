import React from 'react';
import videoFile4 from './444sized.mp4';



const MyVideoComponent5 = () => {
    return (
     
        <div >
            <video controls>
                <source src={videoFile4} />
            </video>
        </div>
    );
};

export default MyVideoComponent5;

