import React from 'react';
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import  { compose, withProps, withHandlers } from "recompose";
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

export const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAsakCEzvOI-oJ_nKH9AsfceepJu57gbC0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `800px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers()
            console.log(`Current clicked markers length: ${clickedMarkers.length}`)
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 14.67371, lng: -17.434879 }}
    >

        <Marker
            position={{ lat: 14.669777, lng: -17.433411 }}
            icon="http://www.myiconfinder.com/uploads/iconsets/48-48-56165014858e6dbadaf3ba00d782f125.png"


        />


        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    key={marker._id}
                    position={{ lat: marker.lat, lng: marker.long }

                    }
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);
