import React from 'react';
import { Button, Card, Container } from '../../dist/general';

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
