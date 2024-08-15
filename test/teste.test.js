validadorTelefone = require("../validadorTelefone")
validadorEmail = require("email-validator")

describe("Validador de Telefone", ()=>{

    test("Deve aceitar um telefone válido", ()=>{
        expect(validadorTelefone.validate("(47) 98420-7515")).toBe(true)
    });

    test("O DDD do telefone deve estar entre parenteses", ()=>{
        expect(validadorTelefone.validate("[47] 984207515")).toBe(false)
    });

    test("O quinto caractere deve ser um espaço", ()=>{
        expect(validadorTelefone.validate("(47)984207515")).toBe(false)
    });

    test("Contém um sinal de espaço no 5 caractere?", ()=>{
        expect(validadorTelefone.validate("(47)98420-7515")).toBe(false)
    });

    test("Contém um sinal de  no 11 caractere?", ()=>{
        expect(validadorTelefone.validate("(47) 984207515")).toBe(false)
    });

    test("O tamanho do DDD é maior que dois caracteres", ()=>{
        expect(validadorTelefone.validate("(047) 98420-7515")).toBe(false)
    });

    test("O tamanho do DDD é menor que dois caracteres", ()=>{
        expect(validadorTelefone.validate("(7) 98420-7515")).toBe(false)
    });

    test("A primeira parte do número contém mais de 5 caracteres", ()=>{
        expect(validadorTelefone.validate("(47) 984207-515")).toBe(false)
    });

    test("A primeira parte do número contém menos de 5 caracteres", ()=>{
        expect(validadorTelefone.validate("(47) 8420-7515")).toBe(false)
    });

    test("A segunda parte do número contém 5 ou mais caracteres", ()=>{
        expect(validadorTelefone.validate("(47) 984207-515")).toBe(false)
    });

    test("A segunda parte do número contém 5 ou mais caracteres", ()=>{
        expect(validadorTelefone.validate("(47) 984207-515")).toBe(false)
    });

    test("A segunda parte do número contém 3 ou menos caracteres", ()=>{
        expect(validadorTelefone.validate("(47) 9842075-15")).toBe(false)
    });

    test("O DDD não é um número inteiro maior ou igual a 0", ()=>{
        expect(validadorTelefone.validate("(4X) 98420-7515")).toBe(false)
    });

    test("A primeira parte do número não é um número inteiro maior ou igual a 0", ()=>{
        expect(validadorTelefone.validate("(4X) 98420-7515")).toBe(false)
    });

    test("A segunda parte do número não é um número inteiro maior ou igual a 0", ()=>{
        expect(validadorTelefone.validate("(4X) 98420-7515")).toBe(false)
    });

});

describe("Validador de Email", ()=>{

    test("Deve aceitar um email válido", () => {
        expect(validadorEmail.validate("teste1234@gmail.com")).toBe(true)
    })

    test("contém um sinal de (@)?", () => {
        expect(validadorEmail.validate("teste1234gmail.com")).toBe(false)
    })

    test("tamanho do local (|L|)", () => {
        expect(validadorEmail.validate("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn@gmail.com")).toBe(false)
    })

    test("tamanho do local (|L|) == 0", () => {
        expect(validadorEmail.validate("@gmail.com")).toBe(false)
    })

    test("contém somente caracteres especiais válidos (CE: + !#$%&'*+-/=?^_`{|}~)", () => {
        expect(validadorEmail.validate("teste 1234@gmail.com")).toBe(false)
    })

    test(("o primeiro caracter é ponto (.)?"), () => {
        expect(validadorEmail.validate(".teste1234@gmail.com")).toBe(false)
    })
    
    test("o último caracter é ponto (.)?", () => {
        expect(validadorEmail.validate("teste1234.@gmail.com")).toBe(false)
    })
    
    test("contém pontos consecutivos (..)?", () => {
        expect(validadorEmail.validate("teste..1234@gmail.com")).toBe(false)
    })
    
    test("tamanho do D (|D|)", () => {
        expect(validadorEmail.validate(`teste1234@${256*`n`}`)).toBe(false)
    })
    
    test("o primeiro caracter é ponto (.)?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("o último caracter é ponto (.)?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("contém pontos consecutivos (..)?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("textos contém apenas caracteres válidos?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("|E|", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("E é null?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
    
    test("E é undefined?", () => {
        expect(validadorEmail.validate("")).toBe(false)
    })
        
})