// En TweetFeed.jsx
import React, { useEffect, useState } from 'react';
import { searchHashtag } from './Twitter';

const TweetFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      searchHashtag('TUNOMBREDEHASHTAG')
        .then((result) => {
          setTweets(result);
        })
        .catch((error) => console.log(error));
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet}>{tweet}</div>
      ))}
    </div>
  );
};

export default TweetFeed;

