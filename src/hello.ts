// let obj : { [index:string] : string } = {
//     'hoge': 'ほげ',
//     'foo': 'ふう',
//     'bar': 'ばー'
// };
// console.log(obj);

// interface StringMap {
//     [index: string]: string;
// }
// let obj: StringMap = {
//     'hoge': 'ほげ',
//     'foo': 'ふう',
//     'bar': 'ばー'
// };
// console.log(obj);

// let data1: string|undefined = undefined;
// let data2: string|null = null;

// $(function () {
//    $('.hoge').css('background-color', 'black');
// });

// let Counter1 = function () {
//   let _this = this;
//   _this.count = 0;
//
//   setInterval(function () {
//      _this.count++;
//   }, 1000);
// };
// let Counter2 = function () {
//    this.count = 0;
//    setInterval(() => { this.count++; }, 1000);
// };

// let person = new MainApp.Person('太郎', '男');
// console.log(person.name);
// console.log(person.show());

window.addEventListener("load", () => {
    let person = new MainApp.Person('太郎', '男');
    console.log(person.name);
    console.log(person.show());
});