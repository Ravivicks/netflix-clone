import React from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: 40,
  textAlign: "left",
  fontWeight: 600,
  lineHeight: "unset",
  paddingBottom: 30,
  paddingTop: 30,
  [theme.breakpoints.down("md")]: {
    fontSize: 30,
  },
}));

const Wrapper = styled(Stack)(({ theme }) => ({
  width: "43%",
  margin: "2% auto",
  color: "white",

  paddingBottom: "50px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "15% auto",
  },
}));

const CardBlack = styled(Card)`
background-color: rgba(0,0,0,.75);
    color: white;
}
`;
const Text = styled(TextField)`
  background-color: rgb(68 68 68);
  width: 100%;
  border-radius: 5px;
  margin: 10px;
`;

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(8, "Must be minimum 8 characters or more")
        .required("Please enter a valid email address or phone number."),
      password: Yup.string()
        .min(4, "Must be minimum 4 characters or more")
        .required("Your password must contain between 4 and 60 characters."),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm({ values: '' });
    },
  });
  return (
    <>
      <Grid container direction="row" justifyContent="space-between" p={4}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="logo"
          width="13%"
        />
      </Grid>
      <Container fixed>
        <Wrapper>
          <CardBlack>
            <form onSubmit={formik.handleSubmit}>
              <CardContent style={{ width: "75%", margin: "0px auto" }}>
                <Heading>Sign In</Heading>
                <Text
                  id="outlined-basic"
                  label="Email or  phone number"
                  InputLabelProps={{
                    style: { color: "#8c8c8c" },
                  }}
                  variant="filled"
                  name="username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <Typography ml="16px" color="#e87c03" fontSize="13px">
                    {formik.errors.username}
                  </Typography>
                ) : null}
                <Text
                  id="outlined-basic"
                  label="Password"
                  InputLabelProps={{
                    style: { color: "#8c8c8c" },
                  }}
                  variant="filled"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <Typography ml="16px" color="#e87c03" fontSize="13px">
                    {formik.errors.password}
                  </Typography>
                ) : null}
                <Button
                  fullWidth
                  sx={{
                    m: "10px",
                    mt: 5,
                    p: 2,
                    textTransform: "none",
                    backgroundColor: "#e50914",
                    fontWeight: 700,
                    "&:hover": {
                      backgroundColor: "#e50914",
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                  type="submit"
                  size="large"
                  variant="contained"
                >
                  Sign in
                </Button>
                <Grid container ml="10px" width="100%">
                  <Grid item xs={8}>
                    <FormGroup style={{ color: "rgb(110 104 104)" }}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            defaultChecked
                            style={{ color: "rgb(110 104 104)" }}
                          />
                        }
                        label="Remember Me"
                      />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography
                      sx={{ float: "right" }}
                      mt="8px"
                      color="rgb(110 104 104)"
                    >
                      Need help?
                    </Typography>
                  </Grid>
                </Grid>
                <Typography color="rgb(110 104 104)" mt="20%" ml="10px">
                  New to Netflix? <Link to="/">Sign up now.</Link>
                </Typography>
                <Typography
                  color="rgb(110 104 104)"
                  ml="10px"
                  fontSize="13px"
                  mt="8px"
                  mb="20%"
                >
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot. Learn more.
                </Typography>
              </CardContent>
            </form>
          </CardBlack>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
