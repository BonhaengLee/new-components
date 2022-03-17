import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const toggleLikeTweet = async (tweetId) => {
  // Send a request to API
};

function LikeTweet({ tweetId, isLiked }) {
  const queryClient = useQueryClient();

  const mutation = useMutation(toggleLikeTweet, {
    onMutate: async (tweetId) => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries("tweets");

      // Get a snapshot of current data
      const snapshotOfPreviousTweets = queryClient.getQueryData("tweets");

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData("tweets", (oldTweets) =>
        oldTweets.map((tweet) => {
          if (tweet.id === tweetId) {
            return {
              ...tweet,
              is_liked: !tweet.is_liked,
            };
          }
          return tweet;
        })
      );

      // Return a snapshot so we can rollback in case of failure
      return {
        snapshotOfPreviousTweets,
      };
    },

    onError: (error, tweetId, { snapshotOfPreviousTweets }) => {
      // Rollback the changes using the snapshot
      queryClient.setQueryData("tweets", snapshotOfPreviousTweets);
    },

    onSuccess() {
      // Refetch or invalidate related queries
      queryClient.invalidateQueries("tweets");
    },
  });

  const handleClick = async () => {
    mutation.mutate(tweetId);
  };

  return (
    <button onClick={handleClick}>
      {isLiked ? <HeartFilledSVG /> : <HeartOutlinedSVG />}
    </button>
  );
}
