import { useState, useEffect } from "react";
import { IColormapColor } from "./colormap";

export function Edit({ map, onChange }: {
    map: IColormapColor[];
    onChange: (map: IColormapColor[]) => void;
}) {

    void onChange;

    const [value, setValue] = useState("");

    useEffect(() => {
        setValue(map
            .map(row => row.color + " " + row.factor)
            .join("\n"));
    }, [map]);

    function edit() {
        const lines = value.split("\n");
        const newMap: IColormapColor[] = [];
        for (const line of lines) {
            const [color, factor] = line.split(/\s+/);
            newMap.push({
                color: color.trim(),
                factor: Number(factor) || 0
            });
        }
        onChange(newMap);
    }

    return <div id="edit">
        <textarea
            placeholder="Edit colormap"
            value={value}
            onChange={e => setValue(e.target.value)} />
        <button onClick={edit}>Apply</button>
    </div>
}