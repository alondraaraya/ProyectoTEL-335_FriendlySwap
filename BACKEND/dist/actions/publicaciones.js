"use strict";

var _publicacionDATA = _interopRequireDefault(require("../data/publicacionDATA.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.getPublicaciones = () => {
  return _publicacionDATA.default;
};

exports.getPublicacionByID = id => {
  let publicacionesEncontradas = [];

  for (let i = 0; i < _publicacionDATA.default.length; i++) {
    if (id == _publicacionDATA.default[i].id_vendedor) {
      publicacionesEncontradas.push(_publicacionDATA.default[i]);
    }
  }

  return publicacionesEncontradas;
};

exports.getPublicacionByName = name => {
  let publicacionesEncontradas = [];

  for (let i = 0; i < _publicacionDATA.default.length; i++) {
    if (name == _publicacionDATA.default[i].nombre) {
      publicacionesEncontradas.push(_publicacionDATA.default[i]);
    }
  }

  return publicacionesEncontradas;
};

exports.addPublicacion = publicacionData => {
  const publicacion = {
    id: publicacionData.id,
    id_vendedor: publicacionData.id_vendedor,
    categoria: publicacionData.categoria,
    nombre: publicacionData.nombre
  };

  _publicacionDATA.default.push(publicacion);
};

exports.removePublicacion = publicacionID => {
  _publicacionDATA.default = (_publicacionDATA.default.filter(publicacion => {
    return publicacion.id !== publicacionID;
  }), function () {
    throw new Error('"' + "publicaciones" + '" is read-only.');
  }());
};

exports.removeOferta = (ofertaID, id) => {
  for (let i = 0; i < _publicacionDATA.default.length; i++) {
    if (id == _publicacionDATA.default[i].id) {
      for (let j = 0; j < _publicacionDATA.default[i].ofertas.length; j++) {
        if (_publicacionDATA.default[i].ofertas.length[j] == ofertaID) {
          _publicacionDATA.default[i].ofertas.length[j] = -1;
        }
      }
    }
  }
};

exports.getOfertaID_PublicacionByID = id => {
  let lista = [];

  for (let i = 0; i < _publicacionDATA.default.length; i++) {
    if (id == _publicacionDATA.default[i].id) {
      lista.push(_publicacionDATA.default[i].ofertas);
    }
  }

  return lista;
};

exports.getOfertas = id => {
  let ofertasEncontradas = [];

  for (let i = 0; i < _publicacionDATA.default.length; i++) {
    if (id == _publicacionDATA.default[i].id_vendedor) {
      return _publicacionDATA.default[i].ofertas;
    }
  }

  return ofertasEncontradas;
};