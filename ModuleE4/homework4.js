// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
// План:
//
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//
// Имена функций, свойств и методов должны быть информативными.
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
// информативные имена (а не a, b);
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.
function ElectricalApplince(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}
ElectricalApplince.prototype.plugin = function (){
    console.log(this.name + 'is plugged')
    this.isPlugged = true
}

ElectricalApplince.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const computer = new ElectricalApplince('computer', 100)
const lampa = new ElectricalApplince('lampa', 40)

computer.plugin()
console.log(computer.getPowerUsed() + lampa.getPowerUsed())

lampa.plugin()
console.log(computer.getPowerUsed() + lampa.getPowerUsed())