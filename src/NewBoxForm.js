import { useState, React } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from 'uuid';

const NewBoxForm = ({createbox}) => {
    const INITIAL_STATE = {
        color: "",
        height: "",
        width: ""
    }
    const [formData, setFormdata] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata(data => ({
            ...data,
            [name]: value
        }))
    }

 
    const gatherdata = (e) => {
        e.preventDefault();
        createbox({...formData, id: uuidv4()})
        setFormdata(INITIAL_STATE);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     <Box color={formData.color} height={formData.height} width={formData.width} handleDelete={handleDelete} />
    //     setFormdata(INITIAL_STATE);
    // }

    return (
        <form onSubmit={gatherdata}>
            <label htmlFor="backgroundColor">Background Color</label>
            <input 
            id="backgroundColor" 
            type="text" 
            name="backgroundColor"
            placeholder="Background Color" 
            value={formData.color}
            onChange={handleChange}/>

            <label htmlFor="height">Height</label>
            <input 
            id="height" 
            type="text" 
            name="height"
            placeholder="Height" 
            value={formData.height}
            onChange={handleChange}/>

            <label htmlFor="width">Background Color</label>
            <input 
            id="width" 
            type="text" 
            name="width"
            placeholder="Width" 
            value={formData.width}
            onChange={handleChange}/>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;