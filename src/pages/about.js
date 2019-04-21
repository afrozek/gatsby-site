import React from "react";
import Slider from '../components/slider';

export default () => {
    return (
         <div style={{ color: `teal` }}>
            <h1>About Gatsby</h1>
            <p>Such wow. Very React.</p>
            <Slider title=" props from about component"/>
        </div>
    )
}