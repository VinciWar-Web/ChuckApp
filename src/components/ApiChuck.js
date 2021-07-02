import React, { useEffect, useState } from 'react'
import { useChuck } from '../hooks/useChuck'

import imgLoading from '../img/loading.gif'
import imgFondo from '../img/fondo.jpg'

const ApiChuck = () => {
    
    const [radio, setRadio] = useState('')
    const [submit, setSubmit] = useState('')
    
    const [categorias, setCategorias] = useState([])
    
    const { loading, data } = useChuck(`https://api.chucknorris.io/jokes/random?category=${ encodeURI( submit ) }`)



    useEffect(()=>{
        categoria()
    },[])

    const categoria = async () => {

        const url = 'https://api.chucknorris.io/jokes/categories'

        const resp = await fetch(url)
        const data = await resp.json()

        setCategorias(data)
    }
    


    const handleCheck = (e) => {
        
        setRadio(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmit([radio, ...submit])
    }
    
   

    return (
        <div className="container" >

            <div className="container-fondo">
                <img className="img-fondo" src={ imgFondo } alt="fondo"/>
            </div>

            <div className="overlay-header"></div>



            <div className="container-inf">   

                <div className="container-titulo">
                    <h1 className="titulo">Api Chuck</h1>
                </div>
                    
                    
                {
                    loading 
                    ?
                    (
                        <div className="container-loading">
                                <img className="img-loading" src={ imgLoading } alt="loading"/>
                            </div>
                        )
                            :
                        (
                            <div className="container-data">
                                <p className="data">{ data.value }</p>
                            </div>
                        )
                    }



                <form onSubmit={ handleSubmit }>

                    <div className="container-categoria">

                         <button>Siguiente</button>
            
                        <select onChange={ handleCheck } className="categoria">
                                <option value="">Seleccionar una Categoria</option>
                                {
                                    categorias.map( item => (
                                        <option key={ item }>{ item }</option>
                                    ))
                                 }
                                 
                        </select>
                        
                    </div>
                </form>
            </div> 
        </div>
        
    )
}

export default ApiChuck


