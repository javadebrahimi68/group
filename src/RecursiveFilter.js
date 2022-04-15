import React from 'react'


export const RecursiveFilter = ({ data }) => {

const {id}=data[0]?data[0]:'';
const {fullname}=data[0]?data[0]:'';
    var hasChildren = data && data.length;
    //console.log(data);
    // data.forEach((item) => {
    //     hasChildren = hasChildren || (item.hasOwnProperty('data'));
    // });

    //console.log('items: ', data);
    return (
        <>


            {hasChildren ? data.map((item, index) => (
                <>
                    <div key={index} className='item'>

                        {item.name}
                        <RecursiveFilter key={index} data={item.data} />

                    </div>
                </>
            )) :

                <div className='item'>
                     {id}-{fullname}
                    {/* {data[0].id} */}
                    {/* {data[0].fullname} */}
                </div>

            }
        </>
    )
}