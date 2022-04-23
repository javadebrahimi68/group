import React from 'react';
import { useEffect, useState } from 'react';
import { RecursiveFilter } from './RecursiveFilter';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';

import Paper from '@mui/material/Paper';
export default function Groups({ filterKeys, rawdata, columnTitle }) {
    console.log('rawdata', rawdata);
    const [alldata, setAllData] = useState([])

    let list = [];


    const filterKeysInitial = [...filterKeys];
    const [groupData, setGroupData] = useState([]);
    const setMyData = () => {
        const myData = [];
        for (var i = 0; i < rawdata.length; i++) {
           alldata.push(rawdata[i]);
        };

        //setAllData([...myData]);
    }
    const generate = () => {
        setAllData([]);
        setMyData();
        console.log('alldata: ', alldata);
        list = [];
        // console.log('alldata, filterKeys[0]: ',alldata, filterKeys[0]);
        const dataConverted = getData([...alldata], filterKeys[0])
        console.log('dataConverted: ', dataConverted);
        setGroupData(dataConverted);


    }

    //var filterIndex = 0;
    const getData = (data, filter) => {

        console.log('data', data);
        list = [];
        var isLastChild = false;
        for (const item of data) { // You can use `let` instead of `const` if you like
            for (const key of filterKeysInitial) {
                isLastChild = isLastChild || (item.hasOwnProperty(key));
            }
        }

        if (!isLastChild) {
            //filterIndex = 0;
            //console.log('isLastChild run', data);
            isLastChild = false;
            filterKeys = [...filterKeysInitial];
            return { ...data };
        }

        //const currentFilter = filterKeys[0];
        // filterKeys.shift();
        //filterIndex++;
        for (const element of data)
            list.push(element[filter])

        const uniqueList = [...new Set(list)];
        var initialValue = [];
        const x = uniqueList.reduce(
            (acc, element, index) => {
                if (element) {
                    // console.log(element);
                    var tempArray = [];

                    const temp = [...data.filter(c => c[filter] == element)];
                    for (var i = 0; i < temp.length; i++) {
                        const curr = temp[i];
                        delete curr[filter];
                        tempArray[i] = curr;
                    }
                    // tempArray.forEach(el => {
                    //     delete el[filter]
                    // });
                    return [...acc, { name: element, data: getData([...tempArray], filterKeys[(filterKeys.indexOf(filter)) + 1]) }];
                }
            }, initialValue);
        return [...x];


    }
    useEffect(() => {

        generate();
        //console.log('groupData',rawdata);
    }, [filterKeys])

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
