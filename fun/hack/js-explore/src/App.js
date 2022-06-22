import React, { Suspense, useState, lazy } from 'react'
import './App.css';

const puzzles = {
  'pop-list': { name: 'Pop List', puzzle: lazy(() => import('./popList')) },
  'fibonacci': { name: 'Fibonacci', puzzle: lazy(() => import('./fibonacci')) },
}

const App = () => {
  const [puzzleToRender, setPuzzleToRender] = useState()

  const goTo = (event) => {
    setPuzzleToRender(puzzles[event.currentTarget.id])
  }

  const Puzzle = puzzleToRender?.puzzle

  return (
    <div className="App">
      {puzzleToRender ?
        <Suspense fallback={<div>Loading...</div>}>
          <button onClick={() => setPuzzleToRender('')}>Go back</button>
          <Puzzle />
        </Suspense> :
        Object.keys(puzzles).map(key =>
          <div>
            <button id={key} onClick={e => goTo(e)}>{puzzles[key].name}</button>
          </div>
        )
      }
    </div>
  )
}

export default App