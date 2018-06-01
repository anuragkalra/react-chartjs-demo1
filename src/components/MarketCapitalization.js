import React from 'react';
import {Line} from 'react-chartjs-2';

class MarketCapitalization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData : {
        labels : [],
        datasets : [{
          label : 'market-cap',
          data : null
        }]
      }
    };
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/market-cap?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let xValues = result.values.map(e => e.x.toString())
        let yValues = result.values.map(e => e.y)
        this.setState({
          chartData : {
            labels : xValues,
            datasets : [{
              label : 'market-cap',
              borderColor: 'rgb(0, 74, 124, 0.8)',
              backgroundColor: 'rgb(0, 74, 124, 0.2)',
              data : yValues
            }]
          }
        });

      });

  }

  render() {
    return (
      <div className="MarketCapitalization">
        <Line
          data={this.state.chartData}
          options={{
            title : {
              display : true,
              text : 'Market Capitalization',
              fontSize : 30
            }
          }}
        />
      </div>
    );
  }
}

export default MarketCapitalization;
