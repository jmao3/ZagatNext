import React, { Component } from 'react'
import Layout from '../components/MyLayout'
import StarRatings from 'react-star-ratings';
import Location from '../components/Location'

class Calendar extends Component {
    render() {
        const locations = [
            {name: 'Living Room',
            status: 'complete'
            },
            {name: 'Kitchen',
            status: null
            },
            {name: 'Dining Room',
            status: 'damaged'
            }
        ];
    
        console.log(locations[1].name);

        return (
            <Layout>
            <p>This is the calendar page</p>
            <StarRatings
                rating={0}
                starRatedColor="blue"
                numberOfStars={5}
                name='rating'
                starDimension="30px"
                starSpacing="5px"
                />
                {locations.map((location, index) => 
                    <Location index={index} name={location.name} status={location.status}/>
                )}
            
            <style jsx>{`
            p {
                color: red;
            }
          `}</style>
          </Layout>
        )
        

    }


}
export default Calendar;