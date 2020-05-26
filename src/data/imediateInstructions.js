export const imediateInstructions = {
    header: [
        "Nome",
        "Assembly",
        "opcode",
        "entrada",
        "saída",
        "constante"
    ],
    data:[
        [
            {
                text: "soma"
            },
            {
                text: "addi"
            },
            {
                text: "001000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "valor"
            },
        ],
        [
            {
                text: "carregar"
            },
            {
                text: "lw"
            },
            {
                text: "100011"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "endereço"
            },
        ],
        [
            {
                text: "salvar"
            },
            {
                text: "sw"
            },
            {
                text: "100011"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "endereço"
            },
        ],
        [
            {
                text: "e"
            },
            {
                text: "andi"
            },
            {
                text: "001100"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "valor"
            },
        ],
        [
            {
                text: "ou"
            },
            {
                text: "ori"
            },
            {
                text: "001101"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "valor"
            },
        ],
        [
            {
                text: "ramo se =="
            },
            {
                text: "beq"
            },
            {
                text: "000100"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "endereço"
            },
        ],
        [
            {
                text: "ramo se !="
            },
            {
                text: "bne"
            },
            {
                text: "000101"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "endereço"
            },
        ],
        [
            {
                text: "set. se <"
            },
            {
                text: "slti"
            },
            {
                text: "001010"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "valor"
            },
        ],
    ]
}