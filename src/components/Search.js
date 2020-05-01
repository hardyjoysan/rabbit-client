import React from 'react';
import {
  Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { fetchLists } from '../Action';

const Search = (props) => {

  const onSearchHandler = (event) => {
    props.onGetLists(1, event.target.value);
  }

  return (
    <Form name="search-form" className="searchform">
      <FormGroup>
        <Label>Search</Label>
        <Input type="text" name="search" placeholder="Search Documents Here" onChange={onSearchHandler} />
      </FormGroup>
    </Form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onGetLists: (page, keyword) => {
      dispatch(fetchLists(page, keyword));
    }
  };
}

export default connect(null, mapDispatchToProps) (Search);
