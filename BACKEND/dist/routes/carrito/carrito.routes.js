"use strict";

var _carrito = _interopRequireDefault(require("../../actions/carrito.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getAllProducts = ctx => {
  ctx.body = _carrito.default.getProducts();
  return ctx;
};

exports.getProductsByID = ctx => {
  const ID = ctx.params.id;

  const response = _carrito.default.getProductsByID(ID);

  ctx.body = response;
  return ctx;
};

exports.getProductsByBrand = ctx => {
  const BRAND = ctx.params.BRAND;
  console.log(BRAND);

  const response = _carrito.default.getProductsByBrand(BRAND);

  ctx.body = response;
  return ctx;
};

exports.addProduct = ctx => {
  let id = ctx.request.body.id;

  const response = _carrito.default.addProduct(id);

  ctx.body = response;
};

exports.getAllItem = ctx => {
  ctx.body = _carrito.default.getAllItem();
  return ctx;
};

exports.getProductsByBrandOrID = ctx => {
  const parametro = ctx.params.parametro;
  console.log(parametro);

  const response = _carrito.default.getProductsByBrandOrID(parametro);

  ctx.body = response;
  return ctx;
};