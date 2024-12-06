// Funciones 

const getUsuarioActivo= (nombre) =>({
    uid: 'ABC567',
    username: nombre
  })

const usuarioActivo = getUsuarioActivo('Ana');
console.log(usuarioActivo);