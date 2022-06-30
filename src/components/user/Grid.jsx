import '../../assets/scss/_utils.scss'

const GridUser = ({ items }) => {
  return (
    <div className='app-grid'>
      {items.map(item => (
        <div className='grid-item' key={item.id}>
          <h3>{item.firstname + ' ' + item.lastname}</h3>
        </div>
      ))}
    </div>
  )
}

export default GridUser
