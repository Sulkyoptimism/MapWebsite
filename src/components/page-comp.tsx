import React, {useState} from "react";
import {MapApp} from "./map-comp/map-component";


export default function MainPage() {
    const [mapState, setMapState] = useState('');
    async function handleClick(map: string) {
        if (map != '') {
            setMapState(map);
        }
    }
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="flex justify-center" hidden={mapState == 'sub'} style={{height: mapState == 'main' ? '100%' : 'auto'}}>
                <div id="main-map" className="flex justify-center items-center" style={{"width": mapState == 'main' ? "100%" : "55%"}} hidden={mapState == 'sub'} onClick={() => handleClick('main')}>
                    <MapApp client:load enabled={mapState == 'main'} src={'/kamimapTop.png'} size={'100%'}></MapApp>
                </div>
            </div>
            <div id="planets-menu" className="h-36" hidden={mapState == 'main' || mapState == 'sub'}>

            </div>
            <div className="flex justify-center" hidden={mapState == 'main'}>
                <div id="sub-map" style={{"height": "16rem", "width": "33%"}} hidden={mapState == 'main'} onClick={() => handleClick('sub')}>
                    <MapApp client:load enabled={mapState == 'sub'} src={'/kamimapBot.png'} ></MapApp>
                </div>
            </div>
        </div>
    );
}
