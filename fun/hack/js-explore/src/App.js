import React, { Suspense, useState, lazy } from 'react'
import './App.css';

const puzzles = {
  'pop-list': lazy(() => import('./popList'))
}

const App = () => {
  const [puzzleToRender, setPuzzleToRender] = useState()

  const goTo = (event) => {
    setPuzzleToRender(puzzles[event.currentTarget.id])
  }

  const Puzzle = puzzleToRender

  return (
    <div className="App">
      {puzzleToRender ?
        <Suspense fallback={<div>Loading...</div>}>
          <Puzzle />
        </Suspense> :
        <button id={`pop-list`} onClick={e => goTo(e)}>Pop list</button>
      }
    </div>
  )
}

export default App