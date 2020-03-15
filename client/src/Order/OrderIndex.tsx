import React, { useState, useEffect }  from 'react';
import { 
  Pane,
  Heading,
  Table,
  Popover,
  Position,
  Menu,
  TextDropdownButton
} from 'evergreen-ui';
import axios from 'axios';
import { filter } from 'fuzzaldrin-plus'

interface IOrder {
  _id: string,
  name: string,
  age: number
}

function makeUpperFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

function List() {
  const [apiResponse, setApiResponse] = useState<IOrder[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dropDownValue, setDropDownValue] = useState<string>('age');

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
          <Table.TextCell>{ order.name }</Table.TextCell>
          <Table.TextCell isNumber>{ order[dropDownValue] }</Table.TextCell>
        </Table.Row>
      );
  }

  const renderValueHeaderCell = () => {
    return (
      <Table.TextHeaderCell>
        <Popover position={Position.BOTTOM_LEFT} content={({ close }) => (
          <Menu>
            <Menu.OptionsGroup
              title="Show"
              options={[
                { label: 'Age', value: 'age' },
                { label: 'Name', value: 'name' },
                { label: 'Id', value: '_id' },
              ]}
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
            {makeUpperFirstChar(dropDownValue)}
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
        </Table.Head>
        <Table.VirtualBody height={320}>
          { filterTable(apiResponse).map((order) => renderRow(order)) }
        </Table.VirtualBody>
      </Table>
    </div>
  );
}

function OrderIndex() {
  return (
    <Pane>
      <Heading is="h1" size={900}>Hello Order Index!!</Heading>
      <List />
    </Pane>
  );
}

export default OrderIndex;
