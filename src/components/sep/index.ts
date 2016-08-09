import angular from 'angular';
import 'angular-ui-router';

import sepConsultaComponent from './sep-consulta.component';
import sepShared from './shared/index';

const dependencies = [
    'ui.router', sepShared.name
];

export default angular.module( 'sep-consulta.component', dependencies )
                      .directive( 'sepConsulta', sepConsultaComponent )
                      .config( [
                          '$stateProvider', ( $stateProvider ) => {
                              $stateProvider
                                  .state( 'app.sepConsulta', {
                                      url: 'sepConsulta',
                                      data: {title: 'Consulta SEP'},
                                      nativeTransitions: {
                                          'type': 'fade'
                                      },
                                      views: {
                                          content: {
                                              template: '<sep-consulta></sep-consulta>'
                                          }
                                      }
                                  } );
                          }
                      ] );