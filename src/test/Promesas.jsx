import React from 'react'

const Promesas = () => {
    let x = 0
    console.log(x)

    let pagara =new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(`50`);
           /*  reject(`No pago`); */
        }, 1000);
        
    })

    pagara.then((res) => {
        if (res === 50) {
            console.log(`pago justo`);
        } else if (res < 50) {
            console.log(`pago menos`);
        } else {
            console.log(`pago mas`);
        }
        
        
    });

    pagara.catch((err) => {
        console.log(err);
        if (err == "no pago") {
            //hacer algo
        } else {
            //volver intentar cobrar
        }
    });



    
    

   
  return (
    <div>
     promesas

    </div>
  )
}

export default Promesas
