"use strict";
var MainApp;
(function (MainApp) {
    var Person = /** @class */ (function () {
        // private name: string;
        // private sex: string;
        // constructor(name, sex) {
        //     this.name = name;
        //     this.sex = sex;
        // }
        function Person(_name, _sex) {
            this._name = _name;
            this._sex = _sex;
        }
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this.name;
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