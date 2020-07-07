const app = new Vue(
    {
        el: "#app",

        data: {
            op1: undefined,
            op2: undefined
        },
        methods: {
            reset() {
                this.op1 = null;
                this.op2 = null;
            }
        },
        computed: {
            suma() {
                return parseFloat(this.op1) + parseFloat(this.op2);
            },
            resta: function () {
                return this.op1 - this.op2;
            },
            multiplicacion: function () {
                return parseFloat(this.op1) * parseFloat(this.op2);
            },
            cuadrado() {
                return parseFloat(this.op1) ** 2;
            }
        }
    }
)