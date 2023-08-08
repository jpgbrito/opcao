
function obterOpcao () {
var opcao = parseInt (prompt ( "Digite a opção do mês desejada:\n1 -janeiro\n2 - fevereiro\n3 - março\n4 - abril\n5 - maio\n6 -junho\n7 - julho\n8 - agosto\n9 - setembro\n10 - outubro\n11 - novembro\n12 - dezembro"));
  

       switch (opcao) {

            case 1:
            alert ("Você selecionou janeiro");
            break;

            case 2:
            alert ("Você selecionou fevereiro");
            break;

            case 3:
            alert ("Você selecionou março");
            break;

            case 4:
            alert ("Você selecionou abril");
            break;

            case 5:
            alert ("Você selecionou maio");
            break;

            case 6:
            alert ("Você selecionou junho");
            break;

            case 7:
            alert ("Você selecionou julho");
            break;

            case 8:
            alert ("Você selecionou agosto");
            break;

            case 9:
            alert ("Você selecionou setembro");
            break;

            case 10:
            alert ("Você selecionou outubro");
            break;

            case 11:
            alert ("Você selecionou novembro");
            break;

            case 12:
            alert ("Você selecionou dezembro");
            break;
            
        default:
            alert ("Opcao inválida. Por Favor Digite de 1 a 12");

       }

 

}

obterOpcao();