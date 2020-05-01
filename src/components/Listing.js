import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchLists } from '../Action';
import PagePoints from './PagePoints';

class Listing extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      documents: [],
      count: 0,
    }
  }

  componentDidMount(){
    this.fetchList().then((data) => {
      this.setState({documents: data});
    });

    this.fetchAll().then((data) => {
      this.setState({count: Math.ceil(data.length/6)});
    });

  }

  componentDidUpdate(prevProps){
    if (prevProps.time !== this.props.time) {
      this.setState({documents: this.props.lists.data});
    }
  }

  fetchList = () => {
    return axios.get('http://localhost:8000/api/files')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  fetchAll = () => {
    return axios.get('http://localhost:8000/api/allfiles')
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  onDeleteHandler = (id) => {
    const props = this.props;
    axios.delete('http://localhost:8000/api/file/'+id)
    .then(function (response) {
      props.onGetLists();
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return(
      <Container>
        <PagePoints count={this.state.count} />
        <main className="mainblock">
          <div className="row">
            {
              this.state.documents.map((doc) => {
                return(
                  <div className="col-md-4" key={doc.id}>
                    <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src="/thumb.svg" alt="Thumbnail" />
                      <div className="card-body">
                        <p className="card-text">{doc.name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => this.onDeleteHandler(doc.id)}>Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </main>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    time: state.time
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetLists: () => {
      dispatch(fetchLists());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Listing);
