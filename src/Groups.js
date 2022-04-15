import React from 'react'
import { rawData } from './initilaData';
import { useEffect, useState } from 'react';
export default function Groups() {
    const [alldata, setAlldata] = useState(rawData);
    const output = [];
    let list = [];
    var filterKeys = [
        'country',
        'color',
        'city'


    ];

    const generate = () => {
        list = [];

        ///console.log(...data);
        const me = getData(alldata);
        console.log('me', me);
        console.log("output", output);
    }

    const getData = (data) => {
        //console.log('data',data);
        list = [];
        if (filterKeys.length <= 0) {
            filterKeys = [
                'country',
                'color',
                'city'
            ];
            return { ...data };
        }
        else {
            const currentFilter = filterKeys[0];
            filterKeys.shift();
            data.forEach(element => {
                list.push(element[currentFilter])
            });
            const uniqueList = [...new Set(list)];
            var filterBy = [{ name: '', data: '' }];
            var initialValue = [];
            const x = uniqueList.reduce(
                (acc, element, index) => {
                    const temp = data.filter(c => c[currentFilter] == element);
                    temp.forEach(el => {
                        delete el[currentFilter]
                    });
                    //console.log('==>',{ name: element, data: getData( temp) });
                    // if (index == 0) {
                    //console.log(acc);
                    return [...acc, { name: element, data: getData(temp) }];
                    // }
                    // return [...acc, { name: element, data: getData(temp) }];
                }, initialValue);
            return x;
        }
    }
    return (
        <div>
            <input type='button' value='Click Me!' onClick={generate} />
        </div>
    )
}
