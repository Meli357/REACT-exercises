import { useRef, useState } from 'react';

export function CarDetails({ initialData }) {
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef() 
    
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')

    function handleModel() {
        setModel(modelRef.current.value)
    }

    function handleYear() {
        setYear(yearRef.current.value)
    }

    function handleColor() {
        setColor(colorRef.current.value)
    }

    function handleReset() { 
        modelRef.current.value = initialData.model
        yearRef.current.value = initialData.year
        colorRef.current.value = initialData.color
        console.log(model, year, color)
    }

    return (
        <form onSubmit={handleReset}>
            <h2>Model:</h2>
            <input name='model' defaultValue={initialData.model} ref={modelRef} onChange={handleModel} />
            <h2>Year:</h2>
            <input name='year' defaultValue={initialData.year} ref={yearRef} onChange={handleYear} />
            <h2>Color:</h2>
            <input name='color' defaultValue={initialData.color} ref={colorRef} onChange={handleColor} />
            <button type='submit'>Reset</button>
        </form>
    )
}