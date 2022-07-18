import ProductList from "../components/ProductList";


export default FunctionSearch = (terminoBusqueda)=>{
    <Button variant="primary" onClick={handleShow}>
        Carrito de compras
    </Button>
    var resultadosBusqueda=ProductList.filter((Product)=>{
      if(Product.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ){
        return Product;
      }
    });
}