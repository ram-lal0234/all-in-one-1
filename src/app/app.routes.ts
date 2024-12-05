import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect to HomeModule
    {
      path: '',
      loadChildren: () =>
        import('./modules/home/home.module').then((m) => m.HomeModule), // Lazy load HomeModule
    },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule {}