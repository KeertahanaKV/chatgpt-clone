import { Box, Typography } from "@mui/material";

function ChatMessage({ role, text }) {
  const isUser = role === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        mb: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: "65%",
          px: 3,
          py: 2,
          borderRadius: 3,
          bgcolor: isUser ? "#2f2f2f" : "#2a2b32", 
          border: isUser ? "1px solid #444" : "1px solid #333",
        }}
      >
        <Typography
          sx={{
            color: "#e8e8e8",
            fontSize: 15,
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}

export default ChatMessage;