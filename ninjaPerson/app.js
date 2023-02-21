new Vue({
    el: "#vue-app",
    data: {
        name: 'Shaun',
        age: 35,
        job: "Ninja",
        website: "https://ninja.fi",
        websiteTag: '<a href="https://ninja.fi">The Net Ninja</a>',
        x: 0,
        y:  0
    },
    methods: {
        greet: function (time){
 
            return "Good " + time + " " + this.name
        },
        add: function (inc){
            this.age += inc;
        },
        subtract: function (dec){
            this.age -= dec;
        },
        updateXY:function(event){
            console.log()
            this.x = event.offsetX;
            this.y = event.offsetY;

        },
        click: function(){
            alert('You clicked me');
        }
    }
});