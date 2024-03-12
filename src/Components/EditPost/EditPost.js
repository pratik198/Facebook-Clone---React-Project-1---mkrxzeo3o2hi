import React, { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import closePNG from "../../Images/close.png";
import Button from "@mui/material/Button";
import "./EditPost.css";
function EditPost({ post, open, handleClose }) {
  const [postContent, setPostContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [postImage, setPostImage] = useState(null); // State to hold the current image file

  const fileInputRef = useRef(null);

  useEffect(() => {
    if (post) {
      setPostContent(post.content);
    }
  }, [post]);

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFile(selectedFile);
    setPostImage(URL.createObjectURL(selectedFile));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleOpenImage = () => {
    triggerFileInput();
  };

  const handleEditPost = async () => {
    try {
      const formData = new FormData();
      formData.append("content", postContent);

      if (selectedFile) {
        formData.append("images", selectedFile);
      }

      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/facebook/post/${post._id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            projectID: "mkrxzeo3o2hi",
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Post updated successfully");
        handleClose();
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error("Error while updating a post:", errorData);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Modal
        style={{
          position: "absolute",
          left: "30%",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          style={{
            backgroundColor: "white",
            width: "56%",
            height: "23em",
            position: "relative",
            marginTop: "109px",
            boxShadow: "0px 5px 17px -7px rgba(0, 0, 0, 0.75)",
            borderRadius: "18px",
          }}
          className="modal__edit post "
        >
          <div>
            <div className="header__edit__post">
              <h3>Edit post</h3>
            </div>
            <div className="edit__post_content">
              <Avatar src={post?.avatar} />
              <strong>{post?.username}</strong>
              <input
                type="text"
                placeholder={`What's on your mind...`}
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                style={{ outline: "none" }}
              />
            </div>

            <div className="footer__section" onClick={handleOpenImage}>
              {/* <div className="updated__image">Add to your post</div> */}
              <div className="updated__image">
                {postImage && (
                  <img
                    src={postImage}
                    alt="Selected"
                    style={{
                      height: "126px",
                    }}
                  />
                )}
                {!postImage && "Add to your post"}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </div>
            <Button
              style={{ position: "relative", left: "39%", top: "19px" }}
              variant="contained"
              onClick={handleEditPost}
            >
              Edit Post
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditPost;
