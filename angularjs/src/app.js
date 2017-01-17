import angular from 'angular';

import { ExclamationFilter } from './exclamation.filter';
import { EldestFilter } from './eldest.filter';
import { MyFirstController } from './my-first.controller';
import { UserService } from './user.service';

angular.module('app', [])

.controller('MyFirstController', MyFirstController)
.filter('exclamation', ExclamationFilter)
.filter('eldest', EldestFilter)
.service('usersService', UserService)

.value('Version', '1.0.0')

.run(function() {
  console.log('PizzaYOLO !');
})