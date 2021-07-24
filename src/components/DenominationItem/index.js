import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, updateBalance} = props
  const {value} = denominationsDetails

  const onUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onUpdateBalance}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
