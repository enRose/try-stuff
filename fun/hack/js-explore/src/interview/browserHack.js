import React, { useState } from 'react'
import { useTime } from '../hook/useTime'

export const BrowserHack = () => {
  const clock = useTime()

  const aussieTime = clock.toLocaleTimeString('en-AU', { timeStyle: 'medium', timeZone: 'Australia/Sydney'})

  const dateNTime = clock.toLocaleString()

  return (
    <>
      <p>Aussie: {aussieTime}</p>

      <p>Kiwi: {dateNTime}</p>
    </>
  )
}