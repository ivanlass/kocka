import React from 'react';
import * as V from 'victory';
import {VictoryChart, VictoryLine, VictoryTheme, VictoryLegend} from 'victory'
import './App.css';


function Charts(props) {


  return (
      <>
<VictoryChart
  theme={VictoryTheme.material}
>
<VictoryLegend x={100} y={50}
  	title="Legend"
    centerTitle
    orientation="horizontal"
    gutter={20}
    style={{ border: { stroke: "black" }, title: {fontSize: 20 } }}
    data={[
      { name: "Men", symbol: { fill: "#4287f5"} },
      { name: "Women", symbol: { fill: "#c43a31" } }
    ]}
  />
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: "2015", y: 925 },
      { x: "2016", y: 1242 },
      { x: "2017", y: 1925 },
      { x: "2018", y: 3567 },
      { x: "2019", y: 12526 },
      { x: "2020", y: 21753 }
    ]}
  />


<VictoryLine
    style={{
      data: { stroke: "#4287f5" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: "2015", y: 500 },
      { x: "2016", y: 1342 },
      { x: "2017", y: 1125 },
      { x: "2018", y: 2567 },
      { x: "2019", y: 10526 },
      { x: "2020", y: 10753 }
    ]}
  />

</VictoryChart>
    </>
  );
}

export default Charts;
