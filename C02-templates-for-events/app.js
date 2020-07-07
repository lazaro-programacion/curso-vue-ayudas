const app = new Vue(
    {
        el: "#app",
        data: {
            empleados: [
                {
                    nombre: "Marta",
                    dni: "93849384J"
                },
                {
                    nombre: "Soledad",
                    dni: "93849384H"
                },
                {
                    nombre: "Eva",
                    dni: "93849354E"
                },
                {
                    nombre: "Jon",
                    dni: "93849384K"
                },
            ],
            contador: 0
        },
        methods: {
            sumarUno() {
                this.contador++;
            },
            mostrarAlerta(msg) {
                alert(msg);
            },
            sumar(numero) {
                this.contador = this.contador + numero
            }
        }
    }

)