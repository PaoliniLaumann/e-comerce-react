import  Swal from 'sweetalert2'


const FormFail = () => {

    Swal.fire({
        icon: "error",
        title: "Error...",
        text: "Por favor completa todos los campos",
      });
 
}

export default FormFail
