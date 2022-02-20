import React from 'react';
import GoogleMapReact from 'google-map-react';

const greatPlaceStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
}
const MyMapComponent = ({ text }: any) => <div>{text}</div>;

export default function GoogleMap({ defaultProps }: any) {
    defaultProps = {
        center: {
            lat: 29.655444,
            lng: -95.811068
        },
        zoom: 14
    };
    return (
        // Important! Always set the container height explicitly
        <div className="w-full md:w-1/2">
            <div style={{ height: '500px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <MyMapComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="SEMMS LUXURY"
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}
