import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  TableSortLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { IntakeResponse } from "../data/mockData";

interface IntakeResponsesTableProps {
  responses: IntakeResponse[];
}

type SortOrder = "asc" | "desc";

const IntakeResponsesTable: React.FC<IntakeResponsesTableProps> = ({
  responses: initialResponses,
}) => {
  const [responses, setResponses] =
    useState<IntakeResponse[]>(initialResponses);
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingResponse, setEditingResponse] = useState<IntakeResponse | null>(
    null
  );
  const [editedAnswer, setEditedAnswer] = useState("");
  const [isSkipped, setIsSkipped] = useState(false);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleEditClick = (response: IntakeResponse) => {
    setEditingResponse(response);
    setEditedAnswer(response.answer || "");
    setIsSkipped(response.skipped);
    setEditDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setEditDialogOpen(false);
    setEditingResponse(null);
    setEditedAnswer("");
    setIsSkipped(false);
  };

  const handleSaveEdit = () => {
    if (editingResponse) {
      const updatedResponses = responses.map((response) => {
        if (response.response_id === editingResponse.response_id) {
          return {
            ...response,
            answer: isSkipped ? null : editedAnswer,
            skipped: isSkipped,
            answered_at: new Date().toISOString(),
          };
        }
        return response;
      });
      setResponses(updatedResponses);
      handleCloseDialog();
    }
  };

  const sortedResponses = [...responses].sort((a, b) => {
    const dateA = new Date(a.answered_at).getTime();
    const dateB = new Date(b.answered_at).getTime();
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <Card>
      <CardContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Intake Responses
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your answers to our intake questions - you can edit these anytime
          </Typography>
        </Box>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "grey.50" }}>
                <TableCell sx={{ fontWeight: 600, width: "35%" }}>
                  Question
                </TableCell>
                <TableCell sx={{ fontWeight: 600, width: "35%" }}>
                  Answer
                </TableCell>
                <TableCell sx={{ fontWeight: 600, width: "20%" }}>
                  <TableSortLabel
                    active={true}
                    direction={sortOrder}
                    onClick={handleSort}
                  >
                    Date Answered
                  </TableSortLabel>
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, width: "10%" }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedResponses.map((response, index) => (
                <TableRow
                  key={response.response_id}
                  component={motion.tr}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  sx={{
                    "&:hover": {
                      bgcolor: "rgba(33, 150, 243, 0.04)",
                    },
                    bgcolor: response.skipped ? "grey.50" : "transparent",
                  }}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {response.question_text}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {response.skipped ? (
                      <Chip
                        label="Skipped"
                        size="small"
                        sx={{
                          bgcolor: "grey.300",
                          color: "text.secondary",
                        }}
                      />
                    ) : (
                      <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                        <CheckCircleIcon
                          sx={{
                            color: "success.main",
                            fontSize: "1rem",
                            mr: 1,
                            mt: 0.3,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2">
                          {response.answer}
                        </Typography>
                      </Box>
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(response.answered_at)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => handleEditClick(response)}
                      sx={{
                        "&:hover": {
                          bgcolor: "primary.50",
                        },
                      }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 2, p: 2, bgcolor: "primary.50", borderRadius: 2 }}>
          <Typography variant="body2" color="primary.dark">
            💡 <strong>Remember:</strong> You can skip any question that makes
            you uncomfortable. Your comfort and safety are our priority.
          </Typography>
        </Box>
      </CardContent>

      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Edit Response
            </Typography>
            <IconButton onClick={handleCloseDialog} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 1 }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 2, color: "text.secondary" }}
            >
              Question:
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              {editingResponse?.question_text}
            </Typography>

            <FormControlLabel
              control={
                <Checkbox
                  checked={isSkipped}
                  onChange={(e) => {
                    setIsSkipped(e.target.checked);
                    if (e.target.checked) {
                      setEditedAnswer("");
                    }
                  }}
                />
              }
              label="Skip this question"
            />

            {!isSkipped && (
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Your Answer"
                value={editedAnswer}
                onChange={(e) => setEditedAnswer(e.target.value)}
                placeholder="Enter your answer here..."
                sx={{ mt: 2 }}
                autoFocus
              />
            )}

            <Box
              sx={{
                mt: 2,
                p: 2,
                bgcolor: "info.50",
                borderRadius: 1,
                borderLeft: "3px solid",
                borderColor: "info.main",
              }}
            >
              <Typography variant="caption" color="info.dark">
                💙 <strong>You're in control:</strong> You can change or skip
                any answer at any time. There's no pressure to share more than
                you're comfortable with.
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleCloseDialog} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleSaveEdit}
            variant="contained"
            disabled={!isSkipped && !editedAnswer.trim()}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default IntakeResponsesTable;
