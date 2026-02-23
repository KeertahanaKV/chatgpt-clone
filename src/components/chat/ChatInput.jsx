import { Box, IconButton, InputBase } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import MicNoneIcon from "@mui/icons-material/MicNone";
import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          alignItems: "center",
          bgcolor: "#2f2f2f",
          borderRadius: "28px",
          px: 2,
          py: 1,
        }}
      >
        <InputBase
          fullWidth
          placeholder="Ask anything"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
          sx={{ color: "white" }}
        />

        <IconButton sx={{ color: "#aaa" }}>
          <MicNoneIcon />
        </IconButton>

        <IconButton
          onClick={handleSubmit}
          sx={{
            bgcolor: input.trim() ? "white" : "#555",
            color: input.trim() ? "black" : "#aaa",
            width: 36,
            height: 36,
            ml: 1,
            "&:hover": {
              bgcolor: input.trim() ? "#ddd" : "#555",
            },
          }}
        >
          <ArrowUpwardIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default ChatInput;