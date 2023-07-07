import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { LineData as data } from '../data'

const LineChart = () => {
  return (
    <ResponsiveLine
        data={data}
        margin={{ top: 30, right: 10, bottom: 40, left: 50 }}
        xScale={{ type: 'point' }}
        gridYValues={[10, 100, 1000, 10000, 100000, 1000000, 10000000]}
        yScale={{
            type: 'linear',
            min: '0',
            max: '30000',
        }}
        width={500}
        height={200}
        yFormat=" >-.2f"
        curve="basis"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: undefined,
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickValues: [0,5000,10000,15000,20000,25000,30000],
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: undefined,
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridY={false}
        enablePoints={false}
        colors={{ scheme: 'paired' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
    />
  )
}

export default LineChart