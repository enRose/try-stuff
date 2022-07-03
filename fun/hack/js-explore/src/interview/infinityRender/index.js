import React, { useEffect, useState } from 'react'
import { fetchData } from './data'
import './infinity.css'

export const DisplayChildren = (props) => {
  const { children } = props
  const [clickCount, setClickCount] = useState({})

  const rightArrow = '▶' //'&#&#9654;'
  const downArrow = '▼'//'&#&#9660;'

  if (!children || children.length === 0) {
    return
  }

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) return

    const elmId = e.currentTarget.id

    clickCount[elmId] = clickCount[elmId] ? clickCount[elmId] + 1 : 1

    setClickCount({ ...clickCount })
  }

  const WhichArrow = (props) =>
    shouldExpand(props.clickCount) ? downArrow : rightArrow

  const shouldExpand = (clickCount) =>
    !clickCount || clickCount % 2 === 0 ? false : true

  return (

    <div className='left-space'>
      {children?.map(child => (
        <div key={`${child.id}-${child.name}`} id={`${child.id}-${child.name}`}
          onClick={handleClick}>

          <WhichArrow clickCount={clickCount[`${child.id}-${child.name}`]} />
          <span className='name-space'>{child.name}</span>
          {shouldExpand(clickCount[`${child.id}-${child.name}`]) ?
            <DisplayChildren children={child.children} /> : null}
        </div>
      ))}
    </div>)
}

export const InfinityRender = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((d) => setData(d))
  }, [])

  return (
    <div className='container'>
      {data.map(eventItem =>
        <div
          className='top-level-space'
          id={eventItem.id}
          key={eventItem.id}>
          <div>
            • <span className='name-space'>{eventItem.name}</span>
            <DisplayChildren children={eventItem.children} />
          </div>
        </div>
      )}
    </div>
  )
}