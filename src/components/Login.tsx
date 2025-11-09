import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { SupportAgent as SupportAgentIcon } from "@mui/icons-material";
import { mockUserProfile } from "../data/mockData";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dob: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    dob: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      phone: "",
      dob: "",
    };

    // Validation
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    if (!formData.dob) {
      newErrors.dob = "Please enter your date of birth";
    }

    if (newErrors.name || newErrors.phone || newErrors.dob) {
      setErrors(newErrors);
      return;
    }

    // Store user_id in localStorage (in real app, this would come from backend)
    localStorage.setItem("user_id", mockUserProfile.user_id);
    localStorage.setItem("user_name", formData.name);

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1a5276 0%, #48c9b0 100%)",
        padding: 2,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            'url("https://sfile.chatglm.cn/images-ppt/9ab40a8bc60a.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.7,
          animation: "pulse 8s infinite alternate",
        },
        "@keyframes pulse": {
          "0%": {
            transform: "scale(1)",
            opacity: 0.7,
          },
          "100%": {
            transform: "scale(1.05)",
            opacity: 0.9,
          },
        },
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <SupportAgentIcon
                    sx={{
                      fontSize: 80,
                      color: "#48c9b0",
                      mb: 2,
                    }}
                  />
                </motion.div>
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: "#1a5276",
                    letterSpacing: "1px",
                  }}
                >
                  Pixie Helpline
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: "#48c9b0",
                    position: "relative",
                    display: "inline-block",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: "-5px",
                      left: 0,
                      width: "100%",
                      height: "4px",
                      background: "rgba(72, 201, 176, 0.7)",
                      borderRadius: "2px",
                    },
                  }}
                >
                  Help Starts Here
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mt: 2 }}
                >
                  An AI homeless helpline of the future
                </Typography>
              </Box>

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                  margin="normal"
                  variant="outlined"
                  placeholder="Rishi Athreya"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  margin="normal"
                  variant="outlined"
                  placeholder="+1-408-591-0644"
                  sx={{ mb: 2 }}
                />

                <TextField
                  fullWidth
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  error={!!errors.dob}
                  helperText={errors.dob}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.5,
                    textTransform: "none",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg, #1a5276 0%, #48c9b0 100%)",
                    boxShadow: "0 4px 12px rgba(26, 82, 118, 0.4)",
                    "&:hover": {
                      boxShadow: "0 6px 16px rgba(26, 82, 118, 0.5)",
                      background:
                        "linear-gradient(135deg, #154360 0%, #3fb89e 100%)",
                    },
                  }}
                >
                  Access My Dashboard
                </Button>
              </form>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="caption" color="text.secondary">
                  For demo: Use any name, phone number, and date
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Login;
