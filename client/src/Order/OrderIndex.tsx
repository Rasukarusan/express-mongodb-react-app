import React, { useState, useEffect }  from 'react';
import { Table, Popover, Position, Menu, TextDropdownButton } from 'evergreen-ui';
import axios from 'axios';
import { filter } from 'fuzzaldrin-plus'
import styled from 'styled-components'

const Container = styled.div`
  color: black;
  width: 100vw;
  height:100vh;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

interface IOrder {
  _id:           string,
  orderNumber:   string,
  buyerPostCode: string,
  buyerName:     string,
  buyerAddress:  string,
  total:         number,
  created_at:     string,
  updated_at:     string,
}

function List() {
  const [apiResponse, setApiResponse] = useState<IOrder[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropDownValue, setDropDownValue] = useState<string>('_id');

  const getOrders = () => {
    axios.get<IOrder[]>('http://localhost:9000/orders')
      .then(res => {
        setApiResponse(res.data);
      })
      .catch(err => err);
  }

  useEffect(() => {
    getOrders();
  }, []);

  const filterTable = (orders) : IOrder[] =>  {
    const query = searchQuery.trim();
    if (query.length === 0) return orders;
    return orders.filter(order => {
      const result = filter([order.name], query);
      return result.length === 1;
    });
  }

  const renderRow = (order: IOrder) => {
      return (
        <Table.Row key={order._id}>
          <Table.TextCell>{ order.orderNumber }</Table.TextCell>
          <Table.TextCell isNumber>{ order[dropDownValue] }</Table.TextCell>
          <Table.TextCell>{ order.created_at }</Table.TextCell>
        </Table.Row>
      );
  }


  const renderValueHeaderCell = () => {

    const dropDownOptions = [
      { label: 'Id',             value: '_id' },
      { label: '購入者郵便番号', value: 'buyerPostCode' },
      { label: '購入者名',       value: 'buyerName' },
      { label: '購入者住所',     value: 'buyerAddress' },
      { label: '総合計',         value: 'total' },
      { label: '伝票更新日',     value: 'updated_at' },
    ];

    return (
      <Table.TextHeaderCell>
        <Popover position={Position.BOTTOM_LEFT} content={({ close }) => (
          <Menu>
            <Menu.OptionsGroup
              options={ dropDownOptions }
              selected={ dropDownValue }
              onChange={value => {
                setDropDownValue(value);
                close()
              }}
            />
          </Menu>
        )}
        >
          <TextDropdownButton icon={ 'caret-down' } > 
            { dropDownOptions.filter((option) => option.value === dropDownValue)[0]['label'] }
          </TextDropdownButton>
        </Popover>
      </Table.TextHeaderCell>
    )
  }

  return(
    <div>
      <Table>
        <Table.Head>
          <Table.SearchHeaderCell onChange={ value => setSearchQuery(value) } value={ searchQuery } />
          { renderValueHeaderCell() }
          <Table.TextHeaderCell>受注日</Table.TextHeaderCell>
        </Table.Head>
        <Table.VirtualBody height={500}>
          { filterTable(apiResponse).map((order) => renderRow(order)) }
        </Table.VirtualBody>
      </Table>
    </div>
  );
}

function OrderIndex(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <List />
    </Container>
  );
}

export default OrderIndex;
