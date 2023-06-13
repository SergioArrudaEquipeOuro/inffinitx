import { Component, OnInit } from '@angular/core';

declare var LightweightCharts: any;

@Component({
  selector: 'app-grafico-vela',
  templateUrl: './grafico-vela.component.html',
  styleUrls: ['./grafico-vela.component.css']
})
export class GraficoVelaComponent implements OnInit {

  ngOnInit(): void {
    const log = console.log;

    const chartProperties = {
      height: 400,
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      }
    };

    const domElement = document.getElementById('tvchart');
    const chart = LightweightCharts.createChart(domElement, chartProperties);
    const candleSeries = chart.addCandlestickSeries();

    fetch('https://api.binance.com/api/v3/klines?symbol=LTCUSDT&interval=1m&limit=1000')
      .then(res => res.json())
      .then(data => {
        const cdata = data.map((d: any) => {
          
          
          return {
            time: d[0] / 1000,
            open: parseFloat(d[1]),
            high: parseFloat(d[2]),
            low: parseFloat(d[3]),
            close: parseFloat(d[4])
            
          };
        });
        candleSeries.setData(cdata);
      })
      .catch(err => log(err));
  }
}
