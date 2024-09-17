import React from 'react';
import videoFile3 from './222sized.mp4';



const MyVideoComponent4 = () => {
    return (

        <div >
            <video controls>
                <source src={videoFile3} />
            </video>
        </div>
    );
};

export default MyVideoComponent4;

