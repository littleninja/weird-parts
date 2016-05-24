console.log(this); // window

(function () {
    console.log(this); // window
})();

var obj = {
    log: function() {
        console.log(this); // obj
    },
    logVar: function() {
        var fxn = function() {
            console.log(this); // window ??? (considered a bug)
        };
        fxn();
    },
    logFxn: function() {
        function fxn() {
            console.log(this); // window ??? (considered a bug)
        }
        fxn();
    }
};

obj.log();
obj.logVar();
obj.logFxn();