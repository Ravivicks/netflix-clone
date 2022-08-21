import { Box, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "3em",
  textAlign: "left",
  fontWeight: 600,
  lineHeight: "unset",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
}));

const ThirdContent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          borderTop: "8px solid #222",
        }}
      >
        <Container>
          <Stack
            direction={{ sm: "column", md: "row" }}
            spacing={{ xs: 1, sm: 2, md: 12, lg: 12 }}
            alignItems="center"
            justifyContent="space-evenly"
            py={8}
          >
            <HeadingBox>
              <Heading>Watch everywhere.</Heading>
              <h2 style={{ fontSize: 27, fontWeight: 400 }}>
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h2>
            </HeadingBox>
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
              alt="main_img"
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ThirdContent;
