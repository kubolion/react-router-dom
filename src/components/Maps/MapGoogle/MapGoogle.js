import React from 'react';
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MapGoogle = () => {
    const defaultProps = {
        center: {
            lat: 46.825472,
            lng: 29.671424
        },
        zoom: 11
    };
    return (
        <div style={{height: '50vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: "AIzaSyBOdx7yzAxVpDLemp6-B8FVeXJSV93tahI"}}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
};

export default MapGoogle;