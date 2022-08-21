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

const FourthContent = () => {
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
              src="https://occ-0-4344-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
              alt="child_img"
            />
            <HeadingBox>
              <Heading>Create profiles for children.</Heading>
              <h2 style={{ fontSize: 27, fontWeight: 400 }}>
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </h2>
            </HeadingBox>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FourthContent;
