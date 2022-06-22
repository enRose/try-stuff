import React, { Suspense } from 'react'
import './App.css';
import { usePuzzle, puzzles } from './hook/usePuzzle';


const App = () => {
  const { goTo, remove, puzzle } = usePuzzle()
 
  const Puzzle = puzzle?.puzzle

  return (
    <div key='app' className="App">
      {puzzle ?
        <Suspense fallback={<div>Loading...</div>}>
          <button key='remove-button' onClick={remove}>Go back</button>
          <Puzzle />
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