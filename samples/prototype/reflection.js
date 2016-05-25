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


// all properties
console.log('all properties');
for (var prop in daemon) {
    console.log(prop + ': ' + daemon[prop]);
}

console.log('----------------------');
console.log('daemon\'s properties');
// only daemon properties
for (var prop in daemon) {
    if (daemon.hasOwnProperty(prop)) {
        console.log(prop + ': ' + daemon[prop]);
    }
}