import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Timeline as TimelineIcon,
  CardGiftcard as CardGiftcardIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

interface SidebarProps {
  onSectionClick: (section: string) => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ onSectionClick, activeSection }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const sections = [
    {
      id: "home",
      label: "Home",
      icon: <HomeIcon />,
      color: "#2196f3",
    },
    {
      id: "transcripts",
      label: "Call Transcripts",
      icon: <PhoneIcon />,
      color: "#667eea",
    },
    {
      id: "timeline",
      label: "Service Contacts Timeline",
      icon: <TimelineIcon />,
      color: "#f093fb",
    },
    {
      id: "benefits",
      label: "Benefits You Qualify For",
      icon: <CardGiftcardIcon />,
      color: "#4facfe",
    },
    {
      id: "responses",
      label: "Intake Responses",
      icon: <QuestionAnswerIcon />,
      color: "#43e97b",
    },
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawerContent = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          p: 3,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            CHYP Dashboard
          </Typography>
          {isMobile && (
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Box>
        <Typography variant="caption" sx={{ opacity: 0.9 }}>
          Your Support Hub
        </Typography>
      </Box>

      <List sx={{ flex: 1, py: 2 }}>
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ListItem disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                selected={activeSection === section.id}
                onClick={() => handleSectionClick(section.id)}
                sx={{
                  mx: 1,
                  borderRadius: 2,
                  "&.Mui-selected": {
                    bgcolor: `${section.color}20`,
                    borderLeft: `4px solid ${section.color}`,
                    "&:hover": {
                      bgcolor: `${section.color}30`,
                    },
                  },
                  "&:hover": {
                    bgcolor: "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <ListItemIcon sx={{ color: section.color, minWidth: 40 }}>
                  {section.icon}
                </ListItemIcon>
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: activeSection === section.id ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          </motion.div>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 2, bgcolor: "grey.50" }}>
        <Typography variant="caption" color="text.secondary">
          💡 Click any section to expand and view details
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          onClick={() => setMobileOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
            bgcolor: "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        sx={{
          width: 280,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 280,
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
