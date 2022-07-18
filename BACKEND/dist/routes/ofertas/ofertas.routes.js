"use strict";

var _ofertas = _interopRequireDefault(require("../../actions/ofertas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createOferta = ctx => {
  _ofertas.default.addOferta(ctx.request.body);

  ctx.body = {
    message: 'Oferta was created'
  };
  return ctx;
};

exports.getMyOfertas = ctx => {
  const ID = ctx.params.id;

  const response = _ofertas.default.getMyOfertas(ID);

  ctx.body = response;
  return ctx;
};