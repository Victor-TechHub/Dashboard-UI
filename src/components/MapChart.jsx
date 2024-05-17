import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const geoUrl =
    "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson"

export default function MapChart() {
    return (
        <ComposableMap style={{ width: '100%', height: '100%' }}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="gainsboro"
                            stroke="gainsboro"
                            style={{
                                default: {
                                    fill: "#EEE",
                                },
                                hover: {
                                    fill: "rgb(75, 11, 193)",
                                },
                                pressed: {
                                    fill: "#777",
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}

//https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson