import React, { useState } from 'react'
import { useTime } from '../hook/useTime'
import { logGif, Gifs } from '../util/logger'
import '../util/memeLogger.js'

export const BrowserHack = () => {
  const clock = useTime()

  const aussieTime = clock.toLocaleTimeString('en-AU', { timeStyle: 'medium', timeZone: 'Australia/Sydney'})

  const dateNTime = clock.toLocaleString()

  logGif(aussieTime, 'Aussie time', Gifs.LightningCat)

  console.meme(aussieTime, "Aussie time.", "Actual Advice Mallard", 400, 300)

  return (
    <>
      <p>You are in browser coding session!</p>

      <p>Aussie: {aussieTime}</p>

      <p>NZ: {dateNTime}</p>
    </>
  )
}