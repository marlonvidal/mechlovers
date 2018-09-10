module.exports = function () {
    let item = {};
    item.perfilAcesso = {};
    item.perfilAcesso.ADMIN = 'ADMIN';
    item.perfilAcesso.OPERADOR = 'OPERADOR';

    return {
        perfilAcesso: item.perfilAcesso
    };
}