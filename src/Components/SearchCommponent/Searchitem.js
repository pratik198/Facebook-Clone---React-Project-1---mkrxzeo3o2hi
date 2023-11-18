import React from "react";
import './searchitem.css'
import { Box, IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../Context";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import like from "../../Images/like.png";
import love from "../../Images/thumbs-up (1).png";
import chat from "../../Images/chat.png";
import like2 from "../../Images/like 2.png";
import comment from "../../Images/comment.png";
import Card from "@mui/material/Card";
// import Box from "@mui/material";
function SearchComponent() {
  const { apiSearch } = useAuth();
  return (
    <div>
      <Navbar />

      <div className="post-box-search-after-search">
        {apiSearch &&
          apiSearch.map((post) => (
            <Box
              sx={{ maxWidth: 450, maxHeight: 800, height: "30em" }}
              key={post._id}
            >
              <Link className="userProfile-img-name" to="/userprofile">
                <div className="accountPost-img">
                  <Avatar
                    alt={post.author.name}
                    src={post.author.profileImage}
                  />
                  <div className="author-name-name">
                    <h4 className="naem-author">{post.author.name}</h4>
                  </div>
                </div>
              </Link>
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
                    style={{
                      position: "relative",
                      top: "10px",
                      height: "21px",
                    }}
                  />
                </div>
              
              </div>
            </Box>
          ))}
      <div className="empty-div"></div>
      </div>
    </div>
  );
}
export default SearchComponent;
