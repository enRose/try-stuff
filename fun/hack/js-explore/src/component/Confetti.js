import React, { useState } from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default () => {
  const [stop, setStop] = useState()
  const { width, height } = useWindowSize()

  setTimeout(() => {
    setStop(true)
  }, 7000)

  return (
    <>
      {
        stop ? <></> :
          <Confetti
            width={width}
            height={height}
          />
      }
    </>
  )
}