import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment"; // For formatting dates

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&videoCategoryId=${category}&maxResults=20&key=${API_KEY}`;

    try {
      const res = await fetch(videoList_url);
      const json = await res.json();
      setData(json.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img
            src={item.snippet?.thumbnails?.medium?.url}
            alt="Video thumbnail"
          />
          <h2>{item.snippet?.title}</h2>
          <h3>{item.snippet?.channelTitle}</h3>
          <p>
            {value_converter(item.statistics?.viewCount)} views &bull;{" "}
            {moment(item.snippet?.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
