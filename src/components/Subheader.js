import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

/**
 * Design credit: https://flutter.dev/
 */

export default function ColorInversionMarketing() {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        flexGrow: 1,
        display: 'flex',
        height:'100px',
        p: { xs: '36px', md: '70px' },
        pt: { xs: '24px', md: '60px' },
        borderRadius: 'lg',
        overflow: 'hidden',
        '& button': { borderRadius: 'xl' },
      }}
    >
      <Box sx={{ zIndex: 1, position: 'relative' }}>
        <Typography level="h2">Get started</Typography>
        <Typography sx={{ mt: 0.5, mb: 2 }}>
          Instant access to the power of the Joy UI library.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
            maxWidth: 'max-content',
            '& > *': { flexGrow: 1, fontWeight: 'lg' },
          }}
        >
          <Button sx={{ minWidth: 120 }}>Install</Button>
          <Button
            variant="plain"
            endDecorator={<ArrowForwardIcon fontSize="md" />}
            sx={{
              '&:hover': { '--Button-gap': '0.625rem' },
              '& span': { transition: '0.15s' },
            }}
          >
            See the docs
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        alt=""
        src="https://storage.googleapis.com/cms-storage-bucket/72521e62275b24d3c37d.png"
      />
      <IconButton
        sx={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          borderRadius: '50%',
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
    </Sheet>
  );
}