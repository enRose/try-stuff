import React, { useEffect, useState } from 'react'
import { useTime } from '../hook/useTime'
import { logGif, Gifs } from '../util/logger'
import '../util/memeLogger.js'
import { fetchData } from './data'


export const DisplayChildren = (props) => {
  const { children } = props

  if (!children || children.length === 0) {
    return
  }

  return (<ul>
    {children?.map(child => (
      <li>
        {child.name}
        <DisplayChildren children={child.children} />
    </li>
    ))}
  </ul>)
}

export const BrowserHack = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData().then((d) => setData(d))
  }, [])

  return (
    <>
      {data.map(eventItem => <div
        id={eventItem.id}
        key={eventItem.id}>
        <div>
          {eventItem.name}
          <DisplayChildren children={eventItem.children} />
        </div>
      </div>
      )
      }
    </>
  )
}