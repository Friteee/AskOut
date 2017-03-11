import { list } from './data'

class TableController {
  constructor(DTOptionsBuilder, DTColumnBuilder, $q) {

    this.dtOptions = DTOptionsBuilder.fromFnPromise(() => {
        var defer = $q.defer();
        defer.resolve(list);
        return defer.promise;
      })
      .withBootstrap()
      .withOption('dom','<"top"fl<"clear">>rt<"bottom"ip<"clear">>')
      .withOption('oLanguage', {
        "sSearch": "",
        "sLengthMenu": "_MENU_"
      })
      .withOption('initComplete', function() {
        angular.element('.dataTables_filter input').attr('placeholder', 'Search ...');
      })

    this.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];
  }
}

export default TableController