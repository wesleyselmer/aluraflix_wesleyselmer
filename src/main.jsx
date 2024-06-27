import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './AppRoutes.jsx'
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Register Swiper web component
register();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
)
