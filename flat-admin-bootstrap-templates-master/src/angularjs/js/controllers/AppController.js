import CONFIG from '../config' 

class AppController {
  constructor($rootScope, $sce, $state) {

    this.app = addAppConfig($sce, CONFIG)
    this.appendToApp = angular.element(document.querySelector('.app'));
    this.page = getPageConfig($sce, $state)
    this.toggle = {
      sidebar: false,
      navbar: false
    }
    this.theme = {
      current: "app-default"
    }

    /* url change event */
    $rootScope.$on('$stateChangeSuccess', (event, toState, toParams, fromState, fromParams) => {
      this.page = getPageConfig($sce, $state)
    })
  }
}

export default AppController

function getPageConfig($sce, $state) {
  const config = CONFIG["PAGE"][$state.current.name]
  return {
    ...config,
    title: $sce.trustAsHtml(config.title)
  }
}

function addAppConfig($sce, CONFIG) {
  return {
    title: $sce.trustAsHtml(CONFIG["TITLE"])
  }
}