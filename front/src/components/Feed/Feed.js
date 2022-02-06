import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ArrowBack } from "@material-ui/icons";
import { VerifiedUser } from "@material-ui/icons";
import { Tooltip } from "@material-ui/core";

import { getTweetsRequest } from "../../state/tweets";
import "./Feed.css";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";

const Feed = () => {
  const dispatch = useDispatch();
  const tweets = [...useSelector((state) => state.tweets)];
  const location = useLocation();

  useEffect(() => {
    dispatch(getTweetsRequest());
  }, [dispatch]);

  const getTweets = () => {
    dispatch(getTweetsRequest());
  };

  return (
    <div className="feed">
      <div className="feed__header">
        {location.pathname === "/home" ? (
          <h2>Home</h2>
        ) : (
          <>
            <Link to="/home" onClick={getTweets}>
              <Tooltip title="Volver">
                <ArrowBack className="feed__arrowIcon" />
              </Tooltip>
            </Link>{" "}
            {location.pathname.startsWith("/tweets") ? (
              <h2>Tweet</h2>
            ) : (
              <div className="feed__tweet">
                <h2>{tweets.length && tweets[0].name}</h2>
                <div>
                  <VerifiedUser className="feed__badge" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {location.pathname === "/home" ? <TweetBox /> : null}
      {tweets.reverse().map((tweet) => (
        <div key={tweet.tid}>
          <Post
            id={tweet.tid}
            name={tweet.name}
            content={tweet.content}
            imgurl={tweet.imgurl}
          />
        </div>
      ))}
    </div>
  );
};

export default Feed;
