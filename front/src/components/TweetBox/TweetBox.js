import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postTweetRequest } from "../../state/tweets";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imgurl, setImgurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTweetRequest({ name, content, imgurl }));
    setContent("");
    setName("");
    setImgurl("");
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__user">
          <Avatar src="https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L.png" />
          <input
            type="text"
            placeholder="Ingresá tu nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            />
        </div>
        <div className="tweetBox__content">
          <input
            type="text"
            placeholder="¿Qué está pasando?"
            onChange={(e) => setContent(e.target.value)}
            value={content}
            required
            />
        </div>
        <div className="tweetBox__footer">
          <input
          type="text"
          placeholder="Ingresá una URL de imagen (opcional)"
          className="tweetBox__img"
          onChange={(e) => setImgurl(e.target.value)}
          value={imgurl}
          />
          <Button
            type="submit"
            className="tweetBox__tweetButton"
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
