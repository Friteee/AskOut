import {
  AppController,
  DashboardController,
  MessageController,
  ChartController,
  ComponentController,
  FormController,
  TableController,
  LoginController
} from './controllers'

export default function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $stateProvider
    .state("main", {
      url: "/",
      controller: AppController,
      controllerAs: "main",
      templateUrl: 'main.html',
      abstract: true
    })
    .state("main.dashboard", {
      url: "",
      controller: DashboardController,
      controllerAs: "vm",
      templateUrl: 'pages/dashboard.html'
    })
    .state("main.messaging", {
      url: "messaging",
      controller: MessageController,
      controllerAs: "vm",
      templateUrl: 'pages/message.html'
    })
    .state("main.uikits", {
      url: "uikits",
      abstract: true,
      templateUrl: 'pages/uikits/main.html'
    })
    .state("main.uikits.customize", {
      url: "/customize",
      templateUrl: 'pages/uikits/customize.html'
    })
    .state("main.uikits.components", {
      url: "/components",
      controller: ComponentController,
      controllerAs: "vm",
      templateUrl: 'pages/uikits/components.html'
    })
    .state("main.uikits.form", {
      url: "/form",
      controller: FormController,
      controllerAs: "vm",
      templateUrl: 'pages/uikits/form.html'
    })
    .state("main.uikits.card", {
      url: "/card",
      templateUrl: 'pages/uikits/card.html'
    })
    .state("main.uikits.table", {
      url: "/table",
      controller: TableController,
      controllerAs: "vm",
      templateUrl: 'pages/uikits/table.html'
    })
    .state("main.uikits.pricing", {
      url: "/pricing",
      templateUrl: 'pages/uikits/pricing.html'
    })
    .state("main.uikits.timeline", {
      url: "/timeline",
      templateUrl: 'pages/uikits/timeline.html'
    })
    .state("main.uikits.chart", {
      url: "/chart",
      controller: ChartController,
      controllerAs: 'vm',
      templateUrl: 'pages/uikits/chart.html'
    })
    .state("main.uikits.icons", {
      url: "/icons",
      templateUrl: 'pages/uikits/icons.html'
    })
    .state("main.pages", {
      url: "pages",
      abstract: true,
      templateUrl: 'pages/pages/main.html'
    })
    .state("main.pages.form", {
      url: "/form",
      controller: FormController,
      controllerAs: "vm",
      templateUrl: 'pages/pages/form.html'
    })
    .state("main.pages.profile", {
      url: "/profile",
      templateUrl: 'pages/pages/profile.html'
    })
    .state("main.pages.search", {
      url: "/search",
      templateUrl: 'pages/pages/search.html'
    })
    .state("login", {
      url: "/login",
      controller: LoginController,
      controllerAs: "vm",
      templateUrl: 'pages/pages/login.html'
    })
    .state("register", {
      url: "/register",
      templateUrl: 'pages/pages/register.html'
    })
  return $urlRouterProvider.otherwise('/');
}
