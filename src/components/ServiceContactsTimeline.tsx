import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Grid,
  IconButton,
  Collapse,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Description as DescriptionIcon,
  Link as LinkIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Error as ErrorIcon,
  ExpandMore as ExpandMoreIcon,
  RadioButtonChecked as CurrentIcon,
  RadioButtonUnchecked as UpcomingIcon,
} from "@mui/icons-material";
import { ServiceContact } from "../data/mockData";

interface ServiceContactsTimelineProps {
  contacts: ServiceContact[];
}

const ServiceContactsTimeline: React.FC<ServiceContactsTimelineProps> = ({
  contacts,
}) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getContactIcon = (type: string) => {
    switch (type) {
      case "call_made":
        return <PhoneIcon />;
      case "form_submitted":
        return <DescriptionIcon />;
      case "referral":
        return <LinkIcon />;
      default:
        return <PhoneIcon />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon />;
      case "pending":
        return <ScheduleIcon />;
      case "failed":
        return <ErrorIcon />;
      default:
        return <ScheduleIcon />;
    }
  };

  const getStatusColor = (status: string): "success" | "warning" | "error" => {
    switch (status) {
      case "completed":
        return "success";
      case "pending":
        return "warning";
      case "failed":
        return "error";
      default:
        return "warning";
    }
  };

  const getContactTypeLabel = (type: string): string => {
    switch (type) {
      case "call_made":
        return "Call Made";
      case "form_submitted":
        return "Form Submitted";
      case "referral":
        return "Referral";
      default:
        return type;
    }
  };

  const getStageIcon = (status: "completed" | "current" | "upcoming") => {
    switch (status) {
      case "completed":
        return <CheckCircleIcon fontSize="small" />;
      case "current":
        return <CurrentIcon fontSize="small" />;
      case "upcoming":
        return <UpcomingIcon fontSize="small" />;
    }
  };

  const getStageColor = (
    status: "completed" | "current" | "upcoming"
  ): "success" | "primary" | "inherit" => {
    switch (status) {
      case "completed":
        return "success";
      case "current":
        return "primary";
      case "upcoming":
        return "inherit";
    }
  };

  const handleExpandClick = (contactId: string) => {
    setExpandedCard(expandedCard === contactId ? null : contactId);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Services We've Contacted on Your Behalf
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Track the progress of each service connection
      </Typography>

      <Grid container spacing={2}>
        {contacts.map((contact, index) => (
          <Grid size={{ xs: 12 }} key={contact.contact_id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor:
                    expandedCard === contact.contact_id
                      ? `${getStatusColor(contact.status)}.main`
                      : "divider",
                  transition: "all 0.3s",
                  "&:hover": {
                    borderColor: `${getStatusColor(contact.status)}.main`,
                    boxShadow: 2,
                  },
                }}
              >
                <CardContent>
                  {/* Card Header */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            color: `${getStatusColor(contact.status)}.main`,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {getContactIcon(contact.contact_type)}
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {contact.service_name}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          flexWrap: "wrap",
                          mb: 1,
                        }}
                      >
                        <Chip
                          label={getContactTypeLabel(contact.contact_type)}
                          size="small"
                          variant="outlined"
                        />
                        <Chip
                          icon={getStatusIcon(contact.status)}
                          label={
                            contact.status.charAt(0).toUpperCase() +
                            contact.status.slice(1)
                          }
                          size="small"
                          color={getStatusColor(contact.status)}
                        />
                        <Chip
                          label={formatDate(contact.contact_date)}
                          size="small"
                          variant="outlined"
                        />
                      </Box>

                      <Typography variant="body2" color="text.secondary">
                        {contact.notes}
                      </Typography>
                    </Box>

                    <IconButton
                      onClick={() => handleExpandClick(contact.contact_id)}
                      sx={{
                        transform:
                          expandedCard === contact.contact_id
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </Box>

                  {/* Expandable Stages Section */}
                  <AnimatePresence>
                    {expandedCard === contact.contact_id && (
                      <Collapse in={expandedCard === contact.contact_id}>
                        <Box
                          sx={{
                            mt: 2,
                            pt: 2,
                            borderTop: "1px solid",
                            borderColor: "divider",
                          }}
                        >
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 600, mb: 2 }}
                          >
                            Progress Stages:
                          </Typography>

                          {contact.stages && contact.stages.length > 0 ? (
                            <Stepper orientation="vertical">
                              {contact.stages.map((stage, stageIndex) => (
                                <Step
                                  key={stageIndex}
                                  active={stage.status === "current"}
                                  completed={stage.status === "completed"}
                                >
                                  <StepLabel
                                    StepIconComponent={() => (
                                      <Box
                                        sx={{
                                          color: `${getStageColor(
                                            stage.status
                                          )}.main`,
                                        }}
                                      >
                                        {getStageIcon(stage.status)}
                                      </Box>
                                    )}
                                  >
                                    <Box>
                                      <Typography
                                        variant="body2"
                                        sx={{ fontWeight: 600 }}
                                      >
                                        {stage.stage_name}
                                      </Typography>
                                      {stage.date && (
                                        <Typography
                                          variant="caption"
                                          color="text.secondary"
                                        >
                                          {formatDate(stage.date)}
                                        </Typography>
                                      )}
                                    </Box>
                                  </StepLabel>
                                  <StepContent>
                                    <Typography
                                      variant="body2"
                                      color="text.secondary"
                                      sx={{ pb: 2 }}
                                    >
                                      {stage.description}
                                    </Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          ) : (
                            <Typography variant="body2" color="text.secondary">
                              No stage information available
                            </Typography>
                          )}

                          {/* Next Steps */}
                          <Box
                            sx={{
                              mt: 2,
                              bgcolor: "primary.50",
                              borderLeft: "3px solid",
                              borderColor: "primary.main",
                              borderRadius: 1,
                              p: 2,
                            }}
                          >
                            <Typography
                              variant="caption"
                              color="primary.main"
                              sx={{
                                fontWeight: 600,
                                display: "block",
                                mb: 0.5,
                              }}
                            >
                              Next Steps:
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.875rem",
                                color: "text.primary",
                              }}
                            >
                              {contact.next_steps}
                            </Typography>
                          </Box>
                        </Box>
                      </Collapse>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceContactsTimeline;
