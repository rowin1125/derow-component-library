import React from 'react';
import { Container, Button, Card } from 'derow-react-library/general';

export default function Home() {
  return (
    <Container>
      <Button>Hello there</Button>
      <Card variant='primary'>
        <h1>Hi There</h1>
      </Card>
    </Container>
  );
}
