
import { PortfolioContext } from "@/context/PortfolioContext";
import { GoogleMap, InfoWindow, Libraries, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useContext } from "react";

const defaultMapContainerStyle = {
    width: '100%',
    height: '320px',
    borderRadius: '15px 15px 15px 15px',
};

const defaultMapCenter = {
    lat: 35.8799866,
    lng: 76.5048004
}

const defaultMapZoom = 18

const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

const Map = () => {
    const libraries = ['places', 'drawing', 'geometry'];
    const data = useContext(PortfolioContext);
    const center = {lat:30.713324,lng:76.730275}
    
    const { isLoaded: scriptLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string,
        libraries: libraries as Libraries,
    });
    //   if(loadError) return <p>Encountered error while loading google maps</p>
    // const center = { lat: 30.713296, lng: 76.7075761 } mohali8b

    return (
        <div className="w-full">
            {!scriptLoaded ? <p>Map Script is loading ...</p>
                : <GoogleMap
                    mapContainerStyle={defaultMapContainerStyle}
                    center={defaultMapCenter}
                    zoom={defaultMapZoom}
                    options={defaultMapOptions}
                >
                    <MarkerF position={center}
                        onClick={() => {}}
                    />
                    <InfoWindow
                        onCloseClick={() => { }}
                        position={center}
                    >
                        <h1>
                            {data.address}
                        </h1>
                    </InfoWindow>
                </GoogleMap>}
        </div>
    )
};

export default Map;