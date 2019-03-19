namespace MainApp {
    export class Person {
        // private name: string;
        // private sex: string;
        // constructor(name, sex) {
        //     this.name = name;
        //     this.sex = sex;
        // }

        constructor(private _name: string, private _sex: string) {
        }

        get name(): string {
            return this._name;
        }
        set name(value: string) {
            this._name = value;
        }

        public show() {
            return `${this._name} は ${this._sex} です`
        }
    }
}