import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { PieChart as data } from '../data'
const PieChart = () => {
  return (
    <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.7}
        cornerRadius={0}
        colors={{ datum: "data.color" }}
        activeOuterRadiusOffset={8}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        width={300}
        height={200}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{  from: 'color' }}
        enableArcLabels={false}
        arcLabel="id"
        arcLabelsRadiusOffset={0.45}
        arcLabelsSkipAngle={11}
        arcLabelsTextColor={{ theme: 'background' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    />

)
}

export default PieChart