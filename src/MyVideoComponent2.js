import React from 'react';
import videoFile1 from './888sized.mp4';


const MyVideoComponent2 = () => {
    return (
        // <div>
        //     <video width="250" height="560" controls>
        <div>
            <video controls>
                <source src={videoFile1} type="video/mp4" />
            </video>
        </div>
    );
};
// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '20vh', // Adjust as needed
//     },
//     video: {
//         width: 850,
//         height: 660,
//     },
// };

export default MyVideoComponent2;

