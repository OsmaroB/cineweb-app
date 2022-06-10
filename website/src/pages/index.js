import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="text-center">Menu principal</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
          <div className="card shadow rounded">
            <div className="card-body">
              <img src="" alt="imagen-pelicula-1" />
              <h3>Pelicula 1</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio voluptate quisquam iusto velit earum ab, recusandae consequuntur inventore, ipsa unde debitis labore quasi? Dicta possimus similique nam quos id!
              </p>
              <div className="container">
                <div className="row">
                  <a href="./details/1" className="btn btn-success btn-block">Ver pelicula</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
