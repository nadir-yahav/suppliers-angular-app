import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "suppliers"
  },
  {
    path: "suppliers",
    loadChildren: () =>
      import("./modules/suppliers/suppliers.module").then(
        m => m.SuppliersModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
