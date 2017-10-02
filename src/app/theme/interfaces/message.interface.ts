export interface Message {
    username ?: string;
    message ?: string;
    timestamp ?: number;
    keyuser ?: string;
    lineini ?: boolean; // avisa que inicio su conversacion, justo luego del receptor- le corresponde cola
    noviewemisor ?: boolean; // true cuando mensaje es enviado por una publicacion, u accede por primera vez por contactar
    uid ?: string;
}