import React, { useState } from 'react'
import { useTime } from '../../hook/useTime'
import { logGif, Gifs } from '../../util/logger'
import '../../util/memeLogger.js'

export const JsHack = () => {
  const clock = useTime()

  const aussieTime = clock.toLocaleTimeString('en-AU', { timeStyle: 'medium', timeZone: 'Australia/Sydney'})

  const dateNTime = clock.toLocaleString()

  logGif(aussieTime, 'Aussie time', Gifs.LightningCat)

  //console.meme(aussieTime, "Aussie time.", "http://i.imgur.com/vu4zTYT.jpg", 400, 300)

  return (
    <>
    </>
  )
}