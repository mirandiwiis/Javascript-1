// Crea 2 objetos que representen usuarios
// Crea un listado de usuarios y hacer una función que simule un buscador que dado un texto te devuelva los usuarios que coincidan con ese texto 


const users = [

    {
        name: 'Samu Ramos',
        email: 'samu97rm@gmail.com',
        brands: [metricoolES]
    },

    {
        name: 'Laura Eshi',
        email: 'lauraesteban@metricool.com',
        brands: [metricoolES]
    },

]

function searchUsers(searchString) {

    return users.filter(function (user) {
        return user.name.includes(searchString);
    });

}

searchUsers()

// declarar una funcion que recorra la array y compruebe conrtiene el string buscado
