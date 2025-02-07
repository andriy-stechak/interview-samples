global.name = 'George';

const demo = {
    name: 'Sergio',
    show: function() {
        const name = 'Adam';
        const self = this;

        console.log(this.name);
        console.log(self.name);
        console.log(name);

        (function () {
            console.log(this.name);
            console.log(self.name);
            console.log(name);
        })();

        (() => {
            console.log(arguments);
            console.log(this.name);
            console.log(self.name);
            console.log(name);
        })();
    },
};

demo.show('one', 'two');
