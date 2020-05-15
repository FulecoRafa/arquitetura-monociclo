export const regs = {
    header: [
        "Reg. por número",
        "Reg. por nome",
        "Função"
    ],
    data:[
        [
            "$0",
            "$r0",
            "Valor zero. É útil em certas operações."
        ],
        [
            "$1",
            "$at",
            "Assembler. Trabalha diret. com o montador."
        ],
        [
            "$2 - $3",
            "$v0 - $v1",
            "Retorno. Usado para retornar valores."
        ],
        [
            "$4 - $7",
            "$a0 - $a3",
            "Argumento. Usado para entrar valores."
        ],
        [
            "$8 - $15",
            "$t0 - $t7",
            "Temporário. Valor muda a cada chamada."
        ],
        [
            "$16 - $23",
            "$s0 - $s7",
            "Salvo. Valor não muda a cada chamada."
        ],
        [
            "$24 - $25",
            "$t8 -$t9",
            "Temporário. Valor muda a cada chamada."
        ],
        [
            "$26 - $27",
            "$k0 - $k1",
            "Kernell. Trabalha diret. com o sist. operacional."
        ],
        [
            "$28",
            "$gp",
            "Global pointer. Aponta para dados estáticos."
        ],
        [
            "$29",
            "$sp",
            "Stack pointer. Aponta para a pilha de mem."
        ],
        [
            "$30",
            "$fp",
            "Frame pointer. Apt. p/ conj. dados na pilha."
        ],
        [
            "$31",
            "$ra",
            "Return address. Desvio da execução."
        ],

    ]
}