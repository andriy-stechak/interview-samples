// add();
// subtruct();
// var subtruct = function() {};
// function add() {}

const name = 'g'

const o = {
    name: 'Ser',
    show: function() {
        const name = 'Adm'
        const self = this

        console.log(this.name)
        console.log(self.name)

        const s = function() {
            console.info(this.name)
            console.info(self.name)
        }
        s()
    }
}

o.show()
