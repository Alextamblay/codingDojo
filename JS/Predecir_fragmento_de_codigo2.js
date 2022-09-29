function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/*


//console.log= [Paula, Smith, Calle Principal 1234, St. Louis, MO, 12345]

diagrama en t
variables               valores
auntContactInfo       | [Paula, Smith, Calle Principal 1234, St. Louis, MO, 12345]


*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}

/*



// console.log= [brócoli, helado, croqueta de papa]

diagrama en t
variables               valores
produce             |  [manzanas, naranjas]
frozen              |  [brócoli, helado]

*/


var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);


/*


// console.log= [Bambi, Beetlejiuce, Toy Story, Zoro]

diagrama en t 
variables              valores
movieLibrary       |  [Bambi, E.T., Toy Story]

*/