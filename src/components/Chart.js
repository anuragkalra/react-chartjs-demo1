import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['a', 'b', 'c', 'd', 'e', 'f '],
        datasets:[
          {
            label: 'Populatio1',
            data:[
              123,
              456,
              789,
              3839,
              1120,
              4202
            ],
            backgroundColor:[
              'rgba(12,121,31,0.1)',
              'rgba(14,33,221,0.1)',
              'rgba(33,22,122,0.1)',
              'rgba(44,22,33,0.1)',
              'rgba(123,22,12,0.1)',
              'rgba(33,22,121,0.1)'
            ]
          },
          {
            label: 'Population2',
            data:[
              1331,
              4211,
              9833,
              9239,
              7123,
              4202
            ],
            backgroundColor:[
              'rgba(122,121,31,0.1)',
              'rgba(142,33,221,0.1)',
              'rgba(33,221,122,0.1)',
              'rgba(44,224,33,0.1)'
            ]
          }
        ]
      }
    }
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'poop',
              fontSize:25
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
