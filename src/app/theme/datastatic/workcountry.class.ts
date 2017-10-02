export class Workcountry {

    listCountry: any[] = [
        {
            idCountry: 0,
            code: 'ar',
            name: 'Argentina',
            image: 'assets/flats/Argentina.png',
            urlHref: '/ar/home',
            id: '5988810f01ba8a000fb3505a',
            active: false,
            enable: false
        },
        {
            idCountry: 1,
            code: 'bo',
            name: 'Bolivia',
            image: 'assets/flats/Bolivia.png',
            urlHref: '/bo/home',
            id: '5988810f01ba8a000fb35069',
            active: false,
            enable: false
        },
        {
            idCountry: 2,
            code: 'br',
            name: 'Brasil',
            image: 'assets/flats/Brasil.png',
            urlHref: '/br/home',
            id: '5988810f01ba8a000fb3506c',
            active: false,
            enable: false
        },
        {
            idCountry: 3,
            code: 'cl',
            name: 'Chile',
            image: 'assets/flats/Chile.png',
            urlHref: '/cl/home',
            id: '5988810f01ba8a000fb3507a',
            active: false,
            enable: true
        },
        {
            idCountry: 4,
            code: 'co',
            name: 'Colombia',
            image: 'assets/flats/Colombia.png',
            urlHref: '/co/home',
            id: '5988810f01ba8a000fb3507e',
            active: false,
            enable: true
        },
        {
            idCountry: 5,
            code: 'cr',
            name: 'Costa Rica',
            image: 'assets/flats/Costa-Rica.png',
            urlHref: '/cr/home',
            id: '5988810f01ba8a000fb35083',
            active: false,
            enable: false
        },
        {
            idCountry: 6,
            code: 'dm',
            name: 'Dominicana',
            image: 'assets/flats/Dominican-Republic.png',
            urlHref: '/dm/home',
            id: '5988810f01ba8a000fb35089',
            active: false,
            enable: false
        },
        {
            idCountry: 7,
            code: 'ec',
            name: 'Ecuador',
            image: 'assets/flats/Ecuador.png',
            urlHref: '/ec/home',
            id: '5988810f01ba8a000fb3508a',
            active: false,
            enable: false
        },
        {
            idCountry: 8,
            code: 'gt',
            name: 'Guatemala',
            image: 'assets/flats/Guatemala.png',
            urlHref: '/gt/home',
            id: '5988810f01ba8a000fb350a3',
            active: false,
            enable: false
        },
        {
            idCountry: 9,
            code: 'hn',
            name: 'Honduras',
            image: 'assets/flats/Honduras.png',
            urlHref: '/hn/home',
            id: '5988810f01ba8a000fb350ab',
            active: false,
            enable: false
        },
        {
            idCountry: 10,
            code: 'mx',
            name: 'México',
            image: 'assets/flats/Mexico.png',
            urlHref: '/mx/home',
            id: '5988810f01ba8a000fb350e9',
            active: false,
            enable: true
        },
        {
            idCountry: 11,
            code: 'ni',
            name: 'Nicaragua',
            image: 'assets/flats/Nicaragua.png',
            urlHref: '/ni/home',
            id: '5988810f01ba8a000fb350f5',
            active: false,
            enable: false
        },
        {
            idCountry: 12,
            code: 'pa',
            name: 'Panamá',
            image: 'assets/flats/Panama.png',
            urlHref: '/pa/home',
            id: '5988810f01ba8a000fb350ff',
            active: false,
            enable: false
        },
        {
            idCountry: 13,
            code: 'py',
            name: 'Paraguay',
            image: 'assets/flats/Paraguay.png',
            urlHref: '/py/home',
            id: '5988810f01ba8a000fb35101',
            active: false,
            enable: false
        },
        {
            idCountry: 14,
            code: 'pe',
            name: 'Perú',
            image: 'assets/flats/Peru.png',
            urlHref: '/pe/home',
            id: '5988810f01ba8a000fb35102',
            active: true,
            enable: true
        },
        {
            idCountry: 15,
            code: 'pt',
            name: 'Portugal',
            image: 'assets/flats/Portugal.png',
            urlHref: '/pt/home',
            id: '5988810f01ba8a000fb35105',
            active: false,
            enable: false
        },
        {
            idCountry: 16,
            code: 'sv',
            name: 'Salvador',
            image: 'assets/flats/El-Salvador.png',
            urlHref: '/sv/home',
            id: '5988810f01ba8a000fb3508c',
            active: false,
            enable: false
        },
        {
            idCountry: 17,
            code: 'uy',
            name: 'Uruguay',
            image: 'assets/flats/Uruguay.png',
            urlHref: '/uy/home',
            id: '5988810f01ba8a000fb35143',
            active: false,
            enable: false
        },
        {
            idCountry: 18,
            code: 've',
            name: 'Venezuela',
            image: 'assets/flats/Venezuela.png',
            urlHref: '/ve/home',
            id: '5988810f01ba8a000fb35146',
            active: false,
            enable: false
        }
    ];

    constructor() { }

    getListaEnable() {
        let result: any[] = [];
        this.listCountry.forEach(country => {
            if (country.enable) {
                result.push(country);
            }
        });
        return result;
    }
}
