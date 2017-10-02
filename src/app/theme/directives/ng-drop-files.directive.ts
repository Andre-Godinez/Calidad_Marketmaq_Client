/* import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from "../models/file-item";
import { CargaImagenesService } from '../../theme/services/carga-imagenes.service';


@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos:FileItem[] =[];
  @Output() archivosSobre: EventEmitter<any> = new EventEmitter();

  constructor(public elemento: ElementRef, public _cargaImagenes:CargaImagenesService) { }

  @HostListener('dragenter',['$event'])
  public onDragEnter( event:any ){
    this.archivosSobre.emit( true );
  }

  @HostListener('dragleave',['$event'])
  public onDragLeave( event:any ){
    this.archivosSobre.emit( false );
  }

  @HostListener('dragover',['$event'])
  public onDragOver( event:any ){

    let transferencia = this._getTransferencia( event );
    transferencia.dropEffect = 'copy';

    this._prevenirYdetener(event);

    this.archivosSobre.emit( true );
  } */

  /* Este evento es del momento que se suelta el/los archivo(s) en la caja */
  /* @HostListener('drop',['$event'])
  public onDrop( event:any ){

    let transferencia = this._getTransferencia( event );
    if(!transferencia){
      return;
    }
    this._agregarArchivos(transferencia.files);
    this.archivosSobre.emit( false );
    this._prevenirYdetener(event);
    this.cargarImagenesFirebase();

  }
  @HostListener('change',['$event'])
  public onchange(event:any ) {
    // console.log("onchange event");
    if(!event.target.files){
      return;
    }
    this.archivos =[];
    this._agregarArchivos(event.target.files);
    this.archivosSobre.emit( false );
    console.log("this.cargarImagenesFirebase();");
    this._prevenirYdetener(event);
    this.cargarImagenesFirebase();
  }
  cargarImagenesFirebase(){
    console.log("cargando imagenes en firebase");
    this._cargaImagenes.cargar_imagenes_firebase( this.archivos );
  }


  private _getTransferencia( event:any ){
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _agregarArchivos( archivosLista:FileList ){

    for( let propiedad in Object.getOwnPropertyNames( archivosLista )){
      let archTemporal = archivosLista[propiedad];
      if(this._archivoPuedeSerCargado( archTemporal )){
        let nuevoArchivo = new FileItem( archTemporal );
        this.archivos.push( nuevoArchivo );
      }
    }
    console.log(this.archivos);

  }

  private _prevenirYdetener(event:any){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoPuedeSerCargado(archivo:File){
    if( !this._archivoYaFueDroppeado( archivo.name ) && this._esImagen(archivo.type)){
      return true;
    }
    return false;
  }

  private _archivoYaFueDroppeado( nombreArchivo:string):boolean{
    for( let i in this.archivos ){
      let arch = this.archivos[i];
      if( arch.archivo.name === nombreArchivo ){
        console.log("Archivo ya existe en la lista", nombreArchivo);
        return true;
      }
    }
    return false;
  }

  private _esImagen( tipoArchivo:string ):boolean{
    return ( tipoArchivo == '' || tipoArchivo == undefined ) ? false :tipoArchivo.startsWith("image");
  }
}


 */
