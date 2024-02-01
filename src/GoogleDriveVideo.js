import React from 'react';

const GoogleDriveVideo = () => {
    const videoUrl = 'https://drive.google.com/file/d/1cj6S0HlyM68XLRd6XfojQFbjk6rOeYkk/preview';

    return (
        <div className="video-container">
            <iframe
                title="Google Drive Video"
                width="100"
                height="360"
                src={videoUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                // allowFullScreen
            ></iframe>
        </div>
    );
};

export default GoogleDriveVideo;
