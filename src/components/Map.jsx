import { useState, useMemo, useCallback, useRef } from "react"
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"

const Map = () => {
    const center = useMemo(() => ({ lat: 12.911, lng: 77.565 }));
    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false
    }), []);

    return (
        <div className="container">
            <div className="map">
                <GoogleMap
                    zoom={20}
                    center={center}
                    mapContainerClassName="map-container"
                    options={options}
                >
                </GoogleMap>
            </div>
        </div>
    )
}

export default Map