import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Bardata as data } from '../data'

const BarChart = () => {
  return (
    <ResponsiveBar
        data={data}
        keys={[
            'Mobile',
            'Desktop',
            'tablet',
        ]}
        indexBy="country"
        margin={{ top: 120, right: 130, bottom: 60, left: 60 }}
        padding={0.05}
        layout="horizontal"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        borderColor="#ffff"
        width={400}
        height={50}
        borderWidth={1}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridY={false}
        enableLabel={false}
        labelSkipWidth={5}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
    />
  )
}

export default BarChart