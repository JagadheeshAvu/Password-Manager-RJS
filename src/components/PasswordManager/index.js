import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    itemsList: [],
    isChecked: false,
    website: '',
    userName: '',
    password: '',
    searchInput: '',
  }

  onDelete = id => {
    const {itemsList, count} = this.state
    this.setState({
      itemsList: itemsList.filter(each => each.id !== id),
      count: count - 1,
    })
  }

  onAddDetails = event => {
    event.preventDefault()
    const {website, userName, password, count} = this.state

    const newUser = {
      id: v4,
      website,
      userName,
      password,
      count,
    }
    this.setState(prevState => ({
      itemsList: [...prevState.itemsList, newUser],
      website: '',
      userName: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  searchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  renderNoPasswordsView = () => (
    <div className="no-passwords-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="no-passwords-image"
      />

      <p>No Passwords</p>
    </div>
  )

  render() {
    const {
      website,
      userName,
      password,
      searchInput,
      itemsList,
      isChecked,
      count,
    } = this.state
    const searchResults = itemsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="header-container">
          <form className="password-container" onSubmit={this.onAddDetails}>
            <h1 className="heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-item"
                onChange={this.onChangeWebsite}
                value={website}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-item"
                onChange={this.onChangeUserName}
                value={userName}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="website"
                className="input-logo"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-item"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-logo"
          />
        </div>
        <div className="footer-container">
          <div className="inner-container">
            <h1 className="passwords-heading">Yours Passwords {count}</h1>
            <div className="input-elements">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
              <input
                type="text"
                className="input-item"
                placeholder="Search"
                onChange={this.searchInput}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-passwords">
            <input
              type="checkbox"
              className="checkbox"
              id="showPassword"
              checked={isChecked}
              onChange={this.onChecked}
            />
            <label htmlFor="showPassword" className="show-password">
              Show Passwords
            </label>
          </div>
          {count === 0 ? (
            this.renderNoPasswordsView()
          ) : (
            <ul className="list-items-container">
              {searchResults.map(each => (
                <PasswordItem
                  key={each.id}
                  itemDetails={each}
                  isChecked={isChecked}
                  onDelete={this.onDelete}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
