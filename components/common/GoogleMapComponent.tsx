"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer, Marker } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import { Location01Icon } from "hugeicons-react";
import { darkModeStyle } from "@/constants";
import HeaderPath from "./HeaderPath";

const GoogleMapComponent = () => {
    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
    const [deviceLocation, setDeviceLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [error, setError] = useState<string | null>(null);

    const containerStyle = {
        width: "100%",
        height: "100%",
    };

    const origin = deviceLocation || { lat: 25.40324, lng: 55.50705 };
    const destination = { lat: 25.213083, lng: 55.258116 };

    const options: google.maps.MapOptions = {
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: darkModeStyle,
    };

    const center = deviceLocation || destination;

    const calculateRoute = () => {
        if (!deviceLocation) {
            setError("Please allow location access to calculate directions.");
            return;
        }

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
                        // console.error("Directions request failed due to " + status);
                    }
                }
            );
        } else {
            // console.error("Google Maps API is not available.");
        }
    };

    const getDeviceLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setDeviceLocation({ lat: latitude, lng: longitude });
                },
                (err) => {
                    // console.error(err.message);
                    setError("Unable to retrieve location. Please allow location access.");
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getDeviceLocation();
    }, []);

    // useEffect(() => {
    //     if (deviceLocation) {
    //         calculateRoute();
    //     }
    // }, [deviceLocation]);

    return (
        <div className="relative h-screen bg-pattern">
            <div className="absolute z-10 mt-16">
                <HeaderPath title="Contact Us" path="/contact" showSearchBar={true} />
            </div>
            <div className="absolute z-10 bg-primary rounded-xl p-8 border-primaryColor border-[2px] top-28 left-8 xl:left-14">
                <h3 className="text-2xl font-medium text-primaryColor">Estheva Polyclinic</h3>
                <h2 className="text-md font-[400] mt-4 text-white sm:text-[16px]">Villa 375B</h2>
                <h2 className="text-md font-[400] mt-4 text-white sm:text-[16px]">Al Wasl Road</h2>
                <h2 className="text-md font-[400] mt-4 text-white sm:text-[16px]">Dubai</h2>
                <h2 className="text-md font-[400] mt-4 text-white sm:text-[16px]">United Arab Emirates</h2>
                <h2 className="text-md font-[400] mt-4 text-white sm:text-[16px]">Mon - Sun, 9am - 9pm</h2>
                <Button onClick={calculateRoute} className="mt-4 border-primaryColor border-[2px] text-white w-full">
                    Get Directions
                    <Location01Icon size={16} className="text-teal-200" />
                </Button>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>

            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={deviceLocation ? 17 : 15}
                    options={options}
                >
                    <Marker
                        position={destination}
                        label={{
                            text: "Estheva Polyclinic",
                            color: "#cbd5e1",
                            fontWeight: "bold",
                            fontSize: "14px",
                        }}
                        icon={{
                            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        }}
                    />

                    {deviceLocation && (
                        <Marker
                            position={deviceLocation}
                            label={{
                                text: "You",
                                color: "#cbd5e1",
                                fontWeight: "bold",
                                fontSize: "14px",
                            }}
                            icon={{
                                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                            }}
                        />
                    )}

                    {directions && (
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                suppressMarkers: true,
                                polylineOptions: {
                                    strokeColor: "#99f6e4",
                                    strokeWeight: 5,
                                    strokeOpacity: 0.8,
                                },
                            }}
                        />
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default GoogleMapComponent;
