import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class LineWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['t0', 't1', 't2'],
        datasets:[{
            label: 'market price data',
            data:[{
              x: 1496188800,
              y: 2285.9339142857143
            },
            {
              "x": 1496620800,
              "y": 2698.3138125
            },
            {
              x: 1527638400,
              y: 7385.395
            }]
        }]
      }
    }
  }

  render(){
    return (
      <div className="LineWrapper">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Demo Market Price (USD)',
              fontSize:25
            }
          }}
        />
      </div>
    );
  }
}

export default LineWrapper;
