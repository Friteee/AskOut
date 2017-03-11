let datatable = $('.datatable').DataTable({
    "dom": '<"top"fl<"clear">>rt<"bottom"ip<"clear">>',
    "oLanguage": {
      "sSearch": "",
      "sLengthMenu": "_MENU_"
    },
    "initComplete": (settings, json) => { 
      $('div.dataTables_filter input').attr('placeholder', 'Search...');
      // $(".dataTables_wrapper select").select2({
      //   minimumResultsForSearch: Infinity
      // });
    }
  });
