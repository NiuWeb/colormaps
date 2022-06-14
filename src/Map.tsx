import { useMemo } from "react";
import { createColormap, ICreateColormap } from "./colormap";;
export function Map(props: ICreateColormap & { value: number }) {

    const { min, max, value } = props;

    const map = useMemo(() => {
        try {
            return createColormap(props);
        }
        catch (e) {
            alert(e);
            return (value: number) => "#000000" || value;
        }
    }, [props]);

    // array of 100 steps between min and max
    const steps = useMemo(() => {
        const step = (max - min) / 100;
        return Array.from({ length: 100 }, (_, i) => min + i * step);
    }, [min, max]);

    return <div>
        <div className="map-value" style={{ backgroundColor: map(value) }}>
            current color: {map(value)}    
        </div>
        <div className="Map">
            {steps.map(step => <div key={step} className="map-step" style={{
                backgroundColor: map(step)
            }} />)}
        </div>
    </div>
}