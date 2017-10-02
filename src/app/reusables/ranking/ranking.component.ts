import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  Output,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Ranking } from '../../theme/interfaces/ranking.interface';
import { RankingInitialize } from '../../theme/interfaces/ranking.class';

import { RankingService } from '../../theme/services/api/ranking.service';
import { LoginService } from '../../theme/services/login.service';
import { starmodelInitialize } from '../../theme/interfaces/starmodel.class';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  isBrowser: boolean = isPlatformBrowser(this.platform_id);
  @Input('btnranking') btnranking;
  @Output() pasaBtnranking = new EventEmitter();
  @Output() rankTotal = new EventEmitter();
  // @Input('rkchatSeleccionado') rkchatSeleccionado;
  // @Input('rkusuarioReceptor') rkusuarioReceptor;
  @Input('numEstrellas') numEstrellas;
  @Input('tituloEstrellas') tituloEstrellas;
  @Input('descripcionEstrellas') descripcionEstrellas;
  @Input() publicationrank;

  funcionesRanking = (new RankingInitialize);

  // valor obtenido del formulario a enviar
  rankingData: Ranking = (new RankingInitialize);

  // acciona su visibilidad
  // btnranking:boolean = true;

  // Datos a guardar
  // btnrankstar:number = 0;
  // rktitulo:string = '';
  // rkdescripcion:string = '';

  //  animacion tada
  btntada: number = 0;

  constructor(
    private _rankingService: RankingService,
    private _loginService: LoginService,
    @Inject(PLATFORM_ID) private platform_id
  ) {
  }

  ngOnInit() {
    console.log('Hola', this.publicationrank.id);
  }

  sendRank() {
    console.log(this.numEstrellas, this.tituloEstrellas, this.descripcionEstrellas);
    let obj = {
      title: this.tituloEstrellas,
      description: this.descripcionEstrellas,
      rankStar: this.numEstrellas,
      usuarioId: JSON.parse(localStorage.getItem('token')).id,
      publicationId: this.publicationrank.id
    }
    let sendrank = this._rankingService.SendRanking(obj)
      .subscribe(res => {
        console.log(res)
        this.rankTotal.emit(res.rkStarTotal);
        sendrank.unsubscribe();
      });
  }


  lanzar(event) {
    // Usamos el método emit
    this.pasaBtnranking.emit({ nameBtnranking: this.btnranking });
  }

  animateTada(n) {
    this.btntada = 0;
    for (let i = 0; i < n; i++) {
      setTimeout(() => { this.btntada = i + 1; }, 75 * (i + 1));
    }
  }

}
