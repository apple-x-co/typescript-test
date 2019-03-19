"use strict";
var MainApp;
(function (MainApp) {
    var Person = (function () {
        function Person(_name, _sex) {
            this._name = _name;
            this._sex = _sex;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.show = function () {
            return this._name + " \u306F " + this._sex + " \u3067\u3059";
        };
        return Person;
    }());
    MainApp.Person = Person;
})(MainApp || (MainApp = {}));
//# sourceMappingURL=Person.js.map