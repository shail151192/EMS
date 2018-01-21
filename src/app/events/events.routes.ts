import {NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const eventRoutes:Routes= [

    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(eventRoutes)
    ],
    exports: [RouterModule]
})

export class EventRoutesModule {

}