import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import {
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  School as SchoolIcon,
  LocalHospital as LocalHospitalIcon,
  Work as WorkIcon,
  Gavel as GavelIcon,
  Psychology as PsychologyIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { EligibleBenefit } from "../data/mockData";

interface EligibleBenefitsCardProps {
  benefits: EligibleBenefit[];
}

const EligibleBenefitsCard: React.FC<EligibleBenefitsCardProps> = ({
  benefits,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "housing":
        return <HomeIcon />;
      case "food":
        return <RestaurantIcon />;
      case "education":
        return <SchoolIcon />;
      case "medical":
        return <LocalHospitalIcon />;
      case "employment":
        return <WorkIcon />;
      case "legal":
        return <GavelIcon />;
      case "mental_health":
        return <PsychologyIcon />;
      default:
        return <HomeIcon />;
    }
  };

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      housing: "#2196f3",
      food: "#4caf50",
      education: "#9c27b0",
      medical: "#f44336",
      employment: "#ff9800",
      legal: "#795548",
      mental_health: "#00bcd4",
    };
    return colors[category] || "#2196f3";
  };

  const getStatusColor = (
    status: string
  ): "default" | "primary" | "success" | "warning" => {
    switch (status) {
      case "not_started":
        return "default";
      case "application_submitted":
        return "primary";
      case "in_review":
        return "warning";
      case "approved":
        return "success";
      default:
        return "default";
    }
  };

  const getStatusLabel = (status: string): string => {
    switch (status) {
      case "not_started":
        return "Not Started";
      case "application_submitted":
        return "Application Submitted";
      case "in_review":
        return "In Review";
      case "approved":
        return "Approved";
      default:
        return status;
    }
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
        Benefits You Qualify For
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Programs and services matched to your needs
      </Typography>

      <Grid container spacing={3}>
        {benefits.map((benefit, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={benefit.benefit_id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: "100%",
                  minHeight: "520px",
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid",
                  borderColor: getCategoryColor(benefit.category),
                  borderRadius: 2,
                  transition: "all 0.3s",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: 2.5,
                  }}
                >
                  {/* Category Icon & Badge */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: getCategoryColor(benefit.category),
                        color: "white",
                        borderRadius: 2,
                        p: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getCategoryIcon(benefit.category)}
                    </Box>
                    {benefit.application_status === "approved" && (
                      <Box
                        sx={{
                          bgcolor: "success.main",
                          color: "white",
                          borderRadius: "50%",
                          p: 0.5,
                          display: "flex",
                        }}
                      >
                        <CheckCircleIcon fontSize="small" />
                      </Box>
                    )}
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      fontSize: "1.1rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {benefit.benefit_name}
                  </Typography>

                  {/* Category Chip */}
                  <Chip
                    label={benefit.category.replace("_", " ").toUpperCase()}
                    size="small"
                    sx={{
                      bgcolor: `${getCategoryColor(benefit.category)}20`,
                      color: getCategoryColor(benefit.category),
                      fontSize: "0.65rem",
                      height: "22px",
                      fontWeight: 600,
                      mb: 2,
                      alignSelf: "flex-start",
                    }}
                  />

                  {/* Eligibility Reason */}
                  <Box
                    sx={{
                      bgcolor: "grey.50",
                      borderRadius: 1.5,
                      p: 2,
                      mb: 2,
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 700,
                        color: "text.secondary",
                        display: "block",
                        mb: 0.5,
                        textTransform: "uppercase",
                        letterSpacing: 0.5,
                      }}
                    >
                      Why You Qualify:
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        color: "text.primary",
                      }}
                    >
                      {benefit.eligibility_reason}
                    </Typography>
                  </Box>

                  {/* Waitlist Information */}
                  {benefit.waitlist_info && (
                    <Box
                      sx={{
                        bgcolor: "info.50",
                        borderRadius: 1.5,
                        p: 2,
                        mb: 2,
                        borderLeft: "3px solid",
                        borderColor: "info.main",
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 700,
                          color: "info.dark",
                          display: "block",
                          mb: 1,
                          textTransform: "uppercase",
                          letterSpacing: 0.5,
                        }}
                      >
                        Your Waitlist Information:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 0.5,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.875rem" }}
                        >
                          <strong>Request ID:</strong>{" "}
                          {benefit.waitlist_info.request_id}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: "0.875rem" }}
                        >
                          <strong>Waitlist ID:</strong>{" "}
                          {benefit.waitlist_info.waitlist_id}
                        </Typography>
                      </Box>
                    </Box>
                  )}

                  {/* Spacer to push buttons to bottom */}
                  <Box sx={{ flexGrow: 1 }} />

                  {/* Status & Action */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: 1.5,
                      mt: "auto",
                    }}
                  >
                    <Chip
                      label={getStatusLabel(benefit.application_status)}
                      color={getStatusColor(benefit.application_status)}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    />
                    {benefit.waitlist_info ? (
                      <Button
                        variant="contained"
                        size="small"
                        color="info"
                        startIcon={<CheckCircleIcon />}
                        onClick={() =>
                          window.open(
                            benefit.waitlist_info!.lookup_url,
                            "_blank"
                          )
                        }
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          px: 2,
                        }}
                      >
                        Lookup Waitlist
                      </Button>
                    ) : benefit.application_status === "not_started" ? (
                      <Button
                        variant="contained"
                        size="small"
                        startIcon={<CheckCircleIcon />}
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          px: 2,
                        }}
                      >
                        Start Application
                      </Button>
                    ) : (
                      <Button
                        variant="outlined"
                        size="small"
                        sx={{
                          textTransform: "none",
                          fontWeight: 600,
                          px: 2,
                        }}
                      >
                        View Details
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EligibleBenefitsCard;
