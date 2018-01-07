import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment} from '../environments/environment';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { PlayerService} from './services/player.service';

import { AppComponent } from './app.component';
import { PlayersComponent } from './components/players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase,'herofinder'),
    AngularFirestoreModule
  ],
  providers: [ PlayerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
