import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LenguageButton from "./LenguageButton";
import SignupBox from "./SignupBox";
import { Link } from 'react-router-dom';

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 60,
  textAlign: "center",
  fontWeight: 600,
  lineHeight: "unset",
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
  },
}));

const Wrapper = styled(Stack)(({ theme }) => ({
  width: "70%",
  margin: "9% auto",
  color: "white",
  textAlign: "center",
  paddingBottom: '100px',
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "15% auto",
  },
}));

const BgTop = styled(Box)`
background-image: linear-gradient(
  to top,
  rgba(0, 0, 0, 0) 1%,
  rgba(0, 0, 0, 0) 6%,
  rgba(0, 0, 0, 0.85) 80%
),url("https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/8db04df8-caaf-4f19-8e51-9309664068b2/IN-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg");
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

const Header = () => {
  return (
    <>
    <BgTop>
      <Grid container direction="row" justifyContent="space-between" p={4}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="logo"
          width="13%"
        />
        <Box sx={{ display: 'flex'}}>
          <LenguageButton />
          <Button
            variant="contained"
            size="samll"
            style={{ backgroundColor: "#e50914", textTransform: "none", height: 38 }}
          >
            <Link to='/login'> Sign In </Link>
          </Button>
        </Box>
      </Grid>
      <Container fixed>
        <Wrapper>
          <Heading>Unlimited movies, TV shows and more.</Heading>
          <h2 style={{ fontSize: 30, fontWeight: 400 }}>
            Watch anywhere. Cancel anytime.
          </h2>
          <h5 style={{ fontSize: 20, fontWeight: 400, marginTop: "auto" }}>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h5>
          <SignupBox />
        </Wrapper>
      </Container>
      </BgTop>
    </>
  );
};

export default Header;
