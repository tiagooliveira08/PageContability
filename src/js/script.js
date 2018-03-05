(function (win, doc) {

    var $economy = doc.querySelector("[data-js='economy']");
    var $mensality = doc.querySelector("[data-js='mensalidade']");
    var $pagamentoValue = doc.querySelector("[data-js='pagamento']");
    var $sociosValue = doc.querySelector("[data-js='socios']");
    var $funcionariosValue = doc.querySelector("[data-js='funcionarios']");
    var $selection = doc.querySelector("[data-js='selection']");

    calcTotal();


    $pagamentoValue.addEventListener("keyup", calcPagamento, false);
    $pagamentoValue.addEventListener("change", calcPagamento, false);

    $sociosValue.addEventListener("keyup", calcSocios, false);
    $sociosValue.addEventListener("change", calcSocios, false);

    $funcionariosValue.addEventListener("keyup", calcFuncionarios, false);
    $funcionariosValue.addEventListener("change", calcFuncionarios, false);

    $selection.addEventListener("change", calcTotal, false);

    function calcPagamento() {
        console.log("hey");
        $pagamentoValue.value = verificarMax($pagamentoValue.value, 4000);
        calcTotal();
    }

    function calcSocios() {
        $sociosValue.value = verificarMax($sociosValue.value, 10);
        calcTotal();
    }

    function calcFuncionarios() {
        $funcionariosValue.value = verificarMax($funcionariosValue.value, 10);
        calcTotal();

    }


    function calcTotal() {
        var ltotalSocios;
        var ltotalFuncionarios;
        var ltotalFaturamento;
        var lvarTemp = $pagamentoValue.value * 13;


        if ($sociosValue.value > 1) {
            ltotalSocios = $sociosValue.value * 30;
            lvarTemp += ltotalSocios;
        }
        if ($funcionariosValue.value >= 1) {
            ltotalFuncionarios = $funcionariosValue.value * 50;
            lvarTemp += ltotalFuncionarios;
        }

        ltotalFaturamento = $selection.value * 120

        lvarTemp += ltotalFaturamento;


        $economy.textContent = formataDinheiro(lvarTemp);

        test = ltotalSocios + ltotalFuncionarios;
        setTimeout(() => {
            console.log(ltotalSocios);
        }, 1000);


    }


    function formataDinheiro(n) {
        return n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    }




    function verificarMax(input, max) {
        if (input >= max) {
            return input = max;
        }
        if (input !== max) {
            return input
        }

    }



})(window, document)