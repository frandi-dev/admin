import Swal from "sweetalert2";

const error = async (text) => {
  return Swal.fire({
    title: "Error!",
    text: text,
    icon: "error",
    confirmButtonText: "OKE",
  });
};

const success = async (text) => {
  return Swal.fire({
    icon: "Success!",
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};

const message = { error, success };

export default message;
