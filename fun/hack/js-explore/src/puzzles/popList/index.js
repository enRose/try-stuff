import './popList.css'

const PopList = () => {

  const bulbs = Array(6).fill(0).map((_, i) => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    return <li data-avatar={`p${i}`} style={{'--random-colour-var': `#${randomColor}`}}>{i}</li>

  })

  return (
    <div>
      <ul id={`pop-list-${Math.random()}`}>
        {bulbs}
      </ul>
    </div>
  )
}

export default PopList