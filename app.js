"use strict";
(function () {
    var miFuncion = function (a) {
        return a.toUpperCase();
    };
    var miFuncionFlecha = function (a) { return a.toUpperCase(); };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarF = function (a, b) { return a + b; };
    var hulk = {
        nombre: 'Hulk',
        smash: function () {
            var _this = this;
            setTimeout(function () {
                console.log("".concat(_this.nombre, " smash!!!!"));
            }, 1000);
        }
        //Las funciones de flecha(lambdas) no cambian el scope 
    };
    hulk.smash();
})();
