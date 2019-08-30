import React from 'react'

export const formatArrayList = list => {
  const lastItem = list.length - 1
  return (
    <div className='detail-list'>
      {list.map((item, index) => (
        <span key={`detail-list-${index}`}>
          {item}
          {lastItem !== index ? ' /' : ''}
        </span>
      ))}
    </div>
  )
}

export const formatObjectList = object => {
  return object.map((obj, index) => {
    const { name, type, damage } = obj
    return (
      <div key={`detail-object-list-${index}`} className='detail-object-list'>
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
