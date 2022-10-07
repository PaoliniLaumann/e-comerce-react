import  Swal from 'sweetalert2'


const StockFail = () => {

    Swal.fire({
        icon: "error",
        title: "Lo Sentimos...",
        text: "No hay Stock de este producto",
      });
 
}

export default StockFail
