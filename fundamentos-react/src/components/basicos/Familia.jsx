import React from 'react';
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Leonardo" sobrenome={props.sobrenome}/>
                

            <FamiliaMembro nome="Maria" {...props}/>
              
        </div>
    )
}