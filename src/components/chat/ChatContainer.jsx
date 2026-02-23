import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

function ChatContainer({ messages = [] }) {
  const bottomRef = useRef(null);

  // Auto scroll when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px",
        p: 3,
      }}
    >
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          role={msg.role}
          text={msg.text}
        />
      ))}

      {/* Invisible div to scroll to */}
      <div ref={bottomRef} />
    </Box>
  );
}

export default ChatContainer;