import React, { useEffect, useState } from 'react';


const Form = () => {

    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        fechaDeLanzamiento: "",
        rating: "",
        generos: [],
        plataformas: []
        });

    const [errors, setErrors] = useState({});

    const formValidator = (form) => {
        const errors = {};
        if(!form.nombre.length) errors.name = "Debe ingresar un nombre";
        if(form.descripcion.length < 10) errors.descripcion = "La descripcion debe tener al menos 10 caracteres";
        if(form.rating > 5) errors.rating = "El rating no puede superar los 5 puntos";
        return errors;
    };

    useEffect(()=>{
        setErrors(formValidator(form))
    },[form])
    
    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if(!Object.keys(errors).length){
            console.log(form)
            setForm({
                nombre: "",
                descripcion: "",
                fechaDeLanzamiento: "",
                rating: ""
            })
        } else{
            alert("error")
        }
    };

    return(
        <div>
        <h2>POST A VIDEOGAME</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" onChange={changeHandler} name="nombre" value={form.nombre}/>
            </div>
            <div>
                <label htmlFor="descripcion">Descripción</label>
                <input type="text" onChange={changeHandler} name="descripcion" value={form.descripcion}/>
            </div>
            <div>
                <label htmlFor="fechaDeLanzamiento">Fecha de lanzamiento</label>
                <input type="date" onChange={changeHandler} name="fechaDeLanzamiento" value={form.fechaDeLanzamiento}/>
            </div>
            <div>
                <label htmlFor="rating">Rating</label>
                <input type="number" onChange={changeHandler} name="rating" value={form.rating}/>
            </div>
            <button type="submit">POST</button>
        </form>
        </div> 
    )
};


export default Form;

/// expresiones regulares para pedir dos decimales?? /^\d+\.\d{2,2}$/
// o esta "^[0-9]+(\\,[0-9]{1,2})?$"