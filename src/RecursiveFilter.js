import React, { useRef } from 'react'
import Table from '@mui/material/Table';
import { Typography } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const RecursiveFilter = ({ data, columns }) => {
  //console.log('data col: ',data,columns);
  var hasChildren = data && data.length;
  return (
    <React.Fragment>
      {
        hasChildren ? data.map((item, index) => (
          <Accordion key={index} >
            <AccordionSummary key={index} sx={{ flexDirection: 'row-reverse !important' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>  {item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <RecursiveFilter key={index} data={item.data} columns={columns} />
            </AccordionDetails>
          </Accordion>
        )) :
          <Accordion>

            <AccordionDetails>
              <Table >
                <TableHead>
                  <TableRow>

                    {(data && data.length > 0) ?
                      Object.keys(Object.values(data)[0]).map((ele, i) => {
                        return (
                          <TableCell  keys={i}><strong>{columns.find(c => c.name == ele).title}</strong></TableCell>
                          // <TableCell><strong>Full Name</strong></TableCell>
                        )
                      })
                      : ''
                    }

                  </TableRow>
                </TableHead>
                <TableBody>
                  { data && Object.values(data).map((ele,index) => {
                    return (

                      <TableRow key={index}>
                        {Object.values(ele).map((ite,index)=>{
                          return(
                          <TableCell key={index}>


                          { ite }

                        </TableCell>
                  )})}
                      </TableRow>

                )
                  })
                  }
              </TableBody>
            </Table>

          </AccordionDetails>
          </Accordion>
      }
    </React.Fragment >
  )
}