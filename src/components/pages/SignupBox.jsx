import { Button, Stack, TextField } from '@mui/material'
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SignupBox = () => {
  return (
    <>
    <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: "none" }}
            alignItems={{ xs: "center", sm: "center" }}
            pb={6}
          >
            <TextField
              id="fullWidth"
              fullWidth
              variant="outlined"
              placeholder="Email Address..."
              style={{ color: "white", backgroundColor: "white" }}
            />
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                width: 350,
                backgroundColor: "#e50914",
                textTransform: "none",
                fontSize: 22,
                borderRadius: 'none'
              }}
            >
              Get Started
            </Button>
          </Stack>
    </>
  )
}

export default SignupBox