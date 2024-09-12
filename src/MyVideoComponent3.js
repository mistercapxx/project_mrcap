import React from 'react';
import videoFile2 from './111sized.mp4';



const MyVideoComponent3 = () => {
    return (
        // <div>
        //     <video width="250" height="560" controls>
        <div >
            <video controls>
                <source src={videoFile2} type="video/mp4" />
            </video>
        </div>
    );
};
// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'left',
//         justifyContent: 'left',
//         height: '20vh', // Adjust as needed
//     },
//     video: {
//         width: 450,
//         height: 6660,
//     },
// };

export default MyVideoComponent3;

