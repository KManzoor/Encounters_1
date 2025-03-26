import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CommonModule,HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
