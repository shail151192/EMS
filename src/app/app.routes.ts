import {NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

const appRoutes:Routes= [

    {
        path: '',
        loadChildren: 'app/events/events.module#EventsModule',
        canLoad: []
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash:true})
    ],
    exports: [RouterModule]
})

export class AppRoutesModule {

}