import React from 'react'
import {rawData} from './initilaData';
export const Test = () => {
    // deep merge function
function merge(current, update) {
    Object.keys(update).forEach(function(key) {
      // if update[key] exist, and it's not a string or array,
      // we go in one level deeper
      if (current.hasOwnProperty(key) &&
        typeof current[key] === 'object' &&
        !(current[key] instanceof Array)) {
        merge(current[key], update[key]);
  
        // if update[key] doesn't exist in current, or it's a string
        // or array, then assign/overwrite current[key] to update[key]
      } else {
        current[key] = update[key];
      }
    });
    return current;
  }
  
  const tree = (rowsArray, keysArray) => {
    return rowsArray.reduce((acc, row) => {
      const groupBy = (row, keys, ) => {
        const [first, ...rest] = keys;
  
        if (!first) return [row];
  
        return {
          [row[first]]: groupBy(row, rest),
        }
      };
      acc = merge(groupBy(row, keysArray), acc);
      return acc;
    }, {});
  }
  
  const data1 = [{
    ID: 1,
    Main: "Financial",
    Sub: "Forecasts",
    Detail: "General"
  }, {
    ID: 2,
    Main: "Financial",
    Sub: "HR",
    Detail: "Headcount"
  }];
  
  const result1 = tree(rawData, ["country", "city", "color"]);
  console.log(result1);
  return (
    <div>test</div>
  )
}
