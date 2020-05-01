import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchLists } from '../Action';

const PagePoints = (props) => {

  const onPageChangeHandle = (event) => {
    event.preventDefault();
    props.onGetLists(event.target.text);
  }

  const pages = (count) => {
    let links = [];
    for (var i = 1; i <= count; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink href="#" onClick={onPageChangeHandle}>
            {i}
          </PaginationLink>
        </PaginationItem>
      )
    }
    return links;
  }

  return (
    <Pagination aria-label="Page navigation example">
      {pages(props.count)}
    </Pagination>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onGetLists: (page) => {
      dispatch(fetchLists(page));
    }
  };
}

export default connect(null, mapDispatchToProps) (PagePoints);
