
//! integer factorial
function integerFactorial() {
    let n = document.getElementById('int_fac').value;
    let result = 1;

    if (n == '' || n != Number(n)) {
        document.getElementById('res_one').innerHTML = `Введи число`;
    } else {
        for (let i = n; i > 0; i--) {
            result *= i;
        }
        document.getElementById('res_one').innerHTML = `<div style="font-size: 16px;">Факторіал числа ${n} = ${result}</div>`;
    }
}


//! factorial (Fraction)
function fractionFactorial() {
    let n = document.getElementById('frac_fac_one').value;
    let m = document.getElementById('frac_fac_two').value;
    let nResult = 1;
    let mResult = 1;
    let resultNandM;

    if (n == '' || m == '' || n != Number(n) || m != Number(m)) {
        document.getElementById('res_two').innerHTML = `Введи числа`;
        return
    } else {
        if (n == '' || n != Number(n)) {
            document.getElementById('res_two').innerHTML = `Введи число`;
        } else {
            for (let i = n; i > 0; i--) {
                nResult *= i;
            }
        }
        if (m == '' || m != Number(m)) {
            document.getElementById('res_two').innerHTML = `Введи число`;
        } else {
            for (let i = m; i > 0; i--) {
                mResult *= i;
            }
        }
    }
    resultNandM = nResult / mResult;

    document.getElementById('res_two').innerHTML = `<div style="font-size: 16px;">${n}! / ${m}! дорівнює ${resultNandM}</div>`;
}

//! factorial (gamma function)

var g = 7;
var C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
var gammaNum = document.getElementById('gamma_fac').value;
function gamma(z) {
    if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
    else {
        z -= 1;
        var x = C[0];
        for (var i = 1; i < g + 2; i++)
            x += C[i] / (z + i);

        var t = z + g + 0.5;
        return Math.sqrt(2 * Math.PI) * Math.pow(t, (z + 0.5)) * Math.exp(-t) * x;
    }
}
let resl = gamma(gammaNum);
gammaOne.onclick = function gammaResult() {
    var gammaNum = document.getElementById('gamma_fac').value;
    let resl = gamma(gammaNum);
    if (gammaNum == '' || gammaNum != Number(gammaNum)) {
        document.getElementById('res_gamma').innerHTML = `<div>Ви не ввели число</div>`;
    } else if (gammaNum == 0) {
        document.getElementById('res_gamma').innerHTML = `<div">Число не може бути нулем</div>`;
    } else if (gammaNum < 0) {
        document.getElementById('res_gamma').innerHTML = `<div">Не приймає від'ємні значення</div>`;
    } else {
        document.getElementById('res_gamma').innerHTML = `<div style="font-size: 16px;">Г(${gammaNum}) = ${resl}</div>`;
    }

}



//! factorial (gamma function fraction)
gammaTwo.onclick = function gammaFraction() {
    let gammaA = document.getElementById('frac_fac_four_one').value;
    let gammaB = document.getElementById('frac_fac_four_two').value;
    let gammaAandBRes = gamma(gammaA / gammaB);
    if (gammaA == '' || gammaB == '' || gammaA != Number(gammaA) || gammaB != Number(gammaB)) {
        document.getElementById('res_gamma_frac').innerHTML = `<div">Введи числа</div>`;
    } else if (gammaA == 0 || gammaB == 0) {
        document.getElementById('res_gamma_frac').innerHTML = `<div">Значення не можуть містити нуль</div>`;
    } else {
        document.getElementById('res_gamma_frac').innerHTML = `<div style="font-size: 16px;">Г(${gammaA} / ${gammaB}) = ${gammaAandBRes}</div>`;
    }

}


