import logo from "../../../assets/chatgpt-logo.png";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import CodeIcon from "@mui/icons-material/Code";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";

const drawerWidth = 260;
const collapsedWidth = 70;

function Sidebar({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  isOpen,
  toggleSidebar,
}) {
  return (
    <Box
      sx={{
        width: isOpen ? drawerWidth : collapsedWidth,
        transition: "width 0.3s ease",
        bgcolor: "#040405",
        borderRight: "1px solid #2d2f34",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/*  Top */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: isOpen ? "space-between" : "center",
        }}
      >
        <img src={logo} alt="ChatGPT" width={32} />

        <IconButton onClick={toggleSidebar}>
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>

      {/*  Main Menu Icons */}
      <List>
        <ListItemButton onClick={onNewChat}>
          <ListItemIcon>
            <EditOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="New chat" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SearchIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Search chats" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <ImageOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Images" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AppsIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Apps" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <CodeIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Codex" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <SmartToyOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="GPTs" />}
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <FolderOutlinedIcon sx={{ color: "white" }} />
          </ListItemIcon>
          {isOpen && <ListItemText primary="Projects" />}
        </ListItemButton>
      </List>

      {/* Your Chats Section */}
      {isOpen && (
        <>
          <Typography
            sx={{
              px: 2,
              mt: 2,
              mb: 1,
              fontSize: 12,
              color: "#aaa",
            }}
          >
            Your chats
          </Typography>

          <Box sx={{ flex: 1, overflowY: "auto", px: 1 }}>
            {chats.map((chat) => (
              <ListItemButton
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                selected={chat.id === activeChatId}
              >
                <ListItemText
                  primary={chat.title}
                  primaryTypographyProps={{
                    noWrap: true,
                    fontSize: 14,
                  }}
                />
              </ListItemButton>
            ))}
          </Box>
        </>
      )}
    </Box>
  );
}

export default Sidebar;