import React from "react";
import { Button , Form , FormControl} from 'react-bootstrap';


export default function BotonBusqueda(){
    function handleChangeSearch(e) {

        console.log(e.target.value);
      }

    return(
    <Form className="d-flex">
    <FormControl
      type="search"
      placeholder="Buscar"
      className="me-2"
      aria-label="Buscar"
      onChange = {handleChangeSearch}
    />
    <Button variant="primary" > 
          Buscar
        </Button>
    </Form>
    );

}