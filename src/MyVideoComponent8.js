import React from 'react';
import videoFile7 from '/Users/mistercap/WebstormProjects/project_mrcap/src/777sized.mp4';



const MyVideoComponent8 = () => {
    return (
        // <div>
        //     <video width="250" height="560" controls>
        <div >
            <video controls>
                <source src={videoFile7} type="video/mp4" />
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

export default MyVideoComponent8;

