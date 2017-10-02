import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../../theme/services/utils.service';
import { CategoriasStatic } from '../../../theme/datastatic/categorias.class';
// import { HomeService } from "../../../theme/services/home.service";

@Component({
  selector: 'app-slider',
  providers: [],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  fcountry: any;

  cli: string = 'venta';
  valueText: string = '';

  publicacionesSlider: any = [
    {
      'departamento': 'Lima',
      'direccion': 'Carretera Panamericana Antigua KM 20 COOP. Las Vertientes,',
      'distrito': 'Villa El Salvador',
      'imagen_elite': 'https://firebasestorage.googleapis.com/v0/b/easymaq-cloud.appspot.com/o/img%2Fkomatsu_pc210lci-10.jpg?alt=media&token=ade15f15-40b5-4a5d-b32b-546d75eb910f',
      'marca': 'Komatsu',
      'logomarca': '',
      'modelo': 'K 210',
      'operacion': 'alquiler',
      'telefono': ''
    },
    {
      'departamento': 'Lima',
      'direccion': 'Carretera Panamericana Antigua KM 20 COOP. Las Vertientes,',
      'distrito': 'Villa El Salvador',
      'imagen_elite': 'https://storage.googleapis.com/easymaq_web/1/maquinaria.jpg',
      'marca': 'CAT',
      'logomarca': '',
      'modelo': 'EX 138',
      'operacion': 'venta',
      'telefono': ''
    },
    {
      'departamento': 'Lima',
      'direccion': 'Carretera Panamericana Antigua KM 20 COOP. Las Vertientes,',
      'distrito': 'Villa El Salvador',
      'imagen_elite': 'https://storage.googleapis.com/easymaq_web/1/tractopartesvr.jpg',
      'marca': 'Hyundai',
      'logomarca': '',
      'modelo': '140W-9S',
      'operacion': 'venta',
      'telefono': ''
    }
  ];

  constructor(
    private router: Router,
    private _utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.fcountry = this._utilsService.asignateCountry();
  }

  buscadorEasymaq(): void {
    let query = this.valueText.trim().replace(/ +/g, ' ').toLowerCase();
    if (query !== ' ' && query !== '') {
      this.router.navigate([`/${this.fcountry.name}/maquinarias`], { queryParams: { query: query, type: this.cli } });
    } else {
      /* this.searchBox.nativeElement.value = ''; */
    }
  }

}
