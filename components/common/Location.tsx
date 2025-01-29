"use client";

import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    DirectionsService,
    DirectionsRenderer,
} from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Location01Icon } from "hugeicons-react";

const GoogleMapComponent: React.FC = () => {
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

    const containerStyle = {
        width: "100%",
        height: "400px",
    };

    const origin = {
        lat: 25.40324,
        lng: 55.50705,
    };

    const destination = {
        lat: 25.213083,
        lng: 55.258116,
    };

    const options: google.maps.MapOptions = {
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
    };

    const center = {
        lat: 25.213083,
        lng: 55.258116,
    };

    const calculateRoute = () => {
        if (window.google && window.google.maps) {
            const directionsService = new window.google.maps.DirectionsService();
            directionsService.route(
                {
                    origin,
                    destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK) {
                        setDirections(result);
                    } else {
                        console.error("Directions request failed due to " + status);
                    }
                }
            );
        }
    };

    useEffect(() => {
        if (window.google && window.google.maps) {
            calculateRoute();
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-[45%] bg-primary p-6 md:p-16 justify-center">
                <h3 className="text-2xl font-[600] text-white sm:text-4xl">
                    Estheva Polyclinic
                </h3>
                <h2 className="text-md font-[400] mt-4 text-gray-100 sm:text-[16px]">
                    Al Wasl Road, 375B, Dubai, United Arab Emirates
                </h2>
                <h2 className="text-2xl font-[400] mt-4 mb-8 text-gray-100 sm:text-[16px]">
                    Mon - Sun, 9am - 9pm
                </h2>
                <Button onClick={calculateRoute} className="bg-white">
                    Get Directions
                    <Location01Icon size={16} className="text-teal-500" />
                </Button>
            </div>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                    options={options}
                >
                    {directions && (
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                suppressMarkers: true, // To avoid showing markers for origin and destination
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default GoogleMapComponent;
