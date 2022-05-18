/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "react-query";

const toggleLikeTweet = async (tweetId: number) => {
  // Send a request to API
};

function LikeTweet({
  tweetId,
  isLiked,
}: {
  tweetId: number;
  isLiked: boolean;
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation(toggleLikeTweet, {
    onMutate: async (tweetId: number) => {
      // Stop the queries that may affect this operation
      await queryClient.cancelQueries("tweets");

      // Get a snapshot of current data
      const snapshotOfPreviousTweets = queryClient.getQueryData("tweets");

      // Modify cache to reflect this optimistic update
      queryClient.setQueryData("tweets", (oldTweets) =>
        // @ts-ignore
        oldTweets.map((tweet: { id: number; is_liked: boolean }) => {
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

    // onError: (error, tweetId, { snapshotOfPreviousTweets }) => {
    //   // Rollback the changes using the snapshot
    //   queryClient.setQueryData("tweets", snapshotOfPreviousTweets);
    // },

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
      {/* {isLiked ? <HeartFilledSVG /> : <HeartOutlinedSVG />} */}
    </button>
  );
}
