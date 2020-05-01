import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';

import { Provider } from 'react-redux';
import Store from './Store';

import Header from './components/Header';
import Listing from './components/Listing';
import Search from './components/Search';
import Upload from './components/Upload';

function App() {
  return (
    <Provider store={Store}>
      <Header />
        <Container>
          <Row>
            <Col xs="6">
              <Upload />
            </Col>
            <Col xs="6">
              <Search />
            </Col>
          </Row>
          <Listing />
        </Container>

    </Provider>
  );
}

export default App;
