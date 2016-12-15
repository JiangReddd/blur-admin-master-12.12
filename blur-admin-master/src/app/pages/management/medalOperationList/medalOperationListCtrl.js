/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management.medalOperationList')
      .controller('medalOperationListCtrl', medalOperationListCtrl);

  /** @ngInject */
  function medalOperationListCtrl($scope, $filter, editableOptions, editableThemes) {

    $scope.smartTablePageSize = 10;

    $scope.smartTableData = [
      {
        id: 1,
        medalName: '笔杆子',
        type: 'Otto',
        intro: '@mdo',
        priority: 'mdo@gmail.com',
        available: '28'
      },
      {
        id: 2,
        medalName: '金手指',
        type: 'Thornton',
        intro: '@fat',
        priority: 'fat@yandex.ru',
        available: '45'
      },
      {
        id: 3,
        medalName: 'Larry',
        type: 'Bird',
        intro: '@twitter',
        priority: 'twitter@outlook.com',
        available: '18'
      },
      {
        id: 4,
        medalName: 'John',
        type: 'Snow',
        intro: '@snow',
        priority: 'snow@gmail.com',
        available: '20'
      },
      {
        id: 5,
        medalName: 'Jack',
        type: 'Sparrow',
        intro: '@jack',
        priority: 'jack@yandex.ru',
        available: '30'
      },
      {
        id: 6,
        medalName: 'Ann',
        type: 'Smith',
        intro: '@ann',
        priority: 'ann@gmail.com',
        available: '21'
      },
      {
        id: 7,
        medalName: 'Barbara',
        type: 'Black',
        intro: '@barbara',
        priority: 'barbara@yandex.ru',
        available: '43'
      },
      {
        id: 8,
        medalName: 'Sevan',
        type: 'Bagrat',
        intro: '@sevan',
        priority: 'sevan@outlook.com',
        available: '13'
      },
      {
        id: 9,
        medalName: 'Ruben',
        type: 'Vardan',
        intro: '@ruben',
        priority: 'ruben@gmail.com',
        available: '22'
      },
      {
        id: 10,
        medalName: 'Karen',
        type: 'Sevan',
        intro: '@karen',
        priority: 'karen@yandex.ru',
        available: '33'
      },
      {
        id: 11,
        medalName: 'Mark',
        type: 'Otto',
        intro: '@mark',
        priority: 'mark@gmail.com',
        available: '38'
      },
      {
        id: 12,
        medalName: 'Jacob',
        type: 'Thornton',
        intro: '@jacob',
        priority: 'jacob@yandex.ru',
        available: '48'
      },
      {
        id: 13,
        medalName: 'Haik',
        type: 'Hakob',
        intro: '@haik',
        priority: 'haik@outlook.com',
        available: '48'
      },
      {
        id: 14,
        medalName: 'Garegin',
        type: 'Jirair',
        intro: '@garegin',
        priority: 'garegin@gmail.com',
        available: '40'
      },
      {
        id: 15,
        medalName: 'Krikor',
        type: 'Bedros',
        intro: '@krikor',
        priority: 'krikor@yandex.ru',
        available: '32'
      },
      {
        "id": 16,
        "medalName": "Francisca",
        "type": "Brady",
        "intro": "@Gibson",
        "priority": "franciscagibson@comtours.com",
        "available": 11
      },
      {
        "id": 17,
        "medalName": "Tillman",
        "type": "Figueroa",
        "intro": "@Snow",
        "priority": "tillmansnow@comtours.com",
        "available": 34
      },
      {
        "id": 18,
        "medalName": "Jimenez",
        "type": "Morris",
        "intro": "@Bryant",
        "priority": "jimenezbryant@comtours.com",
        "available": 45
      },
      {
        "id": 19,
        "medalName": "Sandoval",
        "type": "Jacobson",
        "intro": "@Mcbride",
        "priority": "sandovalmcbride@comtours.com",
        "available": 32
      },
      {
        "id": 20,
        "medalName": "Griffin",
        "type": "Torres",
        "intro": "@Charles",
        "priority": "griffincharles@comtours.com",
        "available": 19
      },
      {
        "id": 21,
        "medalName": "Cora",
        "type": "Parker",
        "intro": "@Caldwell",
        "priority": "coracaldwell@comtours.com",
        "available": 27
      },
      {
        "id": 22,
        "medalName": "Cindy",
        "type": "Bond",
        "intro": "@Velez",
        "priority": "cindyvelez@comtours.com",
        "available": 24
      },
      {
        "id": 23,
        "medalName": "Frieda",
        "type": "Tyson",
        "intro": "@Craig",
        "priority": "friedacraig@comtours.com",
        "available": 45
      },
      {
        "id": 24,
        "medalName": "Cote",
        "type": "Holcomb",
        "intro": "@Rowe",
        "priority": "coterowe@comtours.com",
        "available": 20
      },
      {
        "id": 25,
        "medalName": "Trujillo",
        "type": "Mejia",
        "intro": "@Valenzuela",
        "priority": "trujillovalenzuela@comtours.com",
        "available": 16
      },
      {
        "id": 26,
        "medalName": "Pruitt",
        "type": "Shepard",
        "intro": "@Sloan",
        "priority": "pruittsloan@comtours.com",
        "available": 44
      },
      {
        "id": 27,
        "medalName": "Sutton",
        "type": "Ortega",
        "intro": "@Black",
        "priority": "suttonblack@comtours.com",
        "available": 42
      },
      {
        "id": 28,
        "medalName": "Marion",
        "type": "Heath",
        "intro": "@Espinoza",
        "priority": "marionespinoza@comtours.com",
        "available": 47
      },
      {
        "id": 29,
        "medalName": "Newman",
        "type": "Hicks",
        "intro": "@Keith",
        "priority": "newmankeith@comtours.com",
        "available": 15
      },
      {
        "id": 30,
        "medalName": "Boyle",
        "type": "Larson",
        "intro": "@Summers",
        "priority": "boylesummers@comtours.com",
        "available": 32
      },
      {
        "id": 31,
        "medalName": "Haynes",
        "type": "Vinson",
        "intro": "@Mckenzie",
        "priority": "haynesmckenzie@comtours.com",
        "available": 15
      },
      {
        "id": 32,
        "medalName": "Miller",
        "type": "Acosta",
        "intro": "@Young",
        "priority": "milleryoung@comtours.com",
        "available": 55
      },
      {
        "id": 33,
        "medalName": "Johnston",
        "type": "Brown",
        "intro": "@Knight",
        "priority": "johnstonknight@comtours.com",
        "available": 29
      },
      {
        "id": 34,
        "medalName": "Lena",
        "type": "Pitts",
        "intro": "@Forbes",
        "priority": "lenaforbes@comtours.com",
        "available": 25
      },
      {
        "id": 35,
        "medalName": "Terrie",
        "type": "Kennedy",
        "intro": "@Branch",
        "priority": "terriebranch@comtours.com",
        "available": 37
      },
      {
        "id": 36,
        "medalName": "Louise",
        "type": "Aguirre",
        "intro": "@Kirby",
        "priority": "louisekirby@comtours.com",
        "available": 44
      },
      {
        "id": 37,
        "medalName": "David",
        "type": "Patton",
        "intro": "@Sanders",
        "priority": "davidsanders@comtours.com",
        "available": 26
      },
      {
        "id": 38,
        "medalName": "Holden",
        "type": "Barlow",
        "intro": "@Mckinney",
        "priority": "holdenmckinney@comtours.com",
        "available": 11
      },
      {
        "id": 39,
        "medalName": "Baker",
        "type": "Rivera",
        "intro": "@Montoya",
        "priority": "bakermontoya@comtours.com",
        "available": 47
      },
      {
        "id": 40,
        "medalName": "Belinda",
        "type": "Lloyd",
        "intro": "@Calderon",
        "priority": "belindacalderon@comtours.com",
        "available": 21
      },
      {
        "id": 41,
        "medalName": "Pearson",
        "type": "Patrick",
        "intro": "@Clements",
        "priority": "pearsonclements@comtours.com",
        "available": 42
      },
      {
        "id": 42,
        "medalName": "Alyce",
        "type": "Mckee",
        "intro": "@Daugherty",
        "priority": "alycedaugherty@comtours.com",
        "available": 55
      },
     {
        "id": 43,
        "medalName": "Valencia",
        "type": "Spence",
        "intro": "@Olsen",
        "priority": "valenciaolsen@comtours.com",
        "available": 20
      },
      {
        "id": 44,
        "medalName": "Leach",
        "type": "Holcomb",
        "intro": "@Humphrey",
        "priority": "leachhumphrey@comtours.com",
        "available": 28
      },
      {
        "id": 45,
        "medalName": "Moss",
        "type": "Baxter",
        "intro": "@Fitzpatrick",
        "priority": "mossfitzpatrick@comtours.com",
        "available": 51
      },
      {
        "id": 46,
        "medalName": "Jeanne",
        "type": "Cooke",
        "intro": "@Ward",
        "priority": "jeanneward@comtours.com",
        "available": 59
      },
      {
        "id": 47,
        "medalName": "Wilma",
        "type": "Briggs",
        "intro": "@Kidd",
        "priority": "wilmakidd@comtours.com",
        "available": 53
      },
      {
        "id": 48,
        "medalName": "Beatrice",
        "type": "Perry",
        "intro": "@Gilbert",
        "priority": "beatricegilbert@comtours.com",
        "available": 39
      },
      {
        "id": 49,
        "medalName": "Whitaker",
        "type": "Hyde",
        "intro": "@Mcdonald",
        "priority": "whitakermcdonald@comtours.com",
        "available": 35
      },
      {
        "id": 50,
        "medalName": "Rebekah",
        "type": "Duran",
        "intro": "@Gross",
        "priority": "rebekahgross@comtours.com",
        "available": 40
      },
      {
        "id": 51,
        "medalName": "Earline",
        "type": "Mayer",
        "intro": "@Woodward",
        "priority": "earlinewoodward@comtours.com",
        "available": 52
      },
      {
        "id": 52,
        "medalName": "Moran",
        "type": "Baxter",
        "intro": "@Johns",
        "priority": "moranjohns@comtours.com",
        "available": 20
      },
      {
        "id": 53,
        "medalName": "Nanette",
        "type": "Hubbard",
        "intro": "@Cooke",
        "priority": "nanettecooke@comtours.com",
        "available": 55
      },
      {
        "id": 54,
        "medalName": "Dalton",
        "type": "Walker",
        "intro": "@Hendricks",
        "priority": "daltonhendricks@comtours.com",
        "available": 25
      },
      {
        "id": 55,
        "medalName": "Bennett",
        "type": "Blake",
        "intro": "@Pena",
        "priority": "bennettpena@comtours.com",
        "available": 13
      },
      {
        "id": 56,
        "medalName": "Kellie",
        "type": "Horton",
        "intro": "@Weiss",
        "priority": "kellieweiss@comtours.com",
        "available": 48
      },
      {
        "id": 57,
        "medalName": "Hobbs",
        "type": "Talley",
        "intro": "@Sanford",
        "priority": "hobbssanford@comtours.com",
        "available": 28
      },
      {
        "id": 58,
        "medalName": "Mcguire",
        "type": "Donaldson",
        "intro": "@Roman",
        "priority": "mcguireroman@comtours.com",
        "available": 38
      },
      {
        "id": 59,
        "medalName": "Rodriquez",
        "type": "Saunders",
        "intro": "@Harper",
        "priority": "rodriquezharper@comtours.com",
        "available": 20
      },
      {
        "id": 60,
        "medalName": "Lou",
        "type": "Conner",
        "intro": "@Sanchez",
        "priority": "lousanchez@comtours.com",
        "available": 16
      }
    ];

    $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    $scope.peopleTableData = [
      {
        id: 1,
        medalName: 'Mark',
        type: 'Otto',
        intro: '@mdo',
        priority: 'mdo@gmail.com',
        age: '28',
        status: 'info'
      },
      {
        id: 2,
        medalName: 'Jacob',
        type: 'Thornton',
        intro: '@fat',
        priority: 'fat@yandex.ru',
        age: '45',
        status: 'primary'
      },
      {
        id: 3,
        medalName: 'Larry',
        type: 'Bird',
        intro: '@twitter',
        priority: 'twitter@outlook.com',
        age: '18',
        status: 'success'
      },
      {
        id: 4,
        medalName: 'John',
        type: 'Snow',
        intro: '@snow',
        priority: 'snow@gmail.com',
        age: '20',
        status: 'danger'
      },
      {
        id: 5,
        medalName: 'Jack',
        type: 'Sparrow',
        intro: '@jack',
        priority: 'jack@yandex.ru',
        age: '30',
        status: 'warning'
      }
    ];

    $scope.metricsTableData = [
      {
        image: 'app/browsers/chrome.svg',
        browser: 'Google Chrome',
        visits: '10,392',
        isVisitsUp: true,
        purchases: '4,214',
        isPurchasesUp: true,
        percent: '45%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/firefox.svg',
        browser: 'Mozilla Firefox',
        visits: '7,873',
        isVisitsUp: true,
        purchases: '3,031',
        isPurchasesUp: false,
        percent: '28%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/ie.svg',
        browser: 'Internet Explorer',
        visits: '5,890',
        isVisitsUp: false,
        purchases: '2,102',
        isPurchasesUp: false,
        percent: '17%',
        isPercentUp: false
      },
      {
        image: 'app/browsers/safari.svg',
        browser: 'Safari',
        visits: '4,001',
        isVisitsUp: false,
        purchases: '1,001',
        isPurchasesUp: false,
        percent: '14%',
        isPercentUp: true
      },
      {
        image: 'app/browsers/opera.svg',
        browser: 'Opera',
        visits: '1,833',
        isVisitsUp: true,
        purchases: '83',
        isPurchasesUp: true,
        percent: '5%',
        isPercentUp: false
      }
    ];

    $scope.users = [
      {
        "id": 1,
        "name": "Esther Vang",
        "status": 4,
        "group": 3
      },
      {
        "id": 2,
        "name": "Leah Freeman",
        "status": 3,
        "group": 1
      },
      {
        "id": 3,
        "name": "Mathews Simpson",
        "status": 3,
        "group": 2
      },
      {
        "id": 4,
        "name": "Buckley Hopkins",
        "group": 4
      },
      {
        "id": 5,
        "name": "Buckley Schwartz",
        "status": 1,
        "group": 1
      },
      {
        "id": 6,
        "name": "Mathews Hopkins",
        "status": 4,
        "group": 2
      },
      {
        "id": 7,
        "name": "Leah Vang",
        "status": 4,
        "group": 1
      },
      {
        "id": 8,
        "name": "Vang Schwartz",
        "status": 4,
        "group": 2
      },
      {
        "id": 9,
        "name": "Hopkin Esther",
        "status": 1,
        "group": 2
      },
      {
        "id": 10,
        "name": "Mathews Schwartz",
        "status": 1,
        "group": 3
      }
    ];

    $scope.statuses = [
      {value: 1, text: 'Good'},
      {value: 2, text: 'Awesome'},
      {value: 3, text: 'Excellent'},
    ];

    $scope.groups = [
      {id: 1, text: 'user'},
      {id: 2, text: 'customer'},
      {id: 3, text: 'vip'},
      {id: 4, text: 'admin'}
    ];

    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
