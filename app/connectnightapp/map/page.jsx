"use client"
import React, { useEffect, useState } from 'react'
import { Autocomplete, GoogleMap, InfoWindow, LoadScript, Marker, MarkerF, useLoadScript } from '@react-google-maps/api';
import styles from './GoogleMaps.module.css'
//

function MyComponent() {
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
        libraries:['places']
    })


    if(!isLoaded) return <div>Loading...</div>
  return (<>
    

    <div className={styles.homeWrapper}>
      <div className={styles.sidebar}>
      
    
        <button data-text="Awesome" className={styles.button} onClick={geolocation}>
        <span className={styles.actualtext} >&nbsp;Get location&nbsp;</span>
        <span className={styles.hovertext}  aria-hidden="true">&nbsp;Get location&nbsp;</span>
      </button>
      </div>
    
    <GoogleMap zoom={10} center={{lat: 41.4121984, lng: 2.1528576}} mapContainerClassName={styles.mapcontainer} >
       <MarkerF onLoad={onLoad}  position={{lat: Lat, lng: Lng}} />

       <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={()=>(console.log(this))}
          >
            <input
              type="text"
              placeholder="Busca tu ubicacion"
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
            />
          </Autocomplete>

    </GoogleMap>
    </div>
    </>
  )
}




const onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }
function Map(){
    
}


export default React.memo(MyComponent)
