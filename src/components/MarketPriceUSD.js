import React from 'react';
import {Line} from 'react-chartjs-2';

class MarketPriceUSD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData : {
        labels : [],
        datasets : [{
          label : 'market-price-usd',
          data : null
        }]
      }
    };
  }

  componentDidMount() {
    const url = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
    fetch(url)
      .then(response => response.json())
      .then(result => {
        let xValues = result.values.map(e => e.x.toString())
        console.log(xValues);
        let yValues = result.values.map(e => e.y)
        console.log(yValues);
        this.setState({
          chartData : {
            labels : xValues,
            datasets : [{
              label : 'market-price-usd',
              data : yValues
            }]
          }
        });

      });

  }

  render() {
    return (
      <div className="MarketPriceUSD">
        {this.state.mostRecent}
        <Line
          data={this.state.chartData}
          options={{
            title : {
              display : true,
              text : 'Market Price (USD)',
              fontSize : 30
            }
          }}
        />
      </div>
    );
  }
}

export default MarketPriceUSD;
