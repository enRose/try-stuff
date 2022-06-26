import { useState } from 'react'
import './popList.css'
import {PopListHint} from './hint'

const PopList = () => {
  const [hint, setHint] = useState(false)

  const bulbs = Array(6).fill(0).map((_, i) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    return <div data-avatar={`p${i}`} style={{ '--random-colour-var': `#${randomColor}` }}>{i}</div>
  })

  return (
    <div>
      <button key='hint-button' onClick={() => setHint(!hint)}>{hint ? 'Reset': 'Show hint'}</button>
      <p>Mouse over to pop the bubbles</p>
      {hint ? <PopListHint /> : bulbs}
    </div>
  )
}

export default PopList