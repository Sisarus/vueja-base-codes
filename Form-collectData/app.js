new Vue({
    el:'#app',
    data: {
        firstName: 'Al',
        lastName: 'Loma',
        name: "Nimi"
    },
    methods: {
        getFullName: function(first, last){
            return{
                name: first + " " + last
            }
            //return first + " " + last;
             //console.log(this);
        },
        clickedButton: function(event) {
            console.log(event);
            alert("Painoit painiketta!")
        },
        nameKeyup: function(event) {
            this.name = event.target.value;
        }
    }

});