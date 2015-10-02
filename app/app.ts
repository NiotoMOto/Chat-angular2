import {Component, View, bootstrap, bind} from 'angular2/angular2';
import {ROUTER_BINDINGS, RouterOutlet, RouteConfig, RouterLink} from 'angular2/router';
import {LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {Todo} from './components/todo/todo';
import {Chat} from './components/chat/chat';
@Component({
	selector: 'app'
})
@View({
  template: `
	<div class="container">
			<nav>
				<ul>
					<li><a [router-link]="['/home']">Todo</a></li>
					<li><a [router-link]="['/chat']">Chat</a></li>
				</ul>
			</nav>
			<router-outlet></router-outlet>
		</div>
	 `,
	 directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
	{ path: '/home', component: Todo, as: 'home'},
	{ path: '/chat', component: Chat, as: 'chat'}

])


class MyAppComponent {

}

bootstrap(MyAppComponent, [
	ROUTER_BINDINGS,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
