import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function TypographyBasics() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
      <Typography level="h1">Bethany Hernandez</Typography>
      <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
        Massage Therapist / Personal Trainer
      </Typography>
      <Typography>
        TO BE ANNOUCED
        
      </Typography>
    </Card>
  );
}