import './index.css'

const PasswordItem = props => {
  const {itemDetails, onDelete, isChecked} = props
  const {id, website, userName, password} = itemDetails
  const initial = website[0].toUpperCase()

  const onClickDelete = () => {
    onDelete(id)
  }
  const passwordItem = isChecked ? (
    <p className="password">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="star-img"
    />
  )
  return (
    <li className="list-item-container">
      <div className="initial-letter">{initial}</div>
      <div className="list-items">
        <p className="website-name">{website}</p>
        <p className="user-name">{userName}</p>
        {passwordItem}
      </div>
      <div className="button-container">
        <button type="button" className="delete-button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
