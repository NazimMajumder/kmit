// components/GoogleMap.js

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.01575911254793,
  lng: 91.52388921959616,
};

// export const GoogleMapComponent = () => {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_API_KEY">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
//         <Marker position={center} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };
export const GoogleMapComponent = () => {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.0272629117583!2d91.5239101!3d23.0157628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753154a5baaacbb%3A0xcb4fae9b5730b683!2sAnowara%20Model%20High%20School!5e0!3m2!1sen!2sbd!4v1713465022210!5m2!1sen!2sbd"
        width="100%"
        height="416"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
