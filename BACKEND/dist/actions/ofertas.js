"use strict";

var _ofertasDATA = _interopRequireDefault(require("../data/ofertasDATA.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.addOferta = ofertaData => {
  const oferta = {
    id: ofertaData.id,
    id_publicacion_oferta: ofertaData.id_publicacion_oferta,
    id_publicacion_ofertada: ofertaData.id_publicacion_ofertada,
    estado: ofertaData.estado,
    id_ofertador: ofertaData.id_ofertador
  };

  _ofertasDATA.default.push(oferta);
};

exports.getMyOfertas = id => {
  let ofertasEncontradas = [];

  for (let i = 0; i < _ofertasDATA.default.length; i++) {
    if (id == _ofertasDATA.default[i].id) {
      ofertasEncontradas.push(_ofertasDATA.default[i].id_publicacion_ofertada);
    }
  }

  return ofertasEncontradas;
};