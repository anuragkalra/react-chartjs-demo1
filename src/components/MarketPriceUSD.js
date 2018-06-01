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

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }

  componentDidMount(){
    const url = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(response => {
        let xValues = response.values.map(e => e.x.toString());
        let yValues = response.values.map(e => e.y);
        this.setState({
          chartData : {
            labels : xValues,
            datasets : [{
              label : 'market-price-usd',
              borderColor: 'rgba(0, 74, 124, 0.8)',
              backgroundColor: 'rgba(0, 74, 124, 0.2)',
              data : yValues
            }]
          }
        });
      }).catch(error => {
        console.log(error);
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
