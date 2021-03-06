import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import OneWeather from './OneWeather'
class Weather extends Component {
    render() {
        return (
            <div className='row' style={{ margin: '20px' }}>
                {this.props.dataFromBack.map
                    (d => {
                        return <OneWeather cityName={this.props.cityName} valid_date={d.time} description={d.forecast} />
                    })
                }
            </div>
        )
    }
}
export default Weather
