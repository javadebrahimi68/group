import React from 'react'

import { Pagination, Paper, Table, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@mui/material';
export const NormalTable = ({ rows, pages, page, handleChange, columns, drag, columnRef }) => {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    {/* <TableHead>
                        <TableRow >
                            {columns.map((ele, index) => {
                                return (
                                <TableCell
                                    id={ele.name}
                                    ref={el => columnRef.current[ele.name] = el}
                                    draggable="true" onDragStart={(event) => drag(event)} >{[ele.title]}</TableCell>)
                            })}


                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {columns.map((ele,index) => {
                                    return (<TableCell key={index} >{row[ele.name]}</TableCell>)
                                })}


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination align='center' count={pages} page={page} color="primary" onChange={handleChange} />


            </TableContainer>
        </>
    )
}
