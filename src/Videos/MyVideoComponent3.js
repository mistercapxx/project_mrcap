import React from 'react';
import videoFile2 from './111sized.mp4';



const MyVideoComponent3 = () => {
    return (
  
        <div >
            <video controls>
                <source src={videoFile2} />
            </video>
        </div>
    );
};

export default MyVideoComponent3;

