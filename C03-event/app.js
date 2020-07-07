const app = new Vue(
    {
        el: "#app",
        data: {
            x: undefined,
            y: undefined,
            contador: 0
        },
        methods: {
            move(event) {
                this.x = event.x;
                this.y = event.y;
            },
            click() {
                this.contador++;
            },
            reset() {
                this.contador = 0;
            }
        }
    }

)