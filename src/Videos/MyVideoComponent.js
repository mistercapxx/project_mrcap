import React from 'react';
import videoFile from './666sized.mp4';


const MyVideoComponent = () => {
    return (
  
        <div>
            <video controls>
                <source src={videoFile}/>
            </video>
        </div>
    );
};

export default MyVideoComponent;

