import ModalController from './ModalController'

class ComponentController {
  constructor($uibModal) {

    this.pagination = {
      total: 64,
      page: 2
    }

    this.modal = () => {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'demoModal.html',
        controller: ModalController,
        controllerAs: 'md'
      })
    }
  }
}

export default ComponentController