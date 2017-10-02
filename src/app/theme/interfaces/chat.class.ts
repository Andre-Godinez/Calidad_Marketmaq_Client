export class ChatInitialize {
    receptorname ?: string = '';
    receptorimagen ?: string = '';
    createChat ?: number = (new Date().getTime());
    lastmessagedate ?: number = (new Date().getTime());
    lastmessage ?: string = '';
    lastmessagename ?: string = '';
    tipo ?: string = '';
    members ?: string = '';
    keyreceptor ?: string = '';
    keychat ?: string = '';
    keymessages ?: string = this.getCodigoUnico(5);
    keypublicacion ?:string = '';
    tipo_lastmessagedate ?: string = '';
    tipo_keyreceptor ?: string = '';
    
    constructor(){}

/*********************** Inicio herramientas */
  getCodigoUnico(n){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < n; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text + (new Date().getTime());
  }
/*********************** Fin herramientas */
}