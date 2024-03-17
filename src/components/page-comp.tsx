import React, {useState} from "react";
import {MapApp} from "./map-comp/map-component";
import type MoonInfo from "../models/moonInfo.ts";
import {MoonComponent} from "./moon-comp/moon-component.tsx";


export default function MainPage() {
    const [mapState, setMapState] = useState('');

    const moons: MoonInfo[] = [
        {
            name: "Yiv",
            img: "moons/1 yiv_rs.webp",
            id: 1,
            isAbsent: true,
            margin: 0,
            color: '#500255',
            height: '90%'
        },
        {
            name: "Vor",
            img: "moons/2 vor.webp",
            id: 2,
            isAbsent: false,
            margin: 0,
            color: '#9491A2',
            height: '100%'
        },
        {
            name: "Kan",
            img: "moons/3 kan_rs.webp",
            id: 3,
            isAbsent: false,
            margin: 0,
            color: '#C0CDCF',
            height: '90%'
        },
        {
            name: "Vev",
            img: "moons/4 vev_rs.webp",
            id: 4,
            isAbsent: false,
            margin: 0,
            color: '#546D6D',
            height: '80%'
        },
        {
            name: "Teno",
            img: "moons/5 teno_rs.webp",
            id: 5,
            isAbsent: false,
            margin: 0,
            color: '#313E7D',
            height: '80%'
        },
        {
            name: "Haku",
            img: "moons/6 haku_rs.webp",
            id: 6,
            isAbsent: false,
            margin: 0,
            color: '#B25055',
            height: '80%'
        },
        {
            name: "Dia",
            img: "moons/7 dia_rs.webp",
            id: 7,
            isAbsent: false,
            margin: 0,
            color: '#C7C466',
            height: '80%'
        },
        {
            name: "Ao",
            img: "moons/8 ao_rs.webp",
            id: 8,
            isAbsent: false,
            margin: 0,
            color: '#D07A1D',
            height: '80%'
        },
        {
            name: "Heno",
            img: "moons/9 heno.webp",
            id: 9,
            isAbsent: false,
            margin: 0,
            color: '#6C8753',
            height: '80%'
        },
        {
            name: "Pya",
            img: "moons/10 pya_rs.webp",
            id: 10,
            isAbsent: false,
            margin: 0,
            color: '#3D948B',
            height: '80%'
        },
    ]
    moons.forEach((moon, i) => {
        const factor = i < 5 ? i - 4 : i - 5;
        moon.margin = moon.margin + (-0.18 * (factor * factor)) + 4;
    })

    async function handleClick(map: string) {
        if (map != '') {
            setMapState(map);
        }
    }
    return (
        <div className="h-full flex flex-col justify-center">
            <div className="flex justify-center" hidden={mapState == 'sub'}
                 style={{height: mapState == 'main' ? '100%' : 'auto'}}>
                <div id="main-map" className="flex justify-center items-center"
                     style={{"width": mapState == 'main' ? "100%" : "55%"}} hidden={mapState == 'sub'}
                     onClick={() => handleClick('main')}>
                    <MapApp client:load enabled={mapState == 'main'} src={'/kamimapTop.webp'} size={'100%'}></MapApp>
                </div>
            </div>
            <div className="flex justify-center" hidden={mapState == 'main'}>
                <div id="sub-map" style={{"height": "16rem", "width": "33%"}} hidden={mapState == 'main'}
                     onClick={() => handleClick('sub')}>
                    <MapApp client:load enabled={mapState == 'sub'} src={'/kamimapBot.webp'}></MapApp>
                </div>
            </div>
            <div id="planets-menu" className="h-24 w-1/2 flex flex-row justify-between self-center" hidden={mapState == 'main' || mapState == 'sub'}>
                {moons.map((moon, i) => {
                    return (
                        <div key={'moon-container-' + i} className="h-full" style={{"marginTop": moon.margin + "rem"}} hidden={mapState == 'main' || mapState == 'sub'}>
                            <MoonComponent key={'moon-' + i} moon={moon} ></MoonComponent>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
