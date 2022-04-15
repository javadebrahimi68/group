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
    const filterKeysInitial = [...filterKeys];
    const generate = () => {
        list = [];

        ///console.log(...data);
        const me = getData(alldata,filterKeys[0]);
        console.log('me', me);
        // console.log("output", output);
    }
    //var filterIndex = 0;
    const getData = (data,filter) => {
        //console.log('data', data);
        list = [];
        var isLastChild = false;
        data.forEach((item) => {
            filterKeysInitial.forEach((key) => {
              isLastChild=  isLastChild||(item.hasOwnProperty(key));
            });
          //  console.log('isLastChild: ', isLastChild, '==item: ', item);
        });

        if (!isLastChild) {
            //filterIndex = 0;
            //console.log('isLastChild run', data);
            isLastChild = false;
            filterKeys=[...filterKeysInitial];
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
                        return [...acc, { name: element, data: getData(temp,filterKeys[(filterKeys.indexOf(filter))+1]) }];
                    }
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
