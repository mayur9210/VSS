import React from 'react';

const VideoDetail = ({video}) =>{
    if(!video) {
        return <div>Loading...</div>;
    }


    return(
            <ul>
                {video.map(function(name, index){
                    return <li key={ index }>{name}</li>;
                })}
            </ul>

    );
};

export default VideoDetail;