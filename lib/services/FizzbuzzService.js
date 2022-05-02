class FizzbuzzService {
    static applyValidationInExplorer(explorer){

        if(  explorer.score%5 === 0 && explorer.score%3 === 0 ){
            explorer.trick = "FIZZBUZZ";
        } else if( explorer.score%5 === 0  ){
            explorer.trick = "BUZZ";

        }else if( explorer.score%3 === 0  ){
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
        return explorer; 
    }
    static applyValidationInNumber(number){
        let valor='';
        if(  number %5 === 0 && number%3 === 0 ){
            valor = "FIZZBUZZ";
        } else if( number%5 === 0  ){
            valor = "BUZZ";

        }else if( number%3 === 0  ){
            valor = "FIZZ";
        } else {
            valor =number;
        }
        return valor; 
    }
}
  
module.exports = FizzbuzzService;