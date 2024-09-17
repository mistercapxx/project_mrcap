import React from 'react';
import videoFile1 from './888sized.mp4';


const MyVideoComponent2 = () => {
    return (
    
        <div>
            <video controls>
                <source src={videoFile1}/>
            </video>
        </div>
    );
};

export default MyVideoComponent2;

