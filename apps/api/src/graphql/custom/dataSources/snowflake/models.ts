export interface QueryOptions {
  sqlText: string;
}

export interface Axis {
  type: string;
  key: string;
}

export interface VizAttributes {
  crossLinking: string;
  category: string;
  value: string;
  xAxis: Axis;
  yAxis: Axis;
}
