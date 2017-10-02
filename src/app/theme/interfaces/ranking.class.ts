export class RankingInitialize {

    title ?: string = '';
    description ?: string = '';
    keyuser ?: string = '';
    keyrank ?: string = '';
    uid ?: string = '';
    rankstar ?: number = 0;
    keyrank_rankstar ?: string = '';
    keyuser_keyrank ?: string = '';

    constructor(){}

    getstarRank( rkPromedio ){
        let listRank:string[] = rkPromedio.split('_');
        let suma:number = 0;
        let sumPromedio:number = 0;
        let resultado:any={};

        resultado.suma = 0;
        resultado.star1 = 0;
        resultado.star2 = 0;
        resultado.star3 = 0;
        resultado.star4 = 0;
        resultado.star5 = 0;
        resultado.promedio = 0;
        
        if( !(rkPromedio == '0_0_0_0_0_0_0_0_0_0')){
            for(let i= 0; i <5 ; i++){
                suma += parseInt(listRank[i+5]);
                sumPromedio += parseInt(listRank[i+5])*(i+1);
            }
            if(suma != 0){
                resultado.suma = suma;
                resultado.star1 = Math.round( (parseInt(listRank[5])/suma)*100 );
                resultado.star2 = Math.round( (parseInt(listRank[6])/suma)*100 );
                resultado.star3 = Math.round( (parseInt(listRank[7])/suma)*100 );
                resultado.star4 = Math.round( (parseInt(listRank[8])/suma)*100 );
                resultado.star5 = Math.round( (parseInt(listRank[9])/suma)*100 );
                resultado.promedio = Math.round( sumPromedio/(suma*5)*50 )/10;
            }
        }
        return resultado;
    }

    agregaRanking(rkPromedio:string , numberStar:number){
        let listRank:string[] = rkPromedio.split('_');
        let result:string = '';
        listRank[numberStar+4] = (parseInt(listRank[numberStar+4])+1).toString();
        for (var i = 0; i < 10; i++) {
            result += '_'+listRank[i];
        }
        return result.substring(1);
    }
    reduceRanking(rkPromedio:string , numberStar:number){
        let listRank:string[] = rkPromedio.split('_');
        let result:string = '';
        listRank[numberStar+4] = (parseInt(listRank[numberStar+4])-1).toString();
        for (var i = 0; i < 10; i++) {
            result += '_'+listRank[i];
        }
        return result.substring(1);
    }
    modificarRanking( oldRkPromedio:string , oldNumberStar, NewNumberStar:number){
        let reducidoRkPromedio:string = this.reduceRanking(oldRkPromedio,oldNumberStar);
        return this.agregaRanking(reducidoRkPromedio,NewNumberStar);
    }

    getConvertPubOpe(tipo : string){
        if(tipo == 'publicacion'){
            tipo = 'publicadores';
        }
        if(tipo == 'operario'){
            tipo = 'operarios';
        }
        return tipo;
    }

    getConvertPubOpeRankeado(tipo : string){
        if(tipo == 'publicacion'){
            tipo = 'rkpublicar';
        }
        if(tipo == 'operario'){
            tipo = 'rkoperario';
        }
        return tipo;
    }
}