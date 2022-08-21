import {
  Box,
  Container,
  Divider,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import data from "../../data.json";
import SignupBox from "./SignupBox";

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "3em",
  textAlign: "center",
  fontWeight: 600,
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    fontSize: "2em",
  },
}));

const FifthContent = () => {
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
            direction="column"
            spacing={2}
            alignItems="center"
            py={8}
            sx={{ width: "70%", mx: "auto" }}
          >
            <Heading>Frequently Asked Questions</Heading>
            {data.map((item, index) => (
              <>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<AddIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ px: 4, backgroundColor: "#222", color: "white" }}
                  >
                    <Typography sx={{ fontSize: 25 }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    expandIcon={<ClearIcon />}
                    sx={{ px: 3, backgroundColor: "#222", color: "white" }}
                  >
                    <Divider sx={{ backgroundColor: "white" }} />
                    <Typography sx={{ py: 3, fontSize: "1.50rem" }}>
                      {item.answer1}
                    </Typography>
                    <Typography sx={{ py: 3, fontSize: "1.50rem" }}>
                      {item.answer2}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            ))}
            
            <Box sx={{ width: '90%', textAlign: 'center', pt: 6}}>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <SignupBox />
            </Box>
          </Stack>
        </Container>
        
      </Box>
    </>
  );
};

export default FifthContent;
