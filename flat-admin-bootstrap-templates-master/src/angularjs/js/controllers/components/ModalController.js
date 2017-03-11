
class ModalController {
  constructor($uibModalInstance) {
    console.log("test")
    this.ok = () => {
      console.log("ok")
      $uibModalInstance.close();
    };

    this.cancel = () => {
      console.log("cancel")
      $uibModalInstance.dismiss('cancel');
    };
  }
}

export default ModalController;