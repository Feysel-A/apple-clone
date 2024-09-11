import React, { useEffect, useState } from "react";

function Sample() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBMpyTRkcAIqAvjiK7e4isAwu6jSJOZ4Wc&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const allVideos = data.items;
        setVideos(allVideos);
      });
  }, []);
console.log(videos);
  return (
    <div className="container">
      <div className="row">
        {videos?.map((videos, i) => (
          <div className="col-sm-12 col-md-6 mb-4" key={i}>
            <div className="card h-100">
              <a
                href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={videos.snippet.thumbnails.high.url}
                  className="card-img-top"
                  alt={videos.snippet.title}
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">{videos.snippet.title}</h5>
                <p className="card-text">{videos.snippet.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sample;
