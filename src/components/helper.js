import React from 'react'

export const formatArrayList = list => {
  return (
    <div className='detail-list'>
      {list.map(item => (
        <span key={item}>{item} /</span>
      ))}
    </div>
  )
}
export const formatObjectList = object => {
  return object.map((obj, index) => {
    const { name, type, damage } = obj
    return (
      <div key={index} className='detail-object-list'>
        <span>
          <strong className='label-light'>Name:</strong> {name}
        </span>
        <span>
          <strong className='label-light'>Type:</strong> {type}
        </span>
        <span>
          <strong className='label-light'>Damage:</strong> {damage}
        </span>
      </div>
    )
  })
}
