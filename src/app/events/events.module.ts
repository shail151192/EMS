import {NgModule} from '@angular/core';
import {EventRoutesModule} from './events.routes';
import {CarouselModule}  from 'ngx-bootstrap/carousel';

import { HomeComponent} from './components/home/home.component';
import {WeddingsComponent} from './components/weddings/weddings.component';

@NgModule({
    imports:[
        EventRoutesModule,
        CarouselModule.forRoot()
    ],
    declarations: [
        HomeComponent,
        WeddingsComponent
    ],
    exports :[]
})

export class EventsModule {

}