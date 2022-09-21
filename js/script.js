
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


//! integer factorial (Fraction)
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

    document.getElementById('res_two').innerHTML = `${n}! / ${m}! дорівнює ${resultNandM}`;
}