import React, { useState, useEffect } from "react";
import "../Styles/Homepage.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { getBearerToken } from "./Datastore";
import like from "../Images/like.png";
import love from "../Images/thumbs-up (1).png";
import chat from "../Images/chat.png";
import like2 from "../Images/like 2.png";
import comment from "../Images/comment.png";
import send from "../Images/send.png";
function Homepage() {
  const [Data, setData] = useState([]);
  const [isPostLiked, setPostLiked] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const bearerToken = localStorage.getItem("token");
  const [comments, setComments] = useState([]);
  let api1 =
    'https://academics.newtonschool.co/api/v1/facebook/post?search={"author.name":"Carmen Shanahan"}';
  let api = "https://academics.newtonschool.co/api/v1/facebook/post";
  useEffect(() => {
    // getComment();
    // setCommentData();
    GetData();
    setPostLiked(false);
  }, [isPostLiked]);

  const getComment = async (postId) => {
    console.log("inside get comment");
    console.log(postId);
    const token = localStorage.getItem("token");
    const token_ = "Bearer " + token;
    console.log(token_);
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,
      {
        method: "GET",
        headers: {
          Authorization: token_,
          projectID: "f104bi07c490",
        },
      }
    );
    console.log("Anurag Sir");
    console.log(response);
    const d = await response.json();
    console.log(d);
    // setCommentData(d.data);
    commentData[postId] = d.data;
  };

  const GetData = async () => {
    const response = await fetch(api, {
      headers: {
        projectID: "f104bi07c490",
      },
    });
    const r = await response.json();
    console.log(r);
    setData(r["data"]);
    console.log(Data);

    var delayInMilliseconds = 5000; //1 second

    setTimeout(function () {
      Data.forEach((i) => {
        console.log(i._id);
        getComment(i._id);
      });
      //your code to be executed after 1 second
    }, delayInMilliseconds);
  };

 
  console.log(Data);
  Data.forEach((i) => {
    console.log(i._id);
    getComment(i._id);
  });
  const likePost = async (postId) => {
    // const token = getBearerToken();
    const token = localStorage.getItem("token");
    const token_ = "Bearer " + token;
    console.log(token_);

    console.log(postId);
    const response = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/like/${postId}`,
      {
        method: "POST",
        headers: {
          Authorization: token_,
          projectID: "f104bi07c490",
        },
      }
    );
    console.log(response);
    const d = await response.json();
    console.log(d);
    if (response.ok) {
      setPostLiked(true);
    }
  };

  //updating comment//

  const createCommentForPost = async (postId, content) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/comment/${postId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectID: "f104bi07c490",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        }
      );

      if (response.ok) {
        console.log("Comment created successfully");
        const data = await response.json();
        setComments([...comments, data.comment]);
      } else {
        const errorData = await response.json();
        console.error("Error while creating a comment:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleComment = (e) => {
    setComments(e.target.value);
  };

  //

  ///fecting comments

  const handleFetchComments = async (postId) => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}/comments`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            projectID: "f104bi07c490",
          },
        }
      );
      if (response.ok) {
        console.log("Comment is click");
        const data = await response.json();
        setComments(data.comments);
        console.log(data);
      } else {
        const errorData = await response.json();
        console.error("Error while fetching comments:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  ////////////////////////

  return (
    <div className="post-box">
      {Data &&
        Data.map((post) => (
          <Card sx={{ maxWidth: 450, maxHeight: 800, height: "50em" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img src={post.author.profileImage} alt="..." />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.author.name}
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="194"
              image={post.channel.image}
              alt="Paella dish"
            />
            <div className="like-icon">
              <div className="like-section-count">
                <img src={like} alt="..." />
                <img src={love} alt="..." />
                <p id="L-count">{post.likeCount}</p>
              </div>
              <div className="commemt-icon">
                <p>{post.commentCount}</p>
                <img
                  src={chat}
                  alt="..."
                  style={{ position: "relative", top: "10px", height: "21px" }}
                />
              </div>
            </div>
            <div className="line"></div>

            <div className="footer">
              <div className="like-post-like-btn">
                <span>
                  <img
                    src={like2}
                    alt="..."
                    onClick={() => likePost(post._id)}
                    style={{
                      cursor: "pointer",
                      height: "21px",
                      marginTop: "-4px",
                    }}
                  />
                  <span id="S-comment">Like</span>
                </span>
              </div>

              <div
                className="like-post-like-btn"
                style={{ marginRight: "31px", marginTop: "-3px" }}
              >
                <img
                  src={comment}
                  alt="..."
                  // onClick={() => getComment(post._id)}
                  onClick={() => handleFetchComments(post._id)}
                />
                <span id="S-comment">Comment</span>
              </div>
            </div>
            <div className="line2"></div>
            <div className="chat-container">
              <div className="C-input-container">
                <div
                  className="input-items"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Avatar
                    style={{
                      height: "35px",
                      width: "35px",
                      marginLeft: "12px",
                      marginRight: "4px",
                    }}
                  />
                  <input
                    type="text"
                    class="text-field-input"
                    placeholder="Write a public comment..."
                    value={comments}
                    onChange={handleComment}
                    style={{ border: "none" }}
                  />
                  <span>
                    <div id="send-container">
                      <img
                        src={send}
                        alt="..."
                        style={{ height: "22px", marginRight: "11px" }}
                        onClick={() => createCommentForPost(post._id, comments)}
                      />
                    </div>
                  </span>
                </div>
              </div>

              <div className="scroll-container">
                {commentData[post._id] &&
                  commentData[post._id].map((comment) => (
                    <div>
                      <div
                        className="add-commnet-section"
                        style={{ display: "flex" }}
                      >
                        <Avatar
                          style={{
                            height: "35px",
                            width: "35px",
                            marginLeft: "12px",
                            marginRight: "4px",
                            cursor: "pointer",
                          }}
                        />
                        <div className="added-comment">
                          <p>
                            <strong style={{ fontSize: "12px" }}>
                              Harry Potter
                            </strong>
                          </p>
                          <p style={{ fontSize: "15px" }}>{comment.content}</p>
                        </div>
                      </div>
                      <div style={{ display: "flex" }} className="l-r-s">
                        <p>like</p>
                        <p>Reply</p>
                        <p>Share</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
}

export default Homepage;
