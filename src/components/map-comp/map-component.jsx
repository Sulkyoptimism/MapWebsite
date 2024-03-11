import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "../common-component.styles.css";
export const MapApp = (props) => {
    return (
        <TransformWrapper initialScale={1} minScale={1} disabled={!props.enabled}>
            <TransformComponent wrapperClass='wrapper-class'>
                <img src={props.src} alt={props.src} width={props.size} height={'100%'}/>
            </TransformComponent>
        </TransformWrapper>
    );
};
