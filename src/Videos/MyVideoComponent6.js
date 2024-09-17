import React from 'react';
import videoFile5 from './333sized.mp4';



const MyVideoComponent6 = () => {
    return (
    
        <div >
            <video controls>
                <source src={videoFile5} />
            </video>
        </div>
    );
};

export default MyVideoComponent6;

