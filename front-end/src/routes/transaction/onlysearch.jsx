import React from 'react';
import { Container, Menu, Input, Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './style/header.css';

function onlysearch() {
  return (
    <>
          <div>
        <Menu>
          <Container>
            <Menu.Item>
              <Button icon labelPosition="left" onClick={() => window.history.back()}>
                <Icon name="arrow left" />
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Container className="search-container">
          <Input icon="search" placeholder="Search..." />
          <Button icon labelPosition="left">
            <Icon name="calendar" />
            Calendar
          </Button>
        </Container>
      </div>
    </>
  );
}

export default onlysearch;
