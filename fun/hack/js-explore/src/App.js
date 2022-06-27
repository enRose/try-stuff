import React, { useState, Suspense } from 'react'
import { usePuzzle, puzzles } from './hook/usePuzzle'
import { BrowserHack } from './interview/browserHack'
import './App.css'

const interviewMode = true

const App = () => {
  const { goTo, remove, puzzle } = usePuzzle()
  const [hint, setHint] = useState(false)

  const Puzzle = puzzle?.puzzle
  const Hint = puzzle?.hint

  return (
    interviewMode ?
      <div key='app-interview' className="App">
        <BrowserHack />
      </div> :

      <div key='app' className="App">
        {puzzle ?
          <Suspense fallback={<div>Loading...</div>}>
            <button key='remove-button' onClick={remove}>Go back</button>
            <button key='hint-button' onClick={() => setHint(!hint)}>{hint ? 'Reset' : 'Show hint'}</button>
            {hint ? <Hint /> : <Puzzle />}
          </Suspense> :
          Object.keys(puzzles).map(key =>
            <div>
              <button id={key}
                onClick={e => goTo(e.currentTarget.id)}>{puzzles[key].name}
              </button>
            </div>
          )
        }
      </div>
  )
}

export default App