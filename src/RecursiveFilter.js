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
  var hasChildren = data && data.length;
  return (
    <React.Fragment>
      {
        hasChildren ? data.map((item, index) => (
          <Accordion >
            <AccordionSummary sx={{    flexDirection: 'row-reverse !important'}}
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

                    {(data.length != 0) ?
                      Object.keys(Object.values(data)[0]).map((ele, i) => {
                        return (
                          <TableCell keys={i}><strong>{columns.find(c => c.name == ele).title}</strong></TableCell>
                          // <TableCell><strong>Full Name</strong></TableCell>
                        )
                      })
                      : ''
                    }

                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.values(data).map((ele) => {
                    return (
                      <TableRow>

                        <TableCell>


                          {ele.id}

                        </TableCell>
                        <TableCell>
                          {ele.fullname}

                        </TableCell>
                      </TableRow>

                    )
                  })
                  }
                </TableBody>
              </Table>

            </AccordionDetails>
          </Accordion>
      }
    </React.Fragment>
  )
}