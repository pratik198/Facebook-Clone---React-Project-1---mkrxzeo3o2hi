import React from "react";
import { EmojiEmotions } from "@mui/icons-material";
import { Button, Box, Modal } from "@mui/material";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

const emoji = ({ handleEmojiSelect, handleClose }) => {
  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Picker onSelect={handleEmojiSelect} />
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default emoji;
