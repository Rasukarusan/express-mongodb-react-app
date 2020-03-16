import React from 'react';
import styled, { css } from 'styled-components'
import {useDropzone} from 'react-dropzone'

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

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 1.0em;

  &:disabled {
    background: gray;
    border: none;
  }
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const DropZone = styled.div`
  background: white;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
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
        <h4>Files</h4>
        <ul>{files}</ul>
      </aside>
      <Button primary onClick={handleClick}>実行</Button>
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

function History() {
  return (
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>内容</th>
          <th>結果</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2020/02/20</td>
          <td>csvアップロード</td>
          <td>成功</td>
        </tr>
        <tr>
          <td>2020/02/21</td>
          <td>Not Found File</td>
          <td>失敗</td>
        </tr>
      </tbody>
    </table>
  );
}

function CsvUpload() {
  return (
    <Container>
      <Title>CSVアップロード</Title>
      <UploadArea />
      <History />
    </Container>
  );
}

export default CsvUpload
