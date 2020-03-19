import React, { useState, useEffect }  from 'react';
import { Table, Popover, Position, Menu, TextDropdownButton } from 'evergreen-ui';
import axios from 'axios';
import { filter } from 'fuzzaldrin-plus'
import styled from 'styled-components'

const Container = styled.div`
  color: black;
  width: 85vw;
  height:100vh;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;

interface IOrder {
  _id:           string,
  mall:          string,
  orderNumber:   string,
  buyerPostCode: string,
  buyerName:     string,
  buyerAddress:  string,
  total:         number,
  created_at:     string,
  updated_at:     string,
}

const dropDownOptions = [
  { label: 'Id',             value: '_id' },
  { label: 'モール',         value: 'mall' },
  { label: '受注番号',       value: 'orderNumber' },
  { label: '購入者郵便番号', value: 'buyerPostCode' },
  { label: '購入者名',       value: 'buyerName' },
  { label: '購入者住所',     value: 'buyerAddress' },
  { label: '総合計',         value: 'total' },
  { label: '受注日',         value: 'created_at' },
  { label: '伝票更新日',     value: 'updated_at' },
];

function List(props: IListProps ) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropDownValue, setDropDownValue] = useState<string>('orderNumber');

  const filterTable = (orders) : IOrder[] =>  {
    const query = searchQuery.trim();
    if (query.length === 0) return orders;
    return orders.filter(order => {
      const result = filter([order.mall], query);
      return result.length === 1;
    });
  }

  const renderRow = (order: IOrder) => {
      return (
        <Table.Row key={order._id} isSelectable onSelect={() => props.onSelectRow(order)} >
          <Table.TextCell>{ order.mall }</Table.TextCell>
          <Table.TextCell isNumber>{ order[dropDownValue] }</Table.TextCell>
          <Table.TextCell>{ order.created_at }</Table.TextCell>
        </Table.Row>
      );
  }

  const renderValueHeaderCell = () => {
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
        <Table.VirtualBody height={300}>
          { filterTable(props.orders).map((order) => renderRow(order)) }
        </Table.VirtualBody>
      </Table>
    </div>
  );
}

function OrderDetail(props: IOrderDetailProps) {
  return (
    <div>
      <Table>
        <Table.Head>
          {dropDownOptions.map(option => <Table.TextHeaderCell>{option.label}</Table.TextHeaderCell> )}
        </Table.Head>
        <Table.Body>
          <Table.Row>
            {Object.values(props.selectedOrder).map(value => {return <Table.EditableCell>{value}</Table.EditableCell>})}
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

interface IListProps {
  orders: IOrder[],
  onSelectRow: any,
}

interface IOrderDetailProps {
  selectedOrder: IOrder,
}

function OrderIndex(props) {
  const [apiResponse, setApiResponse] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder>({} as IOrder);
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

  const showOrderDetail = (selectedOrder: IOrder) => {
    if(!selectedOrder._id) return ;
    return (
      <div>
        <Title>伝票詳細</Title>
        <OrderDetail selectedOrder={selectedOrder}/>
      </div>
    );
  }

  return (
    <Container>
      <Title>{props.title}</Title>
      <List orders={apiResponse} onSelectRow={(order: IOrder) => setSelectedOrder(order) }/>
      {showOrderDetail(selectedOrder)}
    </Container>
  );
}

export default OrderIndex;
