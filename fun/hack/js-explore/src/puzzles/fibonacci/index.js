import React, { lazy, useState } from 'react'

const gen = (len) => {
  console.log('fibonacci')

  const fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

  return fibonacciArray
}

const Fibonacci = () => {
  const [len, setLen] = useState()
  const [goCrazy, setGoCrazy] = useState()
  const Confettila = goCrazy

  return (
    <div>
      {goCrazy ? <Confettila start={true}/> : <></>}

      <p>Given a number, we print a Fibonacci sequence of that number </p>

      <label for="fibonacciLength">Length:</label>
      <input onChange={e => setLen(e.currentTarget.value)} type="number" id="fibonacciLength" name="fibonacciLength" />
      <button onClick={() => {
        const result = gen(len)
        setGoCrazy(isFibonacci(result) ? lazy(() => import('../../component/Confetti')) : null)
      }}>Print</button>
    </div>
  )
}

const isFibonacci = (fibonacciArray) => {
  if (fibonacciArray.length <= 2) {
    return false
  }

  return fibonacciArray.every((f, index) =>
    index >= fibonacciArray.length - 2 || f + fibonacciArray[index + 1] === fibonacciArray[index + 2]
  )
}

// test('renders learn react link', () => {
//   const f = gen(10)

//   const result = isFibonacci(f)

//   expect(result).toBeTruthy()
// })

export default Fibonacci