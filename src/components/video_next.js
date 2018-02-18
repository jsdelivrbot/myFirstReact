import React from 'react';

const VideoNext = (props) => {
    const video = props.video;

    if (!video) {
        return (
            <div>Loading...</div>
        );
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <div className="next-video col-md-4 ">Next Video
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </div>

    );
};

export default VideoNext;