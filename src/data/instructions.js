export const instructions = {
    header: [
        "Nome",
        "Assembly",
        "opcode",
        "entr1",
        "entr2",
        "saída",
        "deslocamento",
        "esp. op."
    ],
    data:[
        [
            {
                text: "soma"
            },
            {
                text: "add"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "00000"
            },
            {
                text: "100000"
            },
        ],
        [
            {
                text: "subtração"
            },
            {
                text: "sub"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "00000"
            },
            {
                text: "100010"
            },
        ],
        [
            {
                text: "e"
            },
            {
                text: "and"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "00000"
            },
            {
                text: "100100"
            },
        ],
        [
            {
                text: "ou"
            },
            {
                text: "or"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "00000"
            },
            {
                text: "100101"
            },
        ],
        [
            {
                text: "não ou"
            },
            {
                text: "nor"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "00000"
            },
            {
                text: "100111"
            },
        ],
        [
            {
                text: "deslocamento esquerda"
            },
            {
                text: "sll"
            },
            {
                text: "000000"
            },
            {
                text: "00000"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "deslocamento"
            },
            {
                text: "000000"
            },
        ],
        [
            {
                text: "deslocamento direita"
            },
            {
                text: "srl"
            },
            {
                text: "000000"
            },
            {
                text: "00000"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            },
            {
                text: "deslocamento"
            },
            {
                text: "000010"
            },
        ],
        [
            {
                text: "set. se <"
            },
            {
                text: "slt"
            },
            {
                text: "000000"
            },
            {
                text: "reg1"
            },
            {
                text: "reg2"
            },
            {
                text: "reg3"
            }, 
            {
                text: "00000"
            },
            {
                text: "101010"
            },
        ]
    ]
}