import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        py: 6,
        px: 2,
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Container>
        {/* Icon with Title */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mb={3}
        >
          <InfoOutlined style={{ fontSize: 50, color: '#3f51b5' }} />
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ ml: 2, color: '#3f51b5' }}
          >
            About Us
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          align="center"
          sx={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.8 }}
        >
          At <strong>Paradise Hotel</strong>, we strive to provide our guests with an
          exceptional stay, featuring world-class amenities, stunning views, and unmatched
          hospitality. Whether you're here for a vacation or a business trip, we promise to
          make it memorable. Your comfort and satisfaction are our priorities, and we look
          forward to hosting you.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
