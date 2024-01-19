import React, { useState, useEffect, useRef } from 'react';
import "../../Styles/WhatIsOnUrMind.css";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import closePNG from "../../Images/close.png";
import Button from "@mui/material/Button";


function EditPost({post}) {
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [errorPost, setErrorPost] = useState("");
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [postData, setPostData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  // Fetch posts on component mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/facebook/post', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            'projectID': 'YOUR_PROJECT_ID',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setPostData(data);
        } else {
          console.error('Failed to fetch posts');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchPosts();
  }, []); 

  const handleEditPost = async (postId) => {
    try {
      const formData = new FormData();
      formData.append('content', postContent);

      if (selectedFile) {
        formData.append('images', selectedFile);
      }

      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${postId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectID: 'YOUR_PROJECT_ID',
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log('Post updated successfully');
        setOpen(false);
      } else {
        const errorData = await response.json();
        console.error('Error while updating a post:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const myAvtarr = {
    photoURL:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbiUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D",
    displayName: "Pratik",
  };

  const handleOpen = () => {
    setOpen(true);
    setUsername(localStorage.getItem("userName"));
  };

  const handleClose = () => {
    setOpen(false);
    setPostContent("");
    setPostImage(null);
    setSelectedFile(null);
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPostImage(file);
    setSelectedFile(file);
  };

  const handleOpenImage = () => {
    triggerFileInput();
  };

  return (
    <div>
      <section className="modal_for_create_post">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <div className="css-bhp9pd-MuiPaper-root-MuiCard-root">
              <div className="header_post_modal">
                <h3 className="test_">Edit post</h3>
                <img
                  src={closePNG}
                  alt=""
                  onClick={handleClose}
                  className="clickableImage"
                />
              </div>
              <div className="line__modal"></div>
              <div className="avatar__modal">
                <Avatar src={myAvtarr.photoURL} />
                <strong>{username}</strong>
                <div className="friend_div">
                  <img
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/zPcex_q0TM1.png"
                    alt=".."
                  />
                  <p>Friends</p>
                </div>
              </div>
              <div className="middle_div">
                <input
                  type="text"
                  id="myInput"
                  placeholder={`What's on your mind, ${username}?`}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </div>
              <div className="add_tp_ur_post" onClick={handleOpenImage}>
                <p>Add to your post</p>
                {selectedFile && (
                  <img
                    src={URL.createObjectURL(selectedFile)}
                    alt="selected_img"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                  />
                )}
                <img
                  onClick={triggerFileInput}
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                  alt="select_img"
                />
              </div>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
              <Button
                variant="contained"
                className="post__button"
                style={{ textTransform: "none", borderRadius: "8px" }}
                onClick={() => handleEditPost(postData[0]?._id)} 
              >
                Edit Post
              </Button>
            </div>
          </Box>
        </Modal>
      </section>
    </div>
  )
}

export default EditPost;
