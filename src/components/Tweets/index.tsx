import React from "react";
import { useQuery } from "react-query";
// import LikeTweet from "./LikeTweet";

const fetchTweets = async () => {
  // Fetch tweets from the API
};

export default function Tweets() {
  const { isError, isLoading } = useQuery("tweets", fetchTweets);

  if (isError) {
    return <p>Failed to load tweets.</p>;
  }

  if (isLoading) {
    return <p>Loading tweets...</p>;
  }

  return (
    <ul>
      {/* {data.map((tweet) => (
        <li key={tweet.id}>
          <small>{tweet.username}</small>
          <p>{tweet.text}</p>
          <footer>
            ...
            <LikeTweet tweetId={tweet.id} isLiked={tweet.is_liked} />
            ...
          </footer>
        </li>
      ))} */}
    </ul>
  );
}
