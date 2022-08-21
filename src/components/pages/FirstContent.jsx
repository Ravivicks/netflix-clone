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

const FirstContent = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          color: "white",
          borderTop: "8px solid #222",
          marginTop: "-106px",
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
              <Heading>Enjoy on your TV.</Heading>
              <h2 style={{ fontSize: 27, fontWeight: 400 }}>
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h2>
            </HeadingBox>
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="img"
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FirstContent;
