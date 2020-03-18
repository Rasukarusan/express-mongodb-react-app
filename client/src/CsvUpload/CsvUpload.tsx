import React from 'react';
import styled, { css } from 'styled-components'
import {useDropzone} from 'react-dropzone'
import { Button, Heading, Textarea, Icon } from 'evergreen-ui';

const Container = styled.div`
  color: black;
  background: #ffffff;
  width: 100vw;
  height:100vh;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

const DropZone = styled.div`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  text-align: center;
  font-size: 1.0em;
  height: 30vh;
  width: 50vw;
`;

interface AcceptFile extends File {
  readonly path: string
}

function UploadArea() {
  let uploadFiles: File[] = [];
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone()
  const files = acceptedFiles.map((file:File) => {
    uploadFiles.push(file);
    return (
      <li key={(file as AcceptFile).path}>
        {(file as AcceptFile).path} - {file.size} bytes
      </li>
    );
  });

  function handleClick() {
    upload(uploadFiles);
  }

  return (
    <section className="container">
      <DropZone {...getRootProps({className: 'dropzone'})}>
      <input type="file" name="dropzone" {...getInputProps()} />
        { isDragActive ? 
          <p>そのままここにファイルをドロップしてください</p> :
          <p>枠内をクリック<br/>またはファイルをドラッグ＆ドロップしてください</p>
        }
      </DropZone>
      <aside>
        <ul>{files}</ul>
      </aside>
      <Button primary onClick={handleClick}><Icon icon="cloud-upload" marginRight={16}/>アップロード</Button>
    </section>
  )
}

function upload(files: File[]) {
  if (files.length === 0) {
    console.log('Please Upload File');
    return ;
  }

  const formData = new FormData();
  files.map((file: File) => {
    return formData.append('file', file);
  });

  fetch('http://localhost:9000/orders', {method: 'POST', body: formData})
  .then(res => res.json())
  .catch(error => { console.log(error); })
  .then(res => {
    console.log(res);
  })
}

function CsvUpload(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <UploadArea />
    </Container>
  );
}

export default CsvUpload
