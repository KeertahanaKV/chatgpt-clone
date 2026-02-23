import { Box, Typography } from "@mui/material";
import ChatContainer from "../chat/ChatContainer";
import ChatInput from "../chat/ChatInput";

function ChatLayout({ messages, onSend }) {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#212020",
      }}
    >
      {/*  TOP BAR */}
      <Box
        sx={{
          height: 80,
          display: "flex",
          alignItems: "center",
           px:2,
          borderBottom: "1px solid #2d2f34",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "14px",
            color: "#ddd",
          }}
        >
          ChatGPT 5.2 ▾
        </Typography>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ChatContainer messages={messages} />
      </Box>

      <ChatInput onSend={onSend} />
    </Box>
  );
}

export default ChatLayout;