import { Chart } from './Chart'
import Highcharts from 'highcharts'

interface ChartDataPoint {
  name: string
  value: number
}

interface FinanceChartGraphProps {
  data: ChartDataPoint[]
  chartType?: 'income' | 'expense'
  dateRange?: string
  className?: string
}

const FinanceChartGraph = ({
  data,
  chartType = 'income',
  dateRange = 'This Year',
  className = "",
}: FinanceChartGraphProps) => {
  // Transform data for Highcharts
  const chartData = data.map(point => point.value)
  const categories = data.map(point => point.name)

  const chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 280,
      backgroundColor: 'transparent',
      spacing: [20, 20, 20, 20],
    },
    title: {
      text: undefined,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      categories,
      lineWidth: 0,
      tickWidth: 0,
      labels: {
        style: {
          color: '#697586',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
      },
      gridLineWidth: 0,
    },
    yAxis: {
      title: {
        text: undefined,
      },
      labels: {
        style: {
          color: '#697586',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        },
        formatter: function() {
          return '$' + this.value
        },
      },
      gridLineColor: '#EEF2F6',
      gridLineWidth: 1,
      tickAmount: 6,
    },
    plotOptions: {
      line: {
        marker: {
          enabled: false,
          states: {
            hover: {
              enabled: true,
              radius: 4,
            },
          },
        },
        lineWidth: 2.5,
        states: {
          hover: {
            lineWidth: 2.5,
          },
        },
      },
    },
    series: [{
      type: 'line',
      name: chartType === 'income' ? 'Income' : 'Expense',
      data: chartData,
      color: '#4F46E5',
      lineWidth: 2.5,
    }],
    tooltip: {
      backgroundColor: 'white',
      borderColor: '#E2E8F0',
      borderRadius: 8,
      shadow: true,
      style: {
        color: '#344055',
        fontSize: '12px',
        fontFamily: 'Inter, sans-serif',
      },
      formatter: function() {
        return `<b>${this.x}</b><br/>${this.series.name}: $${this.y?.toLocaleString()}`
      },
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 768,
        },
        chartOptions: {
          chart: {
            height: 160,
            spacing: [10, 10, 10, 10],
          },
          yAxis: {
            labels: {
              style: {
                fontSize: '8px',
              },
            },
            tickAmount: 6,
          },
          xAxis: {
            labels: {
              style: {
                fontSize: '8px',
              },
              step: 2, // Show every other label on mobile
            },
          },
          plotOptions: {
            line: {
              lineWidth: 2,
            },
          },
        },
      }],
    },
  }

  return (
    <div className={`bg-white border border-[#E2E8F0] rounded-md p-4 lg:p-6 shadow-sm ${className}`}>
      {/* Chart Header */}
      <div className="mb-6">
        <h3 className="text-lg lg:text-xl font-semibold text-[#121212] mb-2">
          {chartType === 'income' ? 'Income' : 'Expense'} Chart
        </h3>
        <p className="text-sm text-[#5B6776]">
          Financial data for {dateRange.toLowerCase()}
        </p>
      </div>

      {/* Chart Container */}
      <div className="w-full">
        <Chart options={chartOptions} />
      </div>
    </div>
  )
}

// Default data for demonstration
export const defaultChartData: ChartDataPoint[] = [
  { name: 'Jan', value: 1000 },
  { name: 'Feb', value: 1500 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 2500 },
  { name: 'May', value: 1300 },
  { name: 'Jun', value: 2500 },
  { name: 'Jul', value: 800 },
  { name: 'Aug', value: 2800 },
  { name: 'Sep', value: 1000 },
  { name: 'Oct', value: 2000 },
  { name: 'Nov', value: 1500 },
  { name: 'Dec', value: 2600 },
]

export default FinanceChartGraph
export type { ChartDataPoint }
