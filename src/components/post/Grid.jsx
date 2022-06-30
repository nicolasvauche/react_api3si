import '../../assets/scss/_utils.scss'

const GridPost = ({ items }) => {
  return (
    <div className='app-grid'>
      {items.map(item => (
        <div className='grid-item' key={item.id}>
          <img
            src={'http://localhost:8080/assets/img/post/' + item.media}
            alt={item.title}
          />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default GridPost
