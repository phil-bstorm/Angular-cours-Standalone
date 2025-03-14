import {Routes} from "@angular/router";
import {HomeComponent} from "./features/home/pages/home/home.component";

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "theory",
		loadChildren: () =>
			import("./features/theory/theory.routes").then(r => r.routes),
	},
	{
		path: "demo",
		loadChildren: () =>
			import("./features/demo/demo.routes").then(r => r.routes),
	},
	{
		path: "exercise",
		loadChildren: () =>
			import("./features/exercise/exercise.routes").then(r => r.routes),
	},
];
