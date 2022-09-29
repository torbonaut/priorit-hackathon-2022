import { NgModule } from "@angular/core";
import { LoginRouterModule } from "./login-routing.module";
import { AppLoginComponent } from "./login.component";

@NgModule({
    declarations: [AppLoginComponent],
    imports: [LoginRouterModule],
    exports: []
})
export class LoginModule { }