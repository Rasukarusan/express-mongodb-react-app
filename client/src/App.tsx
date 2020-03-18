import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './SideBar';
import Footer from './Footer';
import CsvUpload from './CsvUpload/CsvUpload';
import OrderIndex from './Order/OrderIndex';
import styled from 'styled-components'

const Container = styled.div`
  margin-left: 160px; /* Same as the width of the sidenav */
`
function App() {
  return (
    <Container>
      <Router>
      <SideBar />
        <Route path='/CsvUpload' render={() => <CsvUpload title="受注一括登録" />} />
        <Route path='/OrderIndex' render={() => <OrderIndex title="受注伝票一覧" />} />
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
