import React from 'react'


export const RecursiveFilter = (props) => {
   const { name }=props;
   const {items}=props;
    const hasChildren = items && items.length
// console.log('items: ',items);
    return (
        <>
         

            {hasChildren ? items.map((item) => (
                <>
                <div className='item'>
                
                    <h6>{name}</h6>
                    <RecursiveFilter key={item.name} {...item} />
                   
                    </div>
                </>
            )):
           <div className='item'>
             {props.id} - {props.full}
           </div> 
            }
        </>
    )
}