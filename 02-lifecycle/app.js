const app = new Vue(
    {
        el: ".vue",
        data: {
            mensaje: "Hola mundo"
        },
        beforeCreate: function(){
            console.log("before create")
        },
        created: function() {
            console.log("created")
        },
        beforeMount: function() {
            console.log("before mount");
        },
        mounted: function() {
            console.log("mounted")
        },
        beforeUpdate: function() {
            console.log("before update")
        },
        updated: function() {
            console.log("updated")
        },
        beforeDestroy: function() {
            console.log("before destroy")
        },
        destroyed: function() {
            console.log("destroyed")
        },
        methods: {
            destroy: function(){
                this.$destroy();
            },
            cambiar: function() {
                this.mensaje = "nuevo mensaje";
            }
        }

    }
)