const app = new Vue(
    {
        el: ".vue",
        data: {
            x: 0,
            y: 0,
            contador: 0
        },
        methods: {
            move: function (event) {
                this.x = event.clientX;
                this.y = event.clientY;
            },
            click: function () {
                this.contador++
            }

        }
    }
)