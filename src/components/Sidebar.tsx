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
      color: "#6366f1",
    },
    {
      id: "transcripts",
      label: "Call Transcripts",
      icon: <PhoneIcon />,
      color: "#8b5cf6",
    },
    {
      id: "timeline",
      label: "Service Contacts Timeline",
      icon: <TimelineIcon />,
      color: "#06b6d4",
    },
    {
      id: "benefits",
      label: "Benefits You Qualify For",
      icon: <CardGiftcardIcon />,
      color: "#ec4899",
    },
    {
      id: "responses",
      label: "Intake Responses",
      icon: <QuestionAnswerIcon />,
      color: "#10b981",
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
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, letterSpacing: "-0.01em" }}
          >
            Pixie Helpline
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
        <Typography
          variant="caption"
          sx={{ opacity: 0.95, position: "relative", zIndex: 1 }}
        >
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
            <ListItem disablePadding sx={{ mb: 0.5, px: 2 }}>
              <ListItemButton
                selected={activeSection === section.id}
                onClick={() => handleSectionClick(section.id)}
                sx={{
                  borderRadius: 2,
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "visible",
                  pl: 2,
                  "&.Mui-selected": {
                    bgcolor: `${section.color}12`,
                    "&::after": {
                      content: '"▶"',
                      position: "absolute",
                      right: "16px",
                      color: section.color,
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      animation: "slideIn 0.3s ease-out",
                    },
                    "&:hover": {
                      bgcolor: `${section.color}20`,
                    },
                  },
                  "&:hover": {
                    bgcolor: "rgba(99, 102, 241, 0.08)",
                    transform: "translateX(4px)",
                  },
                  "@keyframes slideIn": {
                    from: {
                      opacity: 0,
                      transform: "translateX(-8px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateX(0)",
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      activeSection === section.id
                        ? section.color
                        : "text.secondary",
                    minWidth: 40,
                    transition: "all 0.2s",
                  }}
                >
                  {section.icon}
                </ListItemIcon>
                <ListItemText
                  primary={section.label}
                  primaryTypographyProps={{
                    variant: "body2",
                    fontWeight: activeSection === section.id ? 600 : 500,
                    color:
                      activeSection === section.id
                        ? section.color
                        : "text.primary",
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
            borderRight: "1px solid #e2e8f0",
            bgcolor: "#fafafa",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
