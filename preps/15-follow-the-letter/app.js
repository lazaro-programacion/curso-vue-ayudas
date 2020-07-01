let palabras =  [
    "perico"
]

let nuevaPalabra = "";


Vue.component('titulo',
    {
        template: '<h2>{{titulo}}</h2>',
        data: function() {
            return { titulo: "Sigue la palabra"}
        }
    }
)

Vue.component('add-palabra',
    {
        template: `
        <div>
        <input type="text" v-model="nuevaPalabra" @keyup.enter = "addPalabra"><button @click="addPalabra" >Añadir</button>
        <h1 v-if="error">{{error}}</h1>
        </div>
        `,
        data: function() {
            let error = undefined;
            return {palabras, nuevaPalabra, error}
        },
        methods: {
            addPalabra: function() {
                console.log("nueva palabra", this.nuevaPalabra);
                const ultimapalabra = this.palabras[this.palabras.length -1]
                if (ultimapalabra[ultimapalabra.length-1] === this.nuevaPalabra[0]) {
                    this.palabras.push(this.nuevaPalabra)
                    this.error = undefined

                } else {
                    this.error = "ERROR"
                }
       
                console.log(this.palabras)
                this.nuevaPalabra = "";
            }
        }
    }
)

Vue.component('palabra-list', {
    template: `
    <table class="pure-table pure-table-horizontal">
    <thead>
        <tr>
            <th>Palabra</th>
            <th style="min-width: 200px; "></th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="palabra in palabras">
            <td>{{palabra}}</td>
            <td style="text-align: center">
            </td>
        </tr>
    </tbody>
    </table>`,
    data: function() {
        return {palabras}
    }
}
)



const app = new Vue(
    {
        el: '.vue'
    }
)