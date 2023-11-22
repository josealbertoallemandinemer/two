export const GuardarEnStorage=(clave, elemento)=>{

    let elementos= JSON.parse(localStorage.getItem(clave));
    console.log(elementos);


    if(Array.isArray(elementos)){

       elementos.push(elemento);

    }else{

        elementos= [elemento];


    }

    console.log(elementos);


    localStorage.setItem(clave, JSON.stringify(elementos));



    return elemento;
}