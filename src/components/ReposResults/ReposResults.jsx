import { Card } from 'semantic-ui-react';
import Repo from './Repo';

const ReposResults = () => {
  return (
    <Card.Group itemsPerRow={3}>
      <Repo />
    </Card.Group>
  );
};
export default ReposResults;
