import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getTweetsRequest,
  getSingleTweetRequest,
  getUserTweetsRequest,
  deleteTweetRequest,
} from "../../state/tweets";
import "./Post.css";
import { Avatar, Tooltip } from "@material-ui/core";
import {
  ChatBubbleOutlined,
  Delete,
  FavoriteBorder,
  Publish,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";

const Post = ({ id, name, content, imgurl }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const getUserTweets = (e) => {
    dispatch(getUserTweetsRequest(name));
  };

  const getSingleTweet = (e) => {
    dispatch(getSingleTweetRequest(id));
  };

  const deleteTweet = (e) => {
    dispatch(deleteTweetRequest(id));
    if (location.pathname !== "/home") {
      history.push("/home");
      dispatch(getTweetsRequest());
    }
  };

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
          <Avatar src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png" />
        </div>
        <div className="post__headerElements">
          <div>
            <div className="post__headerName">
              <h3 onClick={getUserTweets}>
                <Link to={`/users/${name}`} className="post__text">
                  {name}
                </Link>
              </h3>
              <div>
                <VerifiedUser className="post__badge" />
              </div>
            </div>
            <div className="post__headerContent">
              <p onClick={getSingleTweet}>
                <Link to={`/tweets/${id}`} className="post__text">
                  {content}
                </Link>
              </p>
            </div>
          </div>
          <div className="post__trash">
            <Tooltip title="Borrar">
              <Delete onClick={deleteTweet} />
            </Tooltip>
          </div>
        </div>
      </div>
      {imgurl ? (
        <div className="post__body">
          <img src={imgurl} alt="" />
        </div>
      ) : null}
      <div className="post__footer">
        <ChatBubbleOutlined fontSize="small" />
        <Repeat fontSize="small" />
        <FavoriteBorder fontSize="small" />
        <Publish fontSize="small" />
      </div>
    </div>
  );
};

export default Post;
