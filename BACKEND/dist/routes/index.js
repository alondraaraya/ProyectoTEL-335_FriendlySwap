"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _carrito = _interopRequireDefault(require("./carrito/carrito.routes"));

var _publicacion = _interopRequireDefault(require("./publicacion/publicacion.routes"));

var _ofertas = _interopRequireDefault(require("./ofertas/ofertas.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = new _koaRouter.default(); //Rutas control pasado

router.get('/productos', _carrito.default.getAllProducts);
router.get('/productos/id/:id', _carrito.default.getProductsByID);
router.get('/productos/marca/:BRAND', _carrito.default.getProductsByBrand);
router.get('/carrito/productos', _carrito.default.getAllItem);
router.get('/carrito/productos2/:parametro', _carrito.default.getProductsByBrandOrID);
router.post('/carrito/productos', _carrito.default.addProduct); //Rutas publicaciones

router.get('/publicaciones', _publicacion.default.getAllPublicacion);
router.get('/publicaciones/id/:id', _publicacion.default.getPublicacionByID);
router.get('/publicaciones/name/:name', _publicacion.default.getPublicacionByName);
router.put('/publicaciones/publicacion/', _publicacion.default.createPublicacion);
router.get('/publicaciones/ofertas/:idOferta', _publicacion.default.getOfertaID_PublicacionByID);
router.get('/publicaciones/ofertas/:id', _publicacion.default.getOfertas); //Error, solo permite leer y no modificar el arreglo. Logica está bien

router.delete('/publicaciones/:id/:idOferta/:bool', _publicacion.default.removePublicacion); //Rutas ofertas

router.put('/ofertas/oferta', _ofertas.default.createOferta);
router.get('/ofertas/id/:id', _ofertas.default.getMyOfertas);
var _default = router;
exports.default = _default;