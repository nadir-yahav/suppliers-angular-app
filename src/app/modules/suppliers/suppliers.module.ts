import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SuppliersComponent } from "./pages/suppliers/suppliers.component";
import { SupplierComponent } from "./pages/supplier/supplier.component";
import { SuppliersService } from "./services/suppliers.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { CrudFormComponent } from "./components/crud-form/crud-form.component";
import { SearchComponent } from "./components/search/search.component";
import { CardGroupComponent } from "./components/card-group/card-group.component";
import { AttributesService } from "./services/attributes.service";

const routes: Routes = [
  { path: "", component: SuppliersComponent },
  { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [
    SuppliersComponent,
    SupplierComponent,
    CrudFormComponent,
    FilterPipe,
    SearchComponent,
    CardGroupComponent
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [SuppliersService, AttributesService]
})
export class SuppliersModule {}
