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
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)",
            color: "white",
            p: 4,
            mb: 3,
            borderRadius: 3,
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(99, 102, 241, 0.3)",
            border: "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 1, letterSpacing: "-0.02em" }}
            >
              Welcome back, {userName}! 👋
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.95, fontWeight: 500 }}>
              Pixie Helpline - Help Starts Here
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: -50,
              right: -50,
              opacity: 0.12,
              fontSize: "15rem",
            }}
          >
            💙
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
            gradient="linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
            delay={0}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickStatsCard
            title="Services Contacted"
            value={stats.servicesContacted}
            icon={<ContactPhoneIcon sx={{ fontSize: 40 }} />}
            gradient="linear-gradient(135deg, #ec4899 0%, #f472b6 100%)"
            delay={0.1}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickStatsCard
            title="Benefits Matched"
            value={stats.benefitsMatched}
            icon={<CardGiftcardIcon sx={{ fontSize: 40 }} />}
            gradient="linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)"
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid transparent",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 12px 24px rgba(99, 102, 241, 0.2)",
                  bgcolor: "#6366f110",
                  borderColor: "#6366f130",
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: 48, color: "#6366f1", mb: 1 }} />
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid transparent",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 12px 24px rgba(6, 182, 212, 0.2)",
                  bgcolor: "#06b6d410",
                  borderColor: "#06b6d430",
                },
              }}
            >
              <TimelineIcon sx={{ fontSize: 48, color: "#06b6d4", mb: 1 }} />
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid transparent",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 12px 24px rgba(236, 72, 153, 0.2)",
                  bgcolor: "#ec489910",
                  borderColor: "#ec489930",
                },
              }}
            >
              <CardGiftcardIcon
                sx={{ fontSize: 48, color: "#ec4899", mb: 1 }}
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                border: "1px solid transparent",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.02)",
                  boxShadow: "0 12px 24px rgba(16, 185, 129, 0.2)",
                  bgcolor: "#10b98110",
                  borderColor: "#10b98130",
                },
              }}
            >
              <QuestionAnswerIcon
                sx={{ fontSize: 48, color: "#10b981", mb: 1 }}
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
              Pixie Helpline © 2025 - Help Starts Here
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
