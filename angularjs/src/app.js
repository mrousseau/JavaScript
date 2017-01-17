import angular from 'angular';

import { ExclamationFilter } from './exclamation.filter';
import { EldestFilter } from './eldest.filter';
import { MyFirstController } from './my-first.controller';
import { SuperService } from './super.service';

angular.module('app', [])

.controller('MyFirstController', MyFirstController)
.filter('exclamation', ExclamationFilter)
.filter('eldest', EldestFilter)
.service('SuperService', SuperService)

.value('Version', '1.0.0')

.run(function() {
  console.log('PizzaYOLO !');
})