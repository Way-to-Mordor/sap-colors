import React from 'react';

import Table from '../../../components/Table';

const HEROES = [
  {
    name: 'Spider man',
    age: 18,
    power: 'spider',
  }, {
    name: 'Batman',
    age: 35,
    power: 'rich',
  },
];

const ExampleTable = () => (
  <Table>
    <Table.Head>
      <Table.Row index={0}>
        <Table.Head.Cell>
          Name
        </Table.Head.Cell>
        <Table.Head.Cell>
          Age
        </Table.Head.Cell>
        <Table.Head.Cell>
          Power
        </Table.Head.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {HEROES.map(
        (hero, index) => (
          <Table.Row key={index} index={index}>
            <Table.Cell index={0}>
              {hero.name}
            </Table.Cell>
            <Table.Cell index={1}>
              {hero.age}
            </Table.Cell>
            <Table.Cell index={2}>
              {hero.power}
            </Table.Cell>
          </Table.Row>
        ),
      )}
    </Table.Body>
  </Table>
);

export default ExampleTable;
