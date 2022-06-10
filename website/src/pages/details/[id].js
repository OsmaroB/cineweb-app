import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Detalle = ({id}) => (
  <Layout>
    <Seo title="Detalle de peliculas" />
    <div className="container">
        <div className="row mt-5 mb-5">
            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                <h1>Titulo de la pelicula {id}</h1>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <img src="" alt="Imagen de la pelicula" />
            </div>
        </div>
        <div className="row mt-3 mb-3">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <p><b>Horarios: </b> Lunes a viernes de 6:00PM A 8:00PM</p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <p><b>Protagonistas: </b> Reparto general - es el reparto</p>
            </div>
        </div>
        <div className="row mt-3 mb-3">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                <p className="text-left"><b>Sinopsis:</b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias, aperiam rerum? Accusamus illum atque praesentium. Nam neque facere aspernatur pariatur, accusantium possimus tempora vero eaque, enim beatae veritatis quis aperiam!
                Fugit ad impedit debitis assumenda voluptates soluta praesentium fugiat quo magni, facere id a cupiditate sed dolorem, obcaecati molestiae officiis quisquam similique ipsa at esse sunt. Praesentium omnis possimus odio?
                Magnam sint nisi omnis, vero consequatur aut nobis in minus illo beatae non debitis quia reiciendis corrupti esse accusamus delectus suscipit, voluptate explicabo. Recusandae temporibus praesentium cupiditate! Minus, ut aspernatur?</p>
            </div>
        </div>
    </div>
  </Layout>
)

export default Detalle
