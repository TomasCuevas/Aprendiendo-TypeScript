"use strict";
(() => {
    // Tipos
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    // Arreglos
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    //Enumeraciones
    let strength;
    (function (strength) {
        strength[strength["acuaman"] = 0] = "acuaman";
        strength[strength["batman"] = 1] = "batman";
        strength[strength["flash"] = 5] = "flash";
        strength[strength["superman"] = 100] = "superman";
    })(strength || (strength = {}));
    const fuerzaFlash = strength.flash;
    const fuerzaSuperman = strength.superman;
    const fuerzaBatman = strength.batman;
    const fuerzaAcuaman = strength.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    // Aserciones de Tipo
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
