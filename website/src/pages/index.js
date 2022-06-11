import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import movies from "../components/Data/movies"

const IndexPage = () => {
  
  const cinema = movies.map((item)=>{
    return(
      <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-2 mb-2" key={item.id}>
        <div className="card shadow rounded">
          <div className="card-body">
            <p className="text-center">
              <img src={item.img} alt="imagen-pelicula-1" className="rounded shadow" />
            </p>
            <h3>{item.name}</h3>
            <p>{(item.synopsis.substring(0,100)) + "..."}</p>
            <div className="container">
              <div className="row">
                <a href={"./details/"+item.id} className="btn btn-success btn-block">Ver pelicula</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return(
    <Layout>
      <Seo title="Home" />
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <h1 className="text-center">Menu principal</h1>
          </div>
        </div>
        <div className="row mt-5">
          {
            cinema
          }
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage
