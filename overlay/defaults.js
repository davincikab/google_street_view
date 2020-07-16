
const DEFAULTS = {
    availableZooms: { openmaptiles: [14] }, // only used in google demo

    tilesSpec: [
        {
            source: "openmaptiles",
            z: 14,
            x: 8188,
            y: 5496,
            top: 0,
            left: 0,
            size: 256
        },
        {
            source: "openmaptiles",
            z: 14,
            x: 8188,
            y: 5497,
            top: 0,
            left: 256,
            size: 256
        },
        {
            source: "openmaptiles",
            z: 10,
            x: 511,
            y: 343,
            top: 256,
            left: 0,
            size: 1024
        }
    ],

    drawSpec: {
        destLeft: 100,
        destTop: 50,
        srcLeft: 100,
        srcTop: 60,
        width: 320,
        height: 550
    },
    
    style: {
        version: 8,
        name: "Road",
        metadata: {
            "mapbox:type": "template"
        },
        sources: {
                "composite": {
                    "url": "mapbox://mapbox.mapbox-streets-v8,mapbox.mapbox-terrain-v2,daudi97.8uettfce",
                    "type": "vector"
            }
        
        },
        layers: [
            {
                id: "line_label",
                type: "symbol",
                metadata: {},
                source: "roads",
                "source-layer": "line-74rqn2",
                filter: ["all"],
                layout: {
                    "symbol-placement": "line",
                    "text-anchor": "center",
                    "text-field": "{SL}",
                    "text-font": ["Roboto Medium"],
                    "text-offset": [0, 0.15],
                    "text-size": {
                        base: 1,
                        stops: [[13, 12], [14, 13]]
                    }
                },
                paint: {
                    "text-color": "#765",
                    "text-halo-blur": 0.5,
                    "text-halo-width": 1
                }
            },
            {
                id: "line",
                type: "roads",
                source: "roads",
                "source-layer": "line-74rqn2",
                filter: ["all"],
                layout: {},
                paint: {
                    "line-dasharray": [1, 1.5],
                    "line-color": "rgba(228, 0, 2, 1)",
                    "line-opacity": 1
                }
            }
        ],
        id: "roads"
    }
};