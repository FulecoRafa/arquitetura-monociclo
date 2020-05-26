export const regs = {
    header: [
        "Reg. por número",
        "Reg. por nome",
        "Função"
    ],
    data:[
        [
            {
                text:"$0"
            },
            {
                text:"$r0"
            },
            {
                bold:"Valor zero.",
                text: "É útil em certas operações."
            }
        ],
        [
            {
                text:"$1"
            },
            {
                text:"$at"
            },
            {
                bold: "Assembler.",
                text: "Trabalha diret. com o montador."
            }
        ],
        [
            {
                text:"$2 - $3"
            },
            {
                text:"$v0 - $v1"
            },
            {
                bold: "Retorno.",
                text: "Usado para retornar valores."
            }
        ],
        [
            {
                text:"$4 - $7"
            },
            {
                text:"$$a0 - $a3"
            },
            {
                bold: "Argumento.",
                text: "Usado para entrar valores."
            }
        ],
        [
            {
                text:"$8 - $15"
            },
            {
                text:"$t0 - $t7"
            },
            {
                bold: "Temporário.",
                text: "Valor muda a cada chamada."
            }
        ],
        [
            {
                text:"$16 - $23"
            },
            {
                text:"$s0 - $s7"
            },
            {
                bold: "Salvo.",
                text: "Valor não muda a cada chamada."
            }
        ],
        [
            {
                text:"$24 - $25"
            },
            {
                text:"$t8 -$t9"
            },
            {
                bold: "Temporário.",
                text: "Valor muda a cada chamada."
            }
        ],
        [
            {
                text:"$26 - $27"
            },
            {
                text:"$k0 - $k1"
            },
            {
                bold: "Kernell.",
                text: "Trabalha diret. com o sist. operacional."
            }
        ],
        [
            {
                text:"$28"
            },
            {
                text:"$gp"
            },
            {
                bold: "Global pointer.",
                text: "Aponta para dados estáticos."
            }
        ],
        [
            {
                text:"$29"
            },
            {
                text:"$sp"
            },
            {
                bold: "Stack pointer.",
                text: "Aponta para a pilha de mem."
            }
        ],
        [
            {
                text:"$30"
            },
            {
                text:"$fp"
            },
            {
                bold: "Frame pointer.",
                text: "Apt. p/ conj. dados na pilha."
            }
        ],
        [
            {
                text:"$31"
            },
            {
                text:"$ra"
            },
            {
                bold: "Return address.",
                text: "Desvio da execução."
            }
        ],

    ]
}