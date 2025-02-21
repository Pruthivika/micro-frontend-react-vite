import React, {useState} from 'react'
// import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

const LineChart = () => {
    const [count, setCount] = useState(0)
    return(<div>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
          <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button>
      </div>)
} 

export default LineChart;