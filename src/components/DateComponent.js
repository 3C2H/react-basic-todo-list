import React from 'react'
import '../style/dateComponent.css'


class DateComponent extends React.Component {
  render() {
  
		let date = new Date()
		let dateUi = date.toDateString()
		let hours = date.getHours()
		let minutes = date.getMinutes()
    let timeOfDay
    
    if(hours < 12) {
      timeOfDay = 'morning'
    } else if(hours >= 12 && hours < 19) {
      timeOfDay = 'afternoon'
    } else {
      timeOfDay = 'night'
    }
  
    return(
			<div className='dateComponent'>
				<h2>Good {timeOfDay} ! It's currently <br></br> {dateUi} {hours} : {minutes} </h2>
			</div>
    )
  }
}

export default DateComponent