const app = new Vue(
    {
        el: ".vue",
        data: {
            mensaje: "Hola mundo",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
        },
        methods: {
            myFirstMethod: function () {
                return "mi primer metodo"
            },
            devuelveMensaje: function () {
                console.log("mensaje", this.mensaje);
                return this.mensaje
            }
        }
    }
)