import React from 'react';
import {Line} from 'react-chartjs-2';

class USDExchangeTradeVolume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData : {
        labels : [],
        datasets : [{
          label : 'usd-exchange-trade-vol',
          backgroundColor: 'rgb(0, 74, 124)',
          data : null
        }]
      }
    };
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/trade-volume?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let xValues = result.values.map(e => e.x.toString())
        let yValues = result.values.map(e => e.y)
        this.setState({
          chartData : {
            labels : xValues,
            datasets : [{
              label : 'usd-exchange-trade-vol',
              data : yValues
            }]
          }
        });

      });

  }

  render() {
    return (
      <div className="USDExchangeTradeVolume">
        <Line
          data={this.state.chartData}
          options={{
            title : {
              display : true,
              text : 'USD Exchange Trade Volume',
              fontSize : 30
            }
          }}
        />
      </div>
    );
  }
}

export default USDExchangeTradeVolume;
