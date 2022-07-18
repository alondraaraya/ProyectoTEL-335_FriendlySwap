import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import MisPublicaciones from './MisPublicaciones'

function ListaPublicaciones (props) {
    return (
        <section id='PostsList'>
            <Container>
                
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    MisPublicaciones(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default ListaPublicaciones