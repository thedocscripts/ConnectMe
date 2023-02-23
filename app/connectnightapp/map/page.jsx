"use client"
import React, { useEffect, useState } from 'react'
import { GoogleMap, InfoWindow, LoadScript, Marker, MarkerF, useLoadScript } from '@react-google-maps/api';
import styles from '@/styles/GoogleMaps.module.css'


export default function MyComponent() {
    const [Lat, setLat] = useState(41.4121984);
    const [Lng, setLng] = useState(9.1528576);
    const [status, setStatus] = useState(null);



    const geolocation = ()=>{
        if(!navigator.geolocation){
            console.log("navigator is not enabled")
        }else{
            navigator.geolocation.getCurrentPosition((position)=>{
                console.log(position.coords.latitude);
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)
                console.log(position.coords.longitude);
            })
        }
    }
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDbGdnI8h6k_FL_FzYr_ol4wjVCrc89_0o",
    })


    if(!isLoaded) return <div>Loading...</div>
  return (<>
    <button onClick={geolocation}>Get location</button>
    <GoogleMap zoom={10} center={{lat: 41.4121984, lng: 2.1528576}} mapContainerClassName={styles.mapcontainer}>
       <MarkerF onLoad={onLoad}  position={{lat: Lat, lng: Lng}} />



    </GoogleMap>
    </>
  )
}

const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
function Map(){
    
}
