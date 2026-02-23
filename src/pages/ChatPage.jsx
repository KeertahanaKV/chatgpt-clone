import { Box } from "@mui/material";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import ChatLayout from "../components/layout/ChatLayout";

function ChatPage() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

 
  const handleNewChat = () => {
    setActiveChatId(null);
  };

  const handleSendMessage = (text) => {
    // If no active chat → create one automatically
    if (!activeChatId) {
      const newChatId = Date.now();

      const newChat = {
        id: newChatId,
        title: text.slice(0, 30),
        messages: [{ id: Date.now(), role: "user", text }],
      };

      setChats((prev) => [...prev, newChat]);
      setActiveChatId(newChatId);

      // Simulated reply
      setTimeout(() => {
        setChats((prevChats) =>
          prevChats.map((chat) =>
            chat.id === newChatId
              ? {
                  ...chat,
                  messages: [
                    ...chat.messages,
                    {
                      id: Date.now(),
                      role: "assistant",
                      text: "This is a simulated AI response.",
                    },
                  ],
                }
              : chat
          )
        );
      }, 800);

      return;
    }

    // If chat already exists
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { id: Date.now(), role: "user", text },
              ],
            }
          : chat
      )
    );

    setTimeout(() => {
      setChats((prevChats) =>
        prevChats.map((chat) =>
          chat.id === activeChatId
            ? {
                ...chat,
                messages: [
                  ...chat.messages,
                  {
                    id: Date.now(),
                    role: "assistant",
                    text: "This is a simulated AI response.",
                  },
                ],
              }
            : chat
        )
      );
    }, 800);
  };

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onSelectChat={setActiveChatId}
        onNewChat={handleNewChat}   //  PASS NEW CHAT
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <ChatLayout
        messages={activeChat?.messages || []}
        onSend={handleSendMessage}
      />
    </Box>
  );
}

export default ChatPage;