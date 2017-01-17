import angular from 'angular';

import { ExclamationFilter } from './exclamation.filter';
import { EldestFilter } from './eldest.filter';
import { MyFirstController } from './my-first.controller';

angular.module('app', [])

.controller('MyFirstController', MyFirstController)
.filter('exclamation', ExclamationFilter)
.filter('eldest', EldestFilter)

.run(function() {
  console.log('PizzaYOLO !');
})