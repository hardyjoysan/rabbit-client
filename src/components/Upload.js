import React, {useState} from 'react';
import {
  Form, FormGroup, Label, Input, Button, FormText, Alert
} from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchLists } from '../Action';

const Upload = (props) => {

  const [name, setName] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const onNameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const onFileChangeHandler = (event) => {
    setFile(event.target.files[0]);
  }

  const onSubmitFormHandle = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('fileupload', file);

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post('http://localhost:8000/api/upload-file', data, config)
      .then(res => {
        props.onGetLists();
        document.getElementsByName('upload-form')[0].reset();
      })
      .catch((error)=>{
        setError(true)
      });
  }

  return (
      <Form name="upload-form" className="uploadform">
        {error && <Alert color="danger">Please upload a valid document with size maximum 2MB</Alert>}
        <FormGroup>
          <Label>Document Name</Label>
          <Input type="text" name="name" placeholder="Enter Filename" onChange={onNameChangeHandler} />
        </FormGroup>
        <FormGroup>
          <Label>Upload</Label>
          <Input type="file" name="fileupload" onChange={onFileChangeHandler} />
          <FormText color="muted">
            Supported files are txt,doc,docx,pdf,png,jpeg,jpg,gif with maximum size 2MB
          </FormText>
        </FormGroup>
        <Button onClick={onSubmitFormHandle}>Submit</Button>
      </Form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onGetLists: () => {
      dispatch(fetchLists());
    }
  };
}

export default connect(null, mapDispatchToProps) (Upload);
