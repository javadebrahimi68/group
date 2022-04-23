import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function FilterKeyList({ items, ...rest }) {
    const handleDelete = (item) => {
     
       console.log(items);
    };

    return (
        <div {...rest}>
            <Stack direction="row" spacing={1}>

                {/* {items.map(item => {
                    return <Chip label={item} onDelete={()=>handleDelete(item)} />
                })} */}


            </Stack>
        </div>
    );
}