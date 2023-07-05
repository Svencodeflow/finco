import React from 'react';
import { Container, Input, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style/transaction.css';



function onlysearch() {
  return (
    <>
          <div>
          <Link to="/">
              <img src={home} alt="home" />
          </Link>
          <Link to="/addtransaction">
            <img src={alltransact} alt="alltransact" />
          </Link>

        <Container className="search-container">
          <Input icon="search" placeholder="Search..." />
          <Button icon labelPosition="left">
            <Icon name="calendar" />
          </Button>
        </Container>
      </div>
    </>
  );
}

export default onlysearch;
