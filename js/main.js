$(document).ready(function(){
    $('#pacienteCEP').mask('00000 - 000');
    $('#pacienteTelefone').mask('(00) 00 00000-0000');
    $('#pacienteCPF').mask('000.000.000-00');

    $('form').validate({
        rules: {
            nomeCompleto: {
                required:true
            },
            pacienteEmail: {
                required: true,
                email: true
            },
            pacienteTelefone: {
                required:true,
            },
            pacienteCPF: {
                required: true,
            },
            pacienteEndereco: {
                required: true,
            },
            pacienteCEP: {
                required:true,
            }
        },
        messages: {
            nomeCompleto: {
                required: "Por favor, insira seu nome completo"
            },
            pacienteEmail: {
                required: "Por favor, digite seu email",
                email:"email inválido nome@dominio.com"
            },
            pacienteTelefone: {
                required: "(00) 00000-0000"
            },
            pacienteCPF: {
                required: "Digite um CPF válido"
            },
            pacienteEndereco: {
                required: "Digite seu endereço"
            },
            pacienteCEP: {
                required: "Digite um CEP válido"
            }
        }
    })
})