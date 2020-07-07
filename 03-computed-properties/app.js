const app = new Vue(
    {
        el: ".vue",
        data: {
            contador: 0
        },
        methods: {
            sumarUno: function () {
                this.contador++
            },
            restarUno: function () {
                this.contador--
            }
        }
    }
)