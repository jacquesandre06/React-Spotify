import { Form, Input, Segment } from 'semantic-ui-react';

const SearchBar = () => {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <Input
            icon="search"
            placeholder="Recherche par Artiste"
            iconPosition="left"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default SearchBar;
