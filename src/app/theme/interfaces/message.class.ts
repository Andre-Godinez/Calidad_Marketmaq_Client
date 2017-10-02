export class MessageInitialize {
    username ?: string = '';
    message ?: string = '';
    timestamp ?: number = (new Date().getTime());
    keyuser ?: string = '';
    lineini ?: boolean = false;
    noviewemisor ?: boolean = false;
    uid ?: string = '';
}