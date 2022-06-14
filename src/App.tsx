import { useState } from 'react';
import './App.css';
import { IColormapColor } from './colormap';
import { Edit } from './Edit';
import { Map } from './Map';

function App() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [value, setValue] = useState(0);
    const [map, setMap] = useState<IColormapColor[]>([
        {
            factor: 0,
            color: "ff6400"
        },
        {
            factor: 0.5,
            color: "fff000"
        },
        {
            factor: 1,
            color: "1aff00"
        }
    ]);
    void setMap;

    return <div className="App">
        <table>
            <tbody>
                <tr>
                    <td>min</td>
                    <td><input type="number" value={min} onChange={e => setMin(Number(e.target.value))} /></td>
                </tr>
                <tr>
                    <td>max</td>
                    <td><input type="number" value={max} onChange={e => setMax(Number(e.target.value))} /></td>
                </tr>
                <tr>
                    <td>value</td>
                    <td><input type="number" value={value} onChange={e => setValue(Number(e.target.value))} /></td>
                </tr>
            </tbody>
        </table>
        <Map value={value} min={min} max={max} map={map} />

        <Edit map={map} onChange={setMap} />
    </div>
}

export default App;
