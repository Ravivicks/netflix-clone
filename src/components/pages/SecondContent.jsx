import { Box, Container, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "3em",
  textAlign: "left",
  fontWeight: 600,
  lineHeight: "unset",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "2.5em",
  },
}));

const HeadingBox = styled(Box)(({ theme }) => ({
  width: "50%",
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

const SecondContent = () => {
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
            direction={{
              sm: "column-reverse",
              xs: "column-reverse",
              md: "row",
            }}
            spacing={{ xs: 1, sm: 2, md: 12, lg: 12 }}
            alignItems="center"
            justifyContent="space-evenly"
            py={8}
          >
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt="img2"
            />
            <HeadingBox>
              <Heading>Download your shows to watch offline.</Heading>
              <h2 style={{ fontSize: 27, fontWeight: 400 }}>
                Save your favourites easily and always have something to watch.
              </h2>
            </HeadingBox>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default SecondContent;
