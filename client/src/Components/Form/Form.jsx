import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { getGeneros } from '../../redux/actions'
import style from './form.module.css'

const Form = () => {
    const dispatch = useDispatch();
    const generos = useSelector(state=>state.generos)
    const plataformas = ["PC","PS5","PS4","PS3","PS2","Xbox One","Xbox 360","Wii","Nintendo","Sega","Atari","iOS","Android","Linux"]

    const [form, setForm] = useState({
        nombre: "",
        descripcion: "",
        imagen: './noImage.jpg',
        fechaDeLanzamiento: "",
        rating: "",
        generos: [],
        plataformas: []
        });

    useEffect(()=>{
        setErrors(formValidator(form))
        dispatch(getGeneros())
    },[dispatch,form])   

    const [errors, setErrors] = useState({});

    const formValidator = (form) => {
        const errors = {};
        const fecha = new Date(form.fechaDeLanzamiento);
        const hoy = new Date();

        if(fecha > hoy) errors.fechaDeLanzamiento = "La fecha no puede ser posterior al día de hoy"
        if(!form.nombre.length) errors.nombre = "Debe ingresar un nombre";
        if(!form.descripcion.length) errors.descripcion = "Debe ingresar una descripcion"
        if(form.rating > 5) errors.rating = "El rating no puede superar los 5 puntos";
        if(form.rating < 0) errors.rating = "El rating no puede ser menor a 0 puntos";
        if(!form.plataformas.length) errors.plataformas = "Debe seleccionar al menos una plataforma"
        return errors;
    };

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const  changeHandlerArr= (event) => {
        setForm({
          ...form,
          [event.target.name]: [...event.target.options].filter(o => o.selected).map(o => o.value)
        });
      };
    
    const submitHandler = async (event) => {
        event.preventDefault()
        if(!Object.keys(errors).length){
            try {
                const post = await axios.post('http://localhost:3001/videogames',{form})
                console.log(post.data)
                alert(post.data)
                setForm({
                    nombre: "",
                    descripcion: "",
                    fechaDeLanzamiento: "",
                    rating: "",
                    generos: [],
                    plataformas: []
                })
            } catch (error) {
                console.error(error)
            }
        } else{
            alert("Debes llenar bien el formulario")
        }
    };

     return(
        <div className={style.container}>
        <div className={style.prueba}>
        <form onSubmit={submitHandler} className={style.form}>
        <h2>POST A VIDEOGAME</h2>
            <div>
                <label htmlFor="nombre" className={style.label} required>Nombre</label>
                <input type="text" onChange={changeHandler} name="nombre" value={form.nombre} className={style.input}/>
                <p>{errors.nombre && errors.nombre}</p>
            </div>
            
            <div>
                <label htmlFor="descripcion" className={style.label} required>Descripción</label>
                <input type="text" onChange={changeHandler} name="descripcion" value={form.descripcion} className={style.input}/>
                <p>{errors.descripcion && errors.descripcion}</p>
            </div>

            <div>
                <label htmlFor="fechaDeLanzamiento" className={style.label}>Fecha de lanzamiento</label>
                <input type="date" onChange={changeHandler} name="fechaDeLanzamiento" value={form.fechaDeLanzamiento} className={style.input}/>
                <p>{errors.fechaDeLanzamiento && errors.fechaDeLanzamiento}</p>
            </div>

            <div>
                <label htmlFor="rating" className={style.label}>Rating</label>
                <input type="number" onChange={changeHandler} name="rating" value={form.rating} placeholder="Min: 0 Max:5" className={style.input}/>
                <p>{errors.rating && errors.rating}</p>
            </div>

            <div>
            <label htmlFor="generos" className={style.label}>Generos</label>
                <select name="generos" defaultValue={[]} onChange={changeHandlerArr} multiple>
                    <option disabled value="default">Presionando ctrl, seleccione uno o más generos</option>
                    {
                    generos?.map(gen=>{return(<option key={gen.id} value={gen.nombre}>{gen.nombre}</option>)})
                    }
                </select>
            </div>

            <div>
            <label htmlFor="plataformas" className={style.label} required>Plataformas</label>
                <select name="plataformas" defaultValue={[]} onChange={changeHandlerArr} multiple>
                    <option disabled value="default">Presionando ctrl, seleccione una o más plataformas</option>
                    {
                    plataformas?.map((plat,index)=>{return(<option key={index} value={plat}>{plat}</option>)})
                    }
                </select>
                <p>{errors.plataformas && errors.plataformas}</p>
            </div>

            <button type="submit" disabled={Object.keys(errors).length}>POST</button>
        </form>
        </div>
        </div> 
    )
};


export default Form;



// tengo un componente home en el cual se renderizan videojuegos, como puedo hacer un select para hacer un ordenamiento ascendente o descendente por una propiedad "rating" y/o por orden alfabetico, utilizando redux, react y react-redux y js