class Variables {

    constructor() {
        this.vars = {};
        this.triggers = {};
    }

    set(variable, value) {
        this.vars[variable] = value;
        this.trigger(variable);
    }

    get(variable) {
        if (typeof (this.vars[variable]) === 'undefined') {
            return({});
        }
        return this.vars[variable];
    }

    register(variable, callback) {
        if (typeof(this.triggers[variable]) === 'undefined') {
            this.triggers[variable] = Array();
        }
        this.triggers[variable].push(callback);
    }

    unregister(variable, callback) {
        if (typeof(this.triggers[variable]) !== 'undefined') {
            var index = this.triggers.indexOf(callback);
            this.triggers.splice(index, 1);
        }
    }

    trigger(variable) {
        var self = this;
        if (typeof(this.triggers[variable]) !== 'undefined') {
            this.triggers[variable].forEach(element => {
                element(self.vars[variable]);
            });
        }
        if (typeof(this.triggers['ALL']) !== 'undefined') {
            this.triggers['ALL'].forEach(element => {
                element(self.vars[variable]);
            });
        }
    }
}
