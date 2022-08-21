import { Box, Container, Stack, styled } from '@mui/material';
import React from 'react'
import LenguageButton from './LenguageButton';




const ListStyle = styled('li')`
padding: 5px;
`;

const TollFree = styled('ul')`
list-style: none;
font-size: 1.2em;
position: relative;
top: 73px;
left: 24px;
`;

const FootBtn = styled(Box)`
margin: -49px 6px 0px 60px;
`
const Footer = () => {
  return (
   <>
   <Box
        sx={{
          backgroundColor: "black",
          color: "#737373",
          borderTop: "8px solid #222",
          paddingBottom: 10
        }}
      >
        <Container fixed>
        <TollFree >
                    <li>Questions? Call 000-800-040-1843</li>
                </TollFree>
   <Stack
            direction='row'
            spacing={{ xs: 1, sm: 2, md: 12, lg: 12 }}
            alignItems="center"
            justifyContent="space-around"
            py={8}
          >
              
            <ul style={{listStyle: 'none'}}>
                
                <ListStyle>Faq</ListStyle>
                <ListStyle>Investor relation</ListStyle>
                <ListStyle>Privacy</ListStyle>
                <ListStyle>Speed Test</ListStyle>

            </ul>
            <ul style={{listStyle: 'none'}}>
                <ListStyle>Help Center</ListStyle>
                <ListStyle>Jobs</ListStyle>
                <ListStyle>Cookie Preference</ListStyle>
                <ListStyle>Legal Notice</ListStyle>
            </ul>
            <ul style={{listStyle: 'none'}}>
                <ListStyle>Account</ListStyle>
                <ListStyle>Way To Watch</ListStyle>
                <ListStyle>Corporate Information</ListStyle>
                <ListStyle>Only on Netflix</ListStyle>
            </ul>
            <ul style={{listStyle: 'none'}}>
                <ListStyle>Media Center</ListStyle>
                <ListStyle>Term of Use</ListStyle>
                <ListStyle>Contact us</ListStyle>
                
            </ul>
          </Stack>
          <FootBtn>
          <LenguageButton />
          
          </FootBtn>
          <ul style={{listStyle: 'none', marginLeft: 19}}>
                <ListStyle>Netflix India</ListStyle>
                
            </ul>
          </Container>
          </Box>
   </>
  )
}

export default Footer;