//Criando modulo de validação de email
    class Cliente{
        constructor(nome,idade,email){
            this.nome = nome;
            this.idade = idade;
            this.email = email;
        }
    }

    //validação de email (se não existir o @ o email será invalido)
    function validarEmail(cliente){
        if(cliente.email.indexOf("@")==-1){
            return "Email inválido"
        }
    }

    //exportando
    module.exports = {
        Cliente,
        validarEmail
    }