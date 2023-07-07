import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo'
import { geodata as data } from '../data'
import { geofeatures } from '../GeoData'


const Geo = () => {
  return (
    <ResponsiveChoropleth
        data={data}
        features= {geofeatures.features}
        margin={{ top: 0, right: 60, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        unknownColor="#ede9e9"
        colors='RdYlBu'
        label="properties.name"
        width={450}
        height={200}
        valueFormat=".2s"
        projectionType="equirectangular"
        projectionScale={75}
        projectionTranslation={[ 0.5, 0.7 ]}
        projectionRotation={[ 0, 0, NaN ]}
        graticuleLineWidth={0}
        graticuleLineColor="#dddddd"
        borderColor="#152538"
        
    />
  )
}

export default Geo