import React from 'react'
import { ResponsiveSwarmPlot } from '@nivo/swarmplot'
import { SwarmData as data } from '../data'
const Swamp = () => {
  return (
    <ResponsiveSwarmPlot
        data={data}
        groups={[ 'Mobile', 'Desktop', 'tablet' ]}
        identity="id"
        value="price"
        width={300}
        height={300}
        valueFormat=" >-$.2f"
        valueScale={{ type: 'linear', min: 0, max: 100,  }}
        size={{
            key: 'volume',
            values: [
                1,
                30
            ],
            sizes: [
                40,
                20
            ]
        }}
        spacing={0}
        gap={2}
        forceStrength={3.8}
        simulationIterations={140}
        colors={{ datum: "data.color" }}
        borderWidth={1}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.6
                ],
                [
                    'opacity',
                    '1.3'
                ]
            ]
        }}
        margin={{ top: 30, right: 50, bottom: 80, left: 50 }}
        axisTop={{
            orient: 'top',
            tickSize: 0,
            tickPadding: 8,
            tickRotation: 0,
            // legend: 'group if vertical, price if horizontal',
            legendPosition: 'middle',
            legendOffset: -58
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
            orient: 'left',
            tickSize: 10,
            tickPadding: 10,
            tickRotation: 0,
            legend: 'price if vertical, group if horizontal',
            legendPosition: 'middle',
            legendOffset: -76
        }}
    />
  )
}

export default Swamp