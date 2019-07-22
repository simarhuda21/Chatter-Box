import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ActiveListComponent } from './components/active-list/active-list.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FlashMessagesModule} from 'angular2-flash-messages';


@NgModule({
  declarations: [
    AppComponent,
    ActiveListComponent,
    ChatRoomComponent,
    HomeComponent,
    LoginComponent,
    MessageComponent,
    NavbarComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
