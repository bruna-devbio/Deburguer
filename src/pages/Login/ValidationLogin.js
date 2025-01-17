function ValidateInputs(values, erro) {
    let errors = {}

    if (erro === 400) {
        errors.email = "Email e/ou senha inválidos"
        errors.password = "Email e/ou senha inválidos"        
    }

    if (!values.email) {
        errors.email = "Por favor preencha o campo de e-mail"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato de e-mail inválido"
        errors.empty = false
    }

    if (!values.password) {
        errors.password = "Por favor preencha a senha"
        errors.empty = false
    } else if (values.password.lenght <= 6) {
        errors.password = "Insira no mínimo 6 caracteres"
        errors.empty = false
    }
    
    return errors;
}

export default ValidateInputs;