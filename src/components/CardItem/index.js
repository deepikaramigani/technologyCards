// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`listContainer ${className}`}>
      <div>
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div className="img-container">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
