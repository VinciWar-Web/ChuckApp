import React, { useState } from 'react'
import { useChuck } from '../hooks/useChuck'

import imgLoading from '../img/loading.gif'
import imgFondo from '../img/fondo.jpg'

const ApiChuck = () => {
    
    const [radio, setRadio] = useState('')
    const [submit, setSubmit] = useState('')
    
    const { loading, data } = useChuck(`https://api.chucknorris.io/jokes/random?category=${ encodeURI( submit ) }`)



    const handleCheck = (e) => {
        
        setRadio(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        setSubmit([radio])

        
    }
    
   



    return (
        <div className="container" >

            <div className="container-fondo">
                <img className="img-fondo" src={ imgFondo } alt="fondo"/>
            </div>

            <div className="overlay-header"></div>

            <div className="container-inf">   

                    <h1 className="titulo">Api Chuck</h1>
                    
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

                        <div className="container-btn">
                            <button>Siguiente</button>
                        </div>

                        <div className="container-radio">
                            
                            <label htmlFor="checked">Animal</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="animal"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Career</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="career"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Celebrity</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="celebrity"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Dev</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="dev"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Explicit</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="explicit"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Fashion</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="fashion"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Food</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="food"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">History</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="history"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Money</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="money"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Movie</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="movie"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Music</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="music"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Political</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="political"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Religion</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="religion"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Science</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="science"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Sport</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="sport"
                                onChange={ handleCheck }
                            />

                            <label htmlFor="checked">Travel</label>
                            <input 
                                type="radio"
                                name="checked" 
                                value="travel"
                                onChange={ handleCheck }
                            />

                        </div>
                    </form>
            </div> 
        </div>
        
    )
}

export default ApiChuck


