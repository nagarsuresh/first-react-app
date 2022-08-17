import './Chart.scss';

import { FC } from 'react';

import { ChartDataPoint } from './chart-dto';
import ChartBar from './ChartBar';

export interface ChartProps {
  dataPoints: ChartDataPoint[];
}
const Chart: FC<ChartProps> = (props: ChartProps) => {
  const chartDataPoints = props.dataPoints.map((pt) => pt.value);
  const chartMaxValue = Math.max(...chartDataPoints);

  return (
    <div className="chart">
      {props.dataPoints.map((prop) => (
        <ChartBar
          key={prop.label}
          label={prop.label}
          value={prop.value}
          maxValue={chartMaxValue}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
