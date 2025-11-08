import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import {
  Phone as PhoneIcon,
  ContactPhone as ContactPhoneIcon,
  CardGiftcard as CardGiftcardIcon,
  Logout as LogoutIcon,
  Timeline as TimelineIcon,
  QuestionAnswer as QuestionAnswerIcon,
  Home as HomeIcon,
} from "@mui/icons-material";
import Sidebar from "./Sidebar";
import QuickStatsCard from "./QuickStatsCard";
import CallTranscriptsPanel from "./CallTranscriptsPanel";
import ServiceContactsTimeline from "./ServiceContactsTimeline";
import EligibleBenefitsCard from "./EligibleBenefitsCard";
import IntakeResponsesTable from "./IntakeResponsesTable";
import {
  mockCallTranscripts,
  mockIntakeResponses,
  mockServiceContacts,
  mockEligibleBenefits,
  calculateStats,
} from "../data/mockData";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("user_name") || "Guest";
  const stats = calculateStats();
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    navigate("/");
  };

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const HomeContent = () => (
    <Box>
      {/* Welcome Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Paper
          sx={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            p: 3,
            mb: 3,
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              Welcome back, {userName}! 👋
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              California Homeless Youth Project - Your Support Dashboard
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: -50,
              right: -50,
              opacity: 0.1,
              fontSize: "15rem",
            }}
          >
            ❤️
          </Box>
        </Paper>
      </motion.div>

      {/* Dashboard Overview */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
          Your Dashboard Overview
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Track your progress and access all your support services in one place.
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickStatsCard
            title="Total Calls Made"
            value={stats.totalCalls}
            icon={<PhoneIcon sx={{ fontSize: 40 }} />}
            gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            delay={0}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickStatsCard
            title="Services Contacted"
            value={stats.servicesContacted}
            icon={<ContactPhoneIcon sx={{ fontSize: 40 }} />}
            gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            delay={0.1}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickStatsCard
            title="Benefits Matched"
            value={stats.benefitsMatched}
            icon={<CardGiftcardIcon sx={{ fontSize: 40 }} />}
            gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            delay={0.2}
          />
        </Grid>
      </Grid>

      {/* Quick Access Cards */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Quick Access
        </Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              onClick={() => handleSectionClick("transcripts")}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                  bgcolor: "#667eea10",
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: 48, color: "#667eea", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Call Transcripts
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stats.totalCalls} conversations
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              onClick={() => handleSectionClick("timeline")}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                  bgcolor: "#f093fb10",
                },
              }}
            >
              <TimelineIcon sx={{ fontSize: 48, color: "#f093fb", mb: 1 }} />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Service Timeline
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stats.servicesContacted} services
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              onClick={() => handleSectionClick("benefits")}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                  bgcolor: "#4facfe10",
                },
              }}
            >
              <CardGiftcardIcon
                sx={{ fontSize: 48, color: "#4facfe", mb: 1 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Your Benefits
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stats.benefitsMatched} benefits
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              onClick={() => handleSectionClick("responses")}
              sx={{
                p: 3,
                cursor: "pointer",
                textAlign: "center",
                borderRadius: 2,
                transition: "all 0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 3,
                  bgcolor: "#43e97b10",
                },
              }}
            >
              <QuestionAnswerIcon
                sx={{ fontSize: 48, color: "#43e97b", mb: 1 }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                Intake Responses
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stats.questionsAnswered} answered
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );

  const sections = {
    home: {
      title: "Home",
      icon: <HomeIcon sx={{ fontSize: 32 }} />,
      color: "#667eea",
      content: <HomeContent />,
    },
    transcripts: {
      title: "Call Transcripts",
      icon: <PhoneIcon sx={{ fontSize: 32 }} />,
      color: "#667eea",
      content: <CallTranscriptsPanel transcripts={mockCallTranscripts} />,
    },
    timeline: {
      title: "Service Contacts Timeline",
      icon: <TimelineIcon sx={{ fontSize: 32 }} />,
      color: "#f093fb",
      content: <ServiceContactsTimeline contacts={mockServiceContacts} />,
    },
    benefits: {
      title: "Benefits You Qualify For",
      icon: <CardGiftcardIcon sx={{ fontSize: 32 }} />,
      color: "#4facfe",
      content: <EligibleBenefitsCard benefits={mockEligibleBenefits} />,
    },
    responses: {
      title: "Intake Responses",
      icon: <QuestionAnswerIcon sx={{ fontSize: 32 }} />,
      color: "#43e97b",
      content: <IntakeResponsesTable responses={mockIntakeResponses} />,
    },
  };

  const currentSection = activeSection
    ? sections[activeSection as keyof typeof sections]
    : null;

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Sidebar
        onSectionClick={handleSectionClick}
        activeSection={activeSection}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
        }}
      >
        <Container maxWidth="xl">
          {/* Logout Button - Always Visible */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 2,
            }}
          >
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderColor: "divider",
                "&:hover": {
                  borderColor: "primary.main",
                },
              }}
            >
              Logout
            </Button>
          </Box>

          {/* Content Area - Show Home or Selected Section */}
          {activeSection === "home" ? (
            <HomeContent />
          ) : currentSection ? (
            <Box>
              {/* Section Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                  pb: 2,
                  borderBottom: `3px solid ${currentSection.color}`,
                }}
              >
                <Box
                  sx={{
                    color: currentSection.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {currentSection.icon}
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    color: currentSection.color,
                  }}
                >
                  {currentSection.title}
                </Typography>
              </Box>

              {/* Section Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentSection.content}
                </motion.div>
              </AnimatePresence>
            </Box>
          ) : (
            <Box
              sx={{
                textAlign: "center",
                py: 8,
                px: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 2, color: "text.secondary", fontWeight: 500 }}
              >
                Welcome to your dashboard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Use the sidebar to navigate between sections
              </Typography>
            </Box>
          )}

          {/* Footer */}
          <Box sx={{ mt: 4, textAlign: "center", pb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              🌟 Remember: You're not alone. We're here to help every step of
              the way.
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ display: "block", mt: 1 }}
            >
              California Homeless Youth Project © 2025 - Built with care for
              youth in need
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
