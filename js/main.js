angular.module('myApp', ['zingchart-angularjs'])
  .controller('ChartController', ChartController);

  ChartController.$inject = ['$scope', '$http'];

  function ChartController($scope, $http) {
    zingchart.loadModules('maps, maps-world-countries');

    zingchart.shape_click = function(ev) {
      $http.get('https://restcountries.eu/rest/v2/alpha/' + ev.shapeid)
        .then(function(response) {
          $scope.country = response.data;
        }
      )
    }

   $scope.myJson = {
      type: null,
      title: {
        text: 'Flags of the World',
        'color': 'black',
        'background-color': 'none'
      },
      subtitle : {
        text: "Click the country to see it's flag",
        color: 'grey',
      },
      shapes: [
        {
          type: 'zingchart.maps',
          options: {
            id: 'map',
            name: 'world.countries',
            scale: true,
             style: {
              'background-color': '#12966A',
              label: {
                visible: false
              },
              'hover-state':{
                visible: true
              },
              tooltip: {
                'border-radius': '6'
              },
            }
          }
        }
      ]
    };
  }

