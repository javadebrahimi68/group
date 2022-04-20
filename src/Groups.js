import React from 'react'
import { useEffect, useState } from 'react';
import { RecursiveFilter } from './RecursiveFilter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
export default function Groups({ filterKeys, rawdata, columnTitle }) {
    const [alldata, setAlldata] = useState([...rawdata]);
    const output = [];
    let list = [];


    const filterKeysInitial = [...filterKeys];
    const [groupData, setGroupData] = useState([]);
    const generate = () => {
        list = [];
console.log('alldata, filterKeys[0]: ' ,alldata, filterKeys[0])
        setGroupData(getData(alldata, filterKeys[0]));


    }
    //var filterIndex = 0;
    const getData = (data, filter) => {
        //console.log('data', data);
        list = [];
        var isLastChild = false;
        data.forEach((item) => {
            filterKeysInitial.forEach((key) => {
                isLastChild = isLastChild || (item.hasOwnProperty(key));
            });
            //  console.log('isLastChild: ', isLastChild, '==item: ', item);
        });

        if (!isLastChild) {
            //filterIndex = 0;
            //console.log('isLastChild run', data);
            isLastChild = false;
            filterKeys = [...filterKeysInitial];
            return { ...data };
        }
        else {
            //const currentFilter = filterKeys[0];
            // filterKeys.shift();
            //filterIndex++;
            data.forEach(element => {
                list.push(element[filter])
            });


            const uniqueList = [...new Set(list)];


            var initialValue = [];
            const x = uniqueList.reduce(
                (acc, element, index) => {
                    if (element) {
                        // console.log(element);
                        const temp = data.filter(c => c[filter] == element);
                        temp.forEach(el => {
                            delete el[filter]
                        });
                        return [...acc, { name: element, data: getData(temp, filterKeys[(filterKeys.indexOf(filter)) + 1]) }];
                    }
                }, initialValue);
            return x;
        }

    }
    useEffect(() => {
      
        generate();
        //console.log('groupData',rawdata);
    }, [])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">

                    <TableBody>
                        <RecursiveFilter data={groupData} columns={columnTitle} />
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
