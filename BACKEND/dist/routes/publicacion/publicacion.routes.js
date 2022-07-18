"use strict";

var _publicaciones = _interopRequireDefault(require("../../actions/publicaciones"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Ok
exports.getAllPublicacion = ctx => {
  ctx.body = _publicaciones.default.getPublicaciones();
  return ctx;
}; //Ok


exports.getPublicacionByID = ctx => {
  const ID = ctx.params.id;

  const response = _publicaciones.default.getPublicacionByID(ID);

  ctx.body = response;
  return ctx;
}; //Ok


exports.getOfertaID_PublicacionByID = ctx => {
  const ID = ctx.params.idOferta;

  const response = _publicaciones.default.getOfertaID_PublicacionByID(ID);

  ctx.body = response;
  return ctx;
}; //Ok


exports.getPublicacionByName = ctx => {
  const name = ctx.params.name;

  const response = _publicaciones.default.getPublicacionByName(name);

  ctx.body = response;
  return ctx;
}; //Ok


exports.createPublicacion = ctx => {
  _publicaciones.default.addPublicacion(ctx.request.body);

  ctx.body = {
    message: 'User was created'
  };
  return ctx;
}; //falla


exports.removePublicacion = ctx => {
  console.log(ctx.params.bool);

  if (ctx.params.bool == 0) {
    ctx.body = {
      message: 'Oferta eliminada'
    };

    _publicaciones.default.removeOferta(ctx.params.id, ctx.params.idOferta);
  } else if (ctx.params.bool == 1) {
    ctx.body = {
      message: 'Oferta aceptada y publicacion eliminada'
    };

    _publicaciones.default.removePublicacion(ctx.params.id);
  }

  return ctx;
};

exports.getOfertas = ctx => {
  const ID = ctx.params.id;

  const response = _publicaciones.default.getOfertas(ID);

  ctx.body = response;
  return ctx;
};