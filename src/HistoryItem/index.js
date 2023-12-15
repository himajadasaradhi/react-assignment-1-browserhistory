import './index.css'

const HistoryItem = props => {
  const {HistoryList, onDeleteFunction} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = HistoryList

  const deleteHistory = () => {
    onDeleteFunction(id)
  }

  return (
    <li className="list-container">
      <div className="content-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button
        type="button"
        className="button"
        data-testId="delete"
        onClick={deleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
