import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface ChartProps {
  options: Highcharts.Options
  highcharts?: typeof Highcharts
  constructorType?: keyof typeof Highcharts
  allowChartUpdate?: boolean
  immutable?: boolean
  updateArgs?: [boolean?, boolean?, boolean?]
  containerProps?: React.HTMLAttributes<HTMLDivElement>
  callback?: (chart: Highcharts.Chart) => void
}

const Chart: React.FC<ChartProps> = ({
  options,
  highcharts = Highcharts,
  constructorType = 'chart',
  allowChartUpdate = true,
  immutable = false,
  updateArgs = [true, true, true],
  containerProps,
  callback,
}) => {
  return (
    <HighchartsReact
      highcharts={highcharts}
      options={options}
      constructorType={constructorType}
      allowChartUpdate={allowChartUpdate}
      immutable={immutable}
      updateArgs={updateArgs}
      containerProps={containerProps}
      callback={callback}
    />
  )
}

export { Chart }
export type { ChartProps }
