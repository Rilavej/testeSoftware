exports.validate = function (telefone) {

    if (!telefone) return false;

    if (telefone[0] != "(" || telefone[3] != ")") return false;

    if (telefone[4] != " ") return false;

    if (telefone[10] != "-") return false;

    /* Divide a string com base em uma expressão regular.
        Nesse caso, a expressão regular /[()]/ utiliza os caracteres de parênteses
        como delimitadores
    */
    let dddString = telefone.split(/[()]/)[1];
    let ddd = parseInt(telefone.split(/[()]/)[1]);
    if (dddString.length != 2 || ddd.toString().length != 2) return false;

    let n1 = parseInt(telefone.split(' ')[1].split('-')[0]);
    let n1String = telefone.split(' ')[1].split('-')[0];
    if (n1String.length != 5 || n1String.toString().length != 5) return false;

    let n2 = parseInt(telefone.split('-')[1]);
    let n2String = telefone.split('-')[1];
    if (n2String.length != 4 || n2String.toString().length != 4) return false;

    if (!Number.isInteger(ddd) || Number.isInteger(ddd) && ddd < 0 ) return false;

    if (!Number.isInteger(n1) || Number.isInteger(n1) && n1 < 0 ) return false;
    
    if (!Number.isInteger(n2) || Number.isInteger(n2) && n2 < 0 ) return false;

    return true;
  
};