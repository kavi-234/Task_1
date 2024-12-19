import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import hero from "./hero.png";
import wall from "./update.jpg"

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${wall})`, // Set the hero image as background
        backgroundSize: 'cover',  // Ensure the image covers the entire container
        backgroundPosition: 'center center', // Center the image
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start', // Align content to the top
        justifyContent: 'flex-start', // Align content to the left
        textAlign: 'left', // Align text to the left
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        padding: '5% 10%',  // Adjusted padding for better spacing
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))',
          zIndex: 1,
        }}
      ></div>

      {/* Text Content */}
      <Container
        style={{
          position: 'relative',
          zIndex: 2,
          flex: 1,
        }}
      >
        <Box
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.5)',
            maxWidth: '600px',
            marginBottom: '2rem', // Adjusted margin to separate the image
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: '2.5rem',
              fontWeight: 700,
              textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
            }}
          >
            Welcome to Paradise Hotel
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            style={{
              fontSize: '1.5rem',
              fontWeight: 300,
              marginBottom: '1.5rem',
              textShadow: '1px 1px 5px rgba(0, 0, 0, 0.8)',
            }}
          >
            Where luxury meets comfort.
          </Typography>
          <div>
            <Button
              variant="contained"
              size="large"
              style={{
                margin: '0 10px',
                backgroundColor: '#ff9800',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              Book Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              style={{
                margin: '0 10px',
                borderColor: '#ff9800',
                color: '#ff9800',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              Learn More
            </Button>
          </div>
        </Box>
      </Container>

      {/* Rotating Image */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2,
        }}
      >
        <img
          src={hero} // Replace with the correct path
          alt="Hero"
          style={{
            width: '80%',
            maxWidth: '400px',
            animation: 'rotate 10s infinite linear',
          }}
        />
      </div>

      {/* Keyframe Animation */}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
