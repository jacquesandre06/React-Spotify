import { Card, Image } from 'semantic-ui-react';

const Repo = () => {
  return (
    <Card>
      <Image src="https://randomfox.ca/images/122.jpg" wrapped ui={false} />

      <Card.Content>
        <Card.Header>Nom du repository</Card.Header>

        <Card.Meta>Propriétaire du repository</Card.Meta>

        <Card.Description>Description</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default Repo;
