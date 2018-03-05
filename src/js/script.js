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
        var ltotalSocios = 0;
        var ltotalFuncionarios = 0;
        var ltotalFaturamento = 0;
        var acumulandoAnual = $pagamentoValue.value * 13;
        var valorReservado = $pagamentoValue.value;
        var mensalidadeSimples = 97;



        if ($sociosValue.value > 1) {
            ltotalSocios = $sociosValue.value * 30;
            acumulandoAnual += ltotalSocios;
        }
        if ($funcionariosValue.value >= 1) {
            ltotalFuncionarios = $funcionariosValue.value * 50;
            acumulandoAnual += ltotalFuncionarios;
        }

        ltotalFaturamento = $selection.value * 120;
    
        acumulandoAnual += ltotalFaturamento;
        mensalidadeSimples += ltotalFaturamento + ltotalSocios + ltotalFuncionarios;

        var valorFinalSimples = (mensalidadeSimples - valorReservado) * 12;
        
       
        console.log("Mensalidade simples: "+mensalidadeSimples);
        console.log("Valor reservado: "+valorReservado);
        console.log("valor final Simples: " +valorFinalSimples);

        if(valorFinalSimples <= 0){
            $mensality.textContent = formataDinheiro(97);
        } else{
            $economy.textContent = formataDinheiro(acumulandoAnual);
            $mensality.textContent = formataDinheiro(valorFinalSimples);
        }

               




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