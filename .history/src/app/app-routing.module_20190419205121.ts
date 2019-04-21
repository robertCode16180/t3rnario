import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule",  canLoad: [LoggedInLazyLoadGuard] },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule",  canLoad: [LoggedInLazyLoadGuard] },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule",  canLoad: [LoggedInLazyLoadGuard] },
    // tslint:disable-next-line:max-line-length
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule",  canLoad: [LoggedInLazyLoadGuard] },
    // tslint:disable-next-line:max-line-length
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule",  canLoad: [LoggedInLazyLoadGuard] }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
