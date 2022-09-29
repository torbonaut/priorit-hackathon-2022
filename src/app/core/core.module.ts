import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { AuthService } from "./auth/auth.service";
import { AuthState } from "./auth/auth.state";
import { UserService } from "./user/user.service";
import { UserState } from "./user/user.state";

@NgModule({
    declarations: [],
    imports: [HttpClientModule, NgxsModule.forFeature([AuthState, UserState])],
    exports: [HttpClientModule],
    providers: [AuthService, UserService]
})
export class CoreModule {}