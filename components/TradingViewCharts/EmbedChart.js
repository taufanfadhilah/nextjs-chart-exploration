import React, {Component} from "react";

class EmbedChart extends Component {
    constructor(props) {
      super(props);
      this.myRef = React.createRef();
    }
  
    componentDidMount() {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
      script.async = false;
      script.innerHTML = JSON.stringify({
        "width": 980,
        "height": 610,
        "container_id": "tradingview_cb83d",
        "symbol": "BINANCE:BTCUSDT",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true
      })
      this.myRef.current.appendChild(script);
    }
  
    render() {
      return(
      <div className="tradingview-widget-container" ref={this.myRef}>
          <div className="tradingview-widget-container__widget"></div>    
      </div>
      );
    }
  }

  export default EmbedChart;