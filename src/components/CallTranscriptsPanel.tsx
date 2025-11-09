import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Modal,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Close as CloseIcon, Phone as PhoneIcon } from "@mui/icons-material";
import { CallTranscript } from "../data/mockData";

interface CallTranscriptsPanelProps {
  transcripts: CallTranscript[];
}

const CallTranscriptsPanel: React.FC<CallTranscriptsPanelProps> = ({
  transcripts,
}) => {
  const [selectedTranscript, setSelectedTranscript] =
    useState<CallTranscript | null>(null);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} min`;
  };

  const getSentimentColor = (score: number): string => {
    if (score >= 0.7) return "success";
    if (score >= 0.4) return "warning";
    return "error";
  };

  const getSentimentLabel = (score: number): string => {
    if (score >= 0.7) return "Positive";
    if (score >= 0.4) return "Neutral";
    return "Needs Support";
  };

  return (
    <>
      <Card sx={{ height: "100%" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PhoneIcon sx={{ mr: 1, color: "primary.main" }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Call Transcripts
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Your conversation history with our support team
          </Typography>

          <List sx={{ p: 0 }}>
            {transcripts.map((transcript, index) => (
              <motion.div
                key={transcript.transcript_id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ListItem disablePadding sx={{ mb: 1 }}>
                  <ListItemButton
                    onClick={() => setSelectedTranscript(transcript)}
                    sx={{
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 2,
                      "&:hover": {
                        borderColor: "primary.main",
                        bgcolor: "rgba(33, 150, 243, 0.04)",
                      },
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 1,
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {transcript.call_subject}
                        </Typography>
                        <Chip
                          label={getSentimentLabel(transcript.sentiment_score)}
                          color={
                            getSentimentColor(transcript.sentiment_score) as any
                          }
                          size="small"
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ display: "block", mb: 0.5 }}
                      >
                        {formatDate(transcript.call_date)} • Duration:{" "}
                        {formatDuration(transcript.duration_seconds)}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {transcript.transcript_text.substring(0, 100)}...
                      </Typography>
                    </Box>
                  </ListItemButton>
                </ListItem>
              </motion.div>
            ))}
          </List>
        </CardContent>
      </Card>

      <Modal
        open={!!selectedTranscript}
        onClose={() => setSelectedTranscript(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          style={{ width: "100%", maxWidth: "900px" }}
        >
          <Card
            sx={{
              width: "100%",
              maxHeight: "90vh",
              overflow: "hidden",
              borderRadius: 3,
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                p: { xs: 2, sm: 3 },
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1, minWidth: 0, overflow: "visible" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    <PhoneIcon sx={{ fontSize: 28 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "1.25rem", sm: "1.5rem" },
                      }}
                    >
                      {selectedTranscript?.call_subject || "Call Transcript"}
                    </Typography>
                  </Box>
                  {selectedTranscript && (
                    <Box
                      sx={{
                        display: "flex",
                        gap: { xs: 1, sm: 2 },
                        flexWrap: "wrap",
                        mt: 1,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.95,
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        📅 {formatDate(selectedTranscript.call_date)}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          opacity: 0.95,
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        ⏱️ Duration:{" "}
                        {formatDuration(selectedTranscript.duration_seconds)}
                      </Typography>
                    </Box>
                  )}
                </Box>
                <IconButton
                  onClick={() => setSelectedTranscript(null)}
                  sx={{
                    color: "white",
                    bgcolor: "rgba(255,255,255,0.2)",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.3)",
                    },
                    flexShrink: 0,
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  opacity: 0.1,
                  fontSize: "8rem",
                  display: { xs: "none", sm: "block" },
                  pointerEvents: "none",
                }}
              >
                💬
              </Box>
            </Box>

            {/* Sentiment Badge */}
            {selectedTranscript && (
              <Box
                sx={{
                  px: 3,
                  pt: 2,
                  pb: 1,
                  bgcolor: "grey.50",
                  borderBottom: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: 600, color: "text.secondary" }}
                  >
                    Conversation Tone:
                  </Typography>
                  <Chip
                    label={getSentimentLabel(
                      selectedTranscript.sentiment_score
                    )}
                    color={
                      getSentimentColor(
                        selectedTranscript.sentiment_score
                      ) as any
                    }
                    size="small"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              </Box>
            )}

            {/* Transcript Content */}
            <CardContent
              sx={{
                p: 0,
                overflowY: "auto",
                flexGrow: 1,
                bgcolor: "grey.50",
                "&:last-child": { pb: 0 },
              }}
            >
              {selectedTranscript && (
                <Box sx={{ p: 3 }}>
                  {selectedTranscript.transcript_text
                    .split("\n\n")
                    .map((paragraph, index) => {
                      // Check if this line contains a speaker
                      const colonIndex = paragraph.indexOf(":");
                      if (colonIndex === -1) return null;

                      const speaker = paragraph.substring(0, colonIndex).trim();
                      const message = paragraph
                        .substring(colonIndex + 1)
                        .trim();

                      // Determine if it's an agent/system speaker or client speaker
                      const isAgent =
                        speaker.toLowerCase().includes("agent") ||
                        speaker.toLowerCase().includes("hospital") ||
                        speaker.toLowerCase().includes("service");

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: isAgent
                                ? "flex-start"
                                : "flex-end",
                              mb: 2,
                              gap: 1,
                            }}
                          >
                            {isAgent && (
                              <Box
                                sx={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: "50%",
                                  bgcolor: "primary.main",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  color: "white",
                                  fontSize: "1.2rem",
                                  flexShrink: 0,
                                }}
                              >
                                🎧
                              </Box>
                            )}
                            <Box
                              sx={{
                                maxWidth: "70%",
                                bgcolor: isAgent ? "white" : "primary.main",
                                color: isAgent ? "text.primary" : "white",
                                borderRadius: isAgent
                                  ? "16px 16px 16px 4px"
                                  : "16px 16px 4px 16px",
                                p: 2,
                                boxShadow: 1,
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                              }}
                            >
                              <Typography
                                variant="caption"
                                sx={{
                                  fontWeight: 700,
                                  color: isAgent
                                    ? "primary.main"
                                    : "rgba(255,255,255,0.9)",
                                  display: "block",
                                  mb: 0.5,
                                  fontSize: "0.7rem",
                                  textTransform: "uppercase",
                                  letterSpacing: 0.5,
                                }}
                              >
                                {speaker}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{
                                  lineHeight: 1.6,
                                  color: isAgent ? "text.primary" : "white",
                                  whiteSpace: "pre-wrap",
                                  wordBreak: "break-word",
                                  fontSize: "0.9rem",
                                }}
                              >
                                {message}
                              </Typography>
                            </Box>
                            {!isAgent && (
                              <Box
                                sx={{
                                  width: 36,
                                  height: 36,
                                  borderRadius: "50%",
                                  bgcolor: "grey.300",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "1.2rem",
                                  flexShrink: 0,
                                }}
                              >
                                👤
                              </Box>
                            )}
                          </Box>
                        </motion.div>
                      );
                    })}
                </Box>
              )}
            </CardContent>

            {/* Footer */}
            <Box
              sx={{
                p: 2,
                bgcolor: "grey.50",
                borderTop: "1px solid",
                borderColor: "divider",
                textAlign: "center",
              }}
            >
              <Typography variant="caption" color="text.secondary">
                💙 All conversations are confidential and trauma-informed
              </Typography>
            </Box>
          </Card>
        </motion.div>
      </Modal>
    </>
  );
};

export default CallTranscriptsPanel;
