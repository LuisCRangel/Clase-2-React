import React from 'react'

const Card = ({objInfo, color}) => {
    return (
        <ul style={{backgroundColor: color}} className={`list`}>
            <h2>{objInfo.title}</h2>
            <li className='list__item'>{objInfo.list[0]}</li>
            <li className='list__item'>{objInfo.list[1]}</li>
            <li className='list__item'>{objInfo.list[2]}</li>
            <li className='list__item'>{objInfo.list[3]}</li>
        </ul>
    )
}

export default Card