import React from 'react'
import './Button.css'

export default props => {
    //classes que podem ser usadas
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}> 
            {props.label} 
        </button>
    )
}
