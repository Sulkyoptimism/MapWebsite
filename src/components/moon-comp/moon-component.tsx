import React from "react";

// @ts-ignore
export function MoonComponent({ moon }) {
    return (
        <div style={{'height': moon.height}}>
            <img className="moon-img" height={'100%'} src={moon.img} alt={moon.name} style={{'color': moon.color}}/>
        </div>
    );
}