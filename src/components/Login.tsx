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

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
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
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please use format: XXX-XXX-XXXX";
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: 2,
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
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ mb: 4, textAlign: "center" }}>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Welcome to CHYP
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  California Homeless Youth Project
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Sign in to access your service dashboard
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
                  placeholder="Jordan Smith"
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
                  helperText={errors.phone || "Format: 408-555-0123"}
                  margin="normal"
                  variant="outlined"
                  placeholder="408-555-0123"
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
                    boxShadow: "0 4px 12px rgba(33, 150, 243, 0.4)",
                    "&:hover": {
                      boxShadow: "0 6px 16px rgba(33, 150, 243, 0.5)",
                    },
                  }}
                >
                  Access My Dashboard
                </Button>
              </form>

              <Box sx={{ mt: 3, textAlign: "center" }}>
                <Typography variant="caption" color="text.secondary">
                  For demo: Use any name, phone (XXX-XXX-XXXX format), and date
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
