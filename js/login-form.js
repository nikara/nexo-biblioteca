const submitBtn = document.getElementById("submitForm");
const form = document.getElementById("formContacto");
const mensajeEnviado = document.getElementById("mensajeEnviado");

const campos = {
    nombre: {
        input: document.getElementById("nombre"),
        container: document.getElementById("nombreContainer"),
        error: document.getElementById("nombreError")
    },
    apellidos: {
        input: document.getElementById("apellidos"),
        container: document.getElementById("apellidosContainer"),
        error: document.getElementById("apellidosError")
    },
    email: {
        input: document.getElementById("email"),
        container: document.getElementById("emailContainer"),
        error: document.getElementById("emailError")
    },
    asunto: {
        input: document.getElementById("asunto"),
        container: document.getElementById("asuntoContainer"),
        error: document.getElementById("asuntoError")
    },
    mensaje: {
        input: document.getElementById("mensaje"),
        container: document.getElementById("mensajeContainer"),
        error: document.getElementById("mensajeError")
    },
    privacidad: {
        input: document.getElementById("privacidad"),
        error: document.getElementById("privacidadError")
    }
};

function validarCampo(campo) {
    let mensaje = "";

    if (campo.input.id === "privacidad") {
        if (!campo.input.checked) {
            mensaje = "Debes aceptar la política de privacidad para enviar el mensaje.";
        }
    } else {
        const valor = campo.input.value.trim();

        if (valor === "") {
            mensaje = "Este campo es obligatorio.";
        } else if (
            campo.input.id === "nombre" &&
            valor.length < 2
        ) {
            mensaje = "El nombre debe tener al menos 2 caracteres.";
        } else if (
            campo.input.id === "apellidos" &&
            valor.length < 2
        ) {
            mensaje = "Los apellidos deben tener al menos 2 caracteres.";
        } else if (campo.input.id === "email") {
            const emailValido =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

            if (!emailValido) {
                mensaje = "Introduce una dirección de email válida.";
            }
        } else if (
            campo.input.id === "asunto" &&
            valor.length < 5
        ) {
            mensaje = "El asunto debe tener al menos 5 caracteres.";
        } else if (
            campo.input.id === "mensaje" &&
            valor.length < 10
        ) {
            mensaje = "El mensaje debe tener al menos 10 caracteres.";
        }
    }

    if (mensaje) {
        if (campo.container) {
            campo.container.classList.remove(
                "border-border",
                "border-green-500"
            );
            campo.container.classList.add("border-red-500");
        }

        campo.error.textContent = mensaje;
        campo.error.classList.remove("hidden");

        return false;
    }

    if (campo.container) {
        campo.container.classList.remove(
            "border-border",
            "border-red-500"
        );
        campo.container.classList.add("border-green-500");
    }

    campo.error.classList.add("hidden");

    return true;
}

function camposValidos() {
    const nombre = campos.nombre.input.value.trim();
    const apellidos = campos.apellidos.input.value.trim();
    const email = campos.email.input.value.trim();
    const asunto = campos.asunto.input.value.trim();
    const mensaje = campos.mensaje.input.value.trim();

    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        nombre.length >= 2 &&
        apellidos.length >= 2 &&
        emailValido &&
        asunto.length >= 5 &&
        mensaje.length >= 10 &&
        campos.privacidad.input.checked
    );
}

function activarSubmit() {
    submitBtn.disabled = !camposValidos();
}

Object.values(campos).forEach(campo => {
    campo.input.addEventListener("input", () => {
        mensajeEnviado.classList.add("hidden");
        activarSubmit();
    });

    campo.input.addEventListener("change", () => {
        if (campo.input.id === "privacidad") {
            validarCampo(campo);
        }

        activarSubmit();
    });

    campo.input.addEventListener("blur", () => {
        if (campo.input.id !== "privacidad") {
            validarCampo(campo);
        }
    });
});

form.addEventListener("submit", event => {
    event.preventDefault();

    let formularioValido = true;

    Object.values(campos).forEach(campo => {
        if (!validarCampo(campo)) {
            formularioValido = false;
        }
    });

    if (!formularioValido) {
        activarSubmit();
        return;
    }

    mensajeEnviado.classList.remove("hidden");

    form.reset();

    Object.values(campos).forEach(campo => {
        if (campo.container) {
            campo.container.classList.remove(
                "border-green-500",
                "border-red-500"
            );
            campo.container.classList.add("border-border");
        }

        campo.error.classList.add("hidden");
    });

    activarSubmit();
});

activarSubmit();