let url = '/api/reporteria';
let urlOauth = '';
let urlNotificaciones = '';
const urlLocalOauth = '';


const Servers = {
  pruebas: {
    baseUrl: `${url}`
  },
  OAuth2: {
    baseUrl: `${urlOauth}`
  }
};

// const Conf = {
//   OAuth2: {
//     ClientId: {
//       PortalMovil: '5j63re05hnsr8e6rltn8apa7',
//       Clave: 'to8rlc89rcvefkpbft1trkkh',
//       MiMundo: 'hPGgbIlVaKY=',
//       MiMundo2: 'jjNFjjATyNY=',
//       PortalRoaming: '3s7k2b9k2m09fknup50ohgp1',
//       PersonalId: 'pcNWLbhBER5O4eJXFCkCmodK',
//       Customercare: 'ha6macpf7ddh4orp9d46vh9t',
//       Portalmini: 'i21ab5k7etk7t1ubm9msprut',
//       ClubPersonal: 'aejrsq0rgajko3g55bjjg62j',
//       TiendaPersonal: '5j63re05hnsr8e6rltn8apa7',

//     },
//     RedirectUri: {
//       Default: 'https://www.personal.com.py',
//       PortalMovil: 'https://www.personal.com.py/portal/redirect.html'
//     },
//     ResponseTypes: {
//       Token: 'token'
//     },
//     GrantTypes: {
//       Implicit: 'implicit',
//       ImplicitAdmin: 'administracion',
//       Facebook: 'facebook',
//       ClientCredentials: 'client_credentials',
//       RedPersonal: 'red_personal',
//       PortalRoaming: 'portal_roaming'
//     }
//   },
//   timeout: 25000
// };

export { Servers };
