import '../App.css'

function PlaceCard(props) {

    return (
      <div className='card'>
          <img src={props.item.image} className='card--img' />
          <div className='card--info'>
              <div className='card--info-top'>
                  <img src="../public/images/locate.png" className='locate--img'/>
                  <h6 className='location'>{(props.item.location).toUpperCase()}</h6>
                  <a href={props.item.map} className='locate--map'>View on Google Maps</a>
              </div>
              <h1 className='place--title'>{props.item.title}</h1>
              <h3 className='travel--dates'>{props.item.dates}</h3>
              <p className='place--description'>{props.item.description}</p>
          </div>
      </div>
    )
  }
  
  export default PlaceCard