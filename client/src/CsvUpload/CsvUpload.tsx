import React, { useCallback }  from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components'
import {useDropzone} from 'react-dropzone'

const Container = styled.div`
  // text-align: center;
  background: #ffffff;
  width: 100vw;
  height:100vh;
`;

const Title = styled.h1`
  font-size: 2.5em;
  // text-align: center;
  color: palevioletred;
  padding-top: 1em;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  font-size: 1.5em;
  width: 5vw;
  height: 2vw;

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
  font-size: 2.5em;
  height: 30vh;
  width: 50vw;
`;

function UploadArea() {
  const onDrop = useCallback((acceptedFiles : File[]) => {
    acceptedFiles.map(file => console.log(file));
  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone(onDrop)

  return (
    <DropZone {...getRootProps()}>
    <input type="text" name="color" {...getInputProps()} />
      {
        isDragActive ? <p>Drop the files here ...</p> :
          <p>Drag drop some files here, or click to select files</p>
      }
    </DropZone>
  )
}

function UploadButton() {
  return (
    <Button primary>実行</Button>
  );
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
      <UploadButton />
      <History />
    </Container>
  );
}

export default CsvUpload
