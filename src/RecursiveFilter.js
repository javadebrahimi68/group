import React from 'react'
import Table from '@mui/material/Table';
import { Typography, IconButton, Collapse, Box } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



export const RecursiveFilter = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const { id } = data[0] ? data[0] : '';
  const { fullname } = data[0] ? data[0] : '';
  var hasChildren = data && data.length;


  return (

    <React.Fragment>
      {hasChildren ? data.map((item, index) => (
        <>

          <TableRow
           sx={{border:'0px solid !important'}}
           >

            <TableCell sx={{ paddingLeft: '100px', paddingTop: '0px', paddingRight: '0px' ,border:'0px solid !important'}} >



              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
              {item.name}
              <RecursiveFilter key={index} data={item.data} />
            </TableCell>



          </TableRow>

        </>
      )) :
        <TableRow>

          <Table >
            <TableHead>
              <TableRow>
                <TableCell><strong>Id</strong></TableCell>
                <TableCell><strong>Full Name</strong></TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>


                  {id}

                </TableCell>
                <TableCell>
                  {fullname}

                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

        </TableRow>
      }
    </React.Fragment>



  )
}