// AccommodationCard.tsx
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import styled from 'styled-components';

interface CardProps {
  image: string;
}

export const AccommodationCard = ({ image }: CardProps) => {
  return (
    <Container>
      <Card sx={{ width: 346, height: 628, borderRadius: '8px 0px 0px 0px' }}>
        <CardMedia component="img" image={image} alt="Accommodation" sx={{ height: '100%' }} />
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
