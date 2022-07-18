import { Container  } from "react-bootstrap"
import React from "react";
import './ProductList.css'
import PostsComprador from './PostsComprador'

function PostsListComprador (props) {
    return (
        <section id='PostsListComprador'>
            <Container>
                
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.products.map((product, index) => (
                                    PostsComprador(props,product,index)
                                ))
                            }
                        </ul>
                    </div>
                

            </Container>
        </section>
    )
}

export default PostsListComprador