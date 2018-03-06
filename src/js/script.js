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
        var valorAdicionarSocios = 0;
        var valorAdicionarFuncionario = 0;
        var ltotalFaturamento = 0;
        var valorReservado = $pagamentoValue.value;
        var mensalidadeSimples = 97;

        for(var i = 1; i < $sociosValue.value; i++){
            mensalidadeSimples += 30;
            console.log(valorAdicionarSocios);
        }
        for(var i = 0; i < $funcionariosValue.value; i++){
            mensalidadeSimples += 50;
        }
        
        for(var i = 1; i < $selection.value; i++){
            mensalidadeSimples += 120;
        }
        
        var mensalidadeSimplesMult = mensalidadeSimples * 12;
        var acumulandoAnual = $pagamentoValue.value * 13;

        var Economia = acumulandoAnual - mensalidadeSimplesMult

        $economy.textContent = formataDinheiro(Economia);
        $mensality.textContent = formataDinheiro(mensalidadeSimples);

        mensalidadeSimples = 97;











     


               




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