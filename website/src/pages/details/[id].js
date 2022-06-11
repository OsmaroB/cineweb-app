import React, {useEffect, useState} from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import movies from "../../components/Data/movies"

const Detalle = ({id}) => {
    const [movieList, setmovie] = useState([]);
    const readData = () => {
        const movie = movies.filter(movie => movie.id == id);
        setmovie(movie);
    }


    useEffect(() => {
        readData();
    }, [])
    
    return(
        <Layout>
            <Seo title="Detalle de peliculas" />
                {
                    movieList.map((item)=>{
                        return(
                            <div className="container" key={item.id}>
                                <div className="row mt-5 mb-5">
                                    <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                        <img src={item.img} className="rounded shadow" alt="Imagen de la pelicula" />
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <p><b>Horarios: </b>{item.schedule}</p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                        <p><b>Protagonistas: </b> {item.cast}</p>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <p className="text-left"><b>Sinopsis: </b>{item.synopsis}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </Layout>
    );
}

export default Detalle
