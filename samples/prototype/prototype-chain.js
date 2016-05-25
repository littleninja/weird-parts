var person = {
    firstName: 'Default',
    lastName: 'Default',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

var daemon = {
    firstName: 'Daemon',
    lastName: 'Stoudy'
};

// don't ever ever ever do in production!
daemon.__proto__ = person;
console.log(daemon.getFullName);