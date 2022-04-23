import logo from './logo.svg';
import './App.css';
import Groups from './Groups';
import { useEffect, useRef, useState } from 'react';
import { initialData } from './initilaData';

import { RecursiveFilter } from './RecursiveFilter';
import { NormalTable } from './NormalTable';
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { NearbyError } from '@mui/icons-material';
import FilterKeyList from './FilterKeyList';

function App() {
  const [data, setData] = useState(initialData);
  const pages = initialData.length / 10;
  const [rows, setRows] = useState(initialData.filter(c => c.id >= 1 && c.id <= 10));
  const [grouping, setGrouping] = useState(false);
  const [page, setPage] = useState(1);
  const [filterKeys, setFilterKeys] = useState(
    [
      // 'gender',
      // 'country',
      // 'color'
    ]);



  const columnTitle = [
    { name: 'country', title: 'Country' },
    { name: 'color', title: 'Color' },
    { name: 'email', title: 'Email' },
    { name: 'id', title: 'Id' },
    { name: 'fullname', title: 'Full Name' },
    { name: 'gender', title: 'Gender' },
  ];
  const columnRef = useRef([]);
  columnRef.current.slice(0, columnTitle.length);
  const handleChange = (event, value) => {
    setPage(value);
    const d = initialData.filter(c =>
      c.id > ((value - 1) * 10)
      && c.id <= (value * 10)
    );

    setRows(d);
  };



  function allowDrop(ev) {
    ev.preventDefault();
  }
  const [selectedItem, setSelectedItem] = useState();
  function drag(ev) {
    //setGrouping(false);
    //ev.dataTransfer.setData("text", ev.target.id);
    setSelectedItem(ev.target.id);
    setFilterKeys([...filterKeys, ev.target.id]);
    console.log([...filterKeys, ev.target.id]);
    setGrouping(true);
  }

  function drop(ev) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");

    //console.log('data',data);
    // console.log('event ref: ', columnRef.current[selectedItems]);
    ev.target.appendChild(columnRef.current[selectedItem]);
  }
  const groupComponent = () => {
    return (<Groups filterKeys={filterKeys} columnTitle={[...columnTitle]} rawdata={[...initialData]} />);
  }
  useEffect(() => {
    setData([...initialData]);

  }, [filterKeys]);

  return (
    <div>

      <FilterKeyList items={filterKeys} id="div1" onDrop={(event) => drop(event)} onDragOver={(event) => allowDrop(event)} />
      {/* <Typography variant='h1'  draggable="true" ondragstart={(event)=>drag(event)}>TEst Drag</Typography> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              {columnTitle.map((ele, index) => {
                return (
                  <TableCell key={index}
                    id={ele.name}
                    ref={el => columnRef.current[ele.name] = el}
                    draggable="true" onDragStart={(event) => drag(event)} ><strong>{[ele.title]}</strong></TableCell>)
              })}


            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      {grouping
        ? <Groups filterKeys={filterKeys} columnTitle={[...columnTitle]} rawdata={JSON.parse(JSON.stringify(data))} />
        : <NormalTable rows={[...rows]} pages={pages} page={page}
          // columnRef={columnRef}
          drag={drag}
          handleChange={handleChange}

          columns={[...columnTitle]} />
      }
    </div>
  );
}

export default App;
