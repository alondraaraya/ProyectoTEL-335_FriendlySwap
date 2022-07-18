import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import PostsOfertar from './PostOfertar'
import BotonNuevaOferta from '../../actions/BotonNuevaOferta'

function PostsListOfertar (props) {
    return (

        <section id='PostsList'>
            <Container>
            <BotonNuevaOferta/>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    PostsOfertar(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default PostsListOfertar