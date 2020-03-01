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
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone()
  const files = acceptedFiles.map((file:File) => (
      <li key={(file as any).path}>
        {(file as any).path} - {file.size} bytes
      </li>
    ));

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
      <UploadButton />
    </section>
  )
}

function upload() {
  console.log("updalod start");
}

function UploadButton() {
  return (
    <Button primary onClick={upload}>実行</Button>
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
      <History />
    </Container>
  );
}

export default CsvUpload
