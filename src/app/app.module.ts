import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ChatDashboardComponent } from './chat-dashboard/chat-dashboard.component';
import { ChatSidemenuComponent } from './chat-sidemenu/chat-sidemenu.component';
import { ChatMainContentComponent } from './chat-main-content/chat-main-content.component';
import { UserListComponent } from './user-list/user-list.component';
import { ConversationComponent } from './conversation/conversation.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import the MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import the MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Import the MatButtonModule
import { HttpClientModule } from '@angular/common/http';
import { ChatTimestampPipe } from './pipes/chat-timestamp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChatDashboardComponent,
    ChatSidemenuComponent,
    ChatMainContentComponent,
    UserListComponent,
    ConversationComponent,
    ChatTimestampPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule, // Add MatFormFieldModule
    MatInputModule, // Add MatInputModule
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
