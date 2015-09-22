import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';

import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import { Todo } from './components/todo/todo';
import { About } from './components/about/about';

@Component({
	selector: 'app'
})
@View({
  template: '<h1>{{ name }}</h1>' // Defines the inline template for the component
})
class MyAppComponent {
  name: string;
  constructor() {
    this.name = 'Todo app';
  }
}

@RouteConfig([
	{ path: '/', component: Todo, as: 'home' }
]);

bootstrap(MyAppComponent);
