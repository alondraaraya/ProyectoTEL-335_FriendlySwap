import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import PostsVendedor from './PostsVendedor'

function PostsList (props) {
    return (
        <section id='PostsList'>
            <Container>
                
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    PostsVendedor(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default PostsList