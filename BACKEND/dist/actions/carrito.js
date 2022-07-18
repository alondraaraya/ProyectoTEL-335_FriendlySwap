"use strict";

var _MOCK_DATA = _interopRequireDefault(require("../data/MOCK_DATA.json"));

var _carritoVerdadero = _interopRequireDefault(require("../data/carritoVerdadero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import productos from  "../data/carrito"
exports.getProducts = () => {
  return _MOCK_DATA.default;
};

exports.getProductsByID = id => {
  let productosEncontrados = [];

  for (let i = 0; i < _MOCK_DATA.default.length; i++) {
    if (id == _MOCK_DATA.default[i].id) {
      productosEncontrados.push(_MOCK_DATA.default[i]);
    }
  }

  return productosEncontrados;
};

exports.getProductsByBrand = brand => {
  let productosEncontrados = [];

  for (let i = 0; i < _MOCK_DATA.default.length; i++) {
    if (brand == _MOCK_DATA.default[i].marca) {
      productosEncontrados.push(_MOCK_DATA.default[i]);
    }
  } //deberia retornar un json


  return productosEncontrados;
};

exports.addProduct = id => {
  for (let i = 0; i < _MOCK_DATA.default.length; i++) {
    if (id == _MOCK_DATA.default[i].id) {
      _carritoVerdadero.default.push(_MOCK_DATA.default[i]);
    }
  }

  return _carritoVerdadero.default;
};

exports.getAllItem = () => {
  return _carritoVerdadero.default;
};

exports.getProductsByBrandOrID = parametro => {
  let productosEncontrados = [];

  for (let i = 0; i < _MOCK_DATA.default.length; i++) {
    if (parametro == _MOCK_DATA.default[i].marca) {
      productosEncontrados.push(_MOCK_DATA.default[i]);
    }
  }

  if (productosEncontrados.length == 0) {
    for (let i = 0; i < _MOCK_DATA.default.length; i++) {
      if (parametro == _MOCK_DATA.default[i].id) {
        productosEncontrados.push(_MOCK_DATA.default[i]);
      }
    }
  } //deberia retornar un json


  return productosEncontrados;
};