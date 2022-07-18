import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import Respuestas from './Respuestas'


function ListaRespuestas (props) {
    return (

        <section id='ListaRespuestas'>
            <Container>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    Respuestas(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default ListaRespuestas