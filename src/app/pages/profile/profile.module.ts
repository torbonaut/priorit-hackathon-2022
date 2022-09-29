import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppProfileRoutingModule } from "./profile-routing.module";
import { AppProfileComponent } from "./profile.component";

@NgModule({
    declarations: [
        AppProfileComponent
    ],
    imports: [AppProfileRoutingModule, CommonModule],
    exports:[AppProfileComponent]
})
export class ProfileModule { }