;(function (global, $) {

    // 'new' an object
    var Yip = function(sound, language) {
        return new Yip.init(sound, language);
    };

    var supportedLanguages = ['en', 'es'];

    var exclamations = {
        en: 'Say',
        es: 'Diga'
    };

    Yip.prototype = {

        exclaim: function() {
            return exclamations[this.language] + ' ' + this.sound + '!';
        },

        validate: function() {
            if (supportedLanguages.indexOf(this.language) < 0) {
                throw "Invalid language";
            }
        },

        setLang: function(lang) {
            this.language = lang;
            this.validate();
            return this;
        },

        HTMLExclaim: function(selector) {

            if(!$) {
                throw 'jQuery not loaded';
            }
            if(!selector) {
                throw 'Missing selector';
            }
            console.log('selector', selector);

            var msg = this.exclaim();
            $(selector).html(msg);

            return this;
        }

    };

    Yip.init = function(sound, language) {
        this.sound = sound || 'yeep';
        this.language = language || 'en';
    };

    // trick from jQuery to get around using the 'new' keyword
    Yip.init.prototype = Yip.prototype;

    // exposing our framework to the global environment
    global.yip = global.y$ = Yip;

}(window, jQuery));