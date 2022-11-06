import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HeaderComponent } from "./header.component";

@NgModule({
//Determina quais components o modulo é responsavel
    declarations:[
        HeaderComponent,
    ],
    imports:[
        BrowserModule,
    ],
//Permite que outros components acessem esse grupo
    exports: [
        HeaderComponent,
    ]
})
export class SharedModule{}