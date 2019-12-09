import { ResourceService } from "src/app/core/services/generic/resource.service";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "../resources/supplier.resource";
import { Injectable } from "@angular/core";
import { Serializer } from "src/app/core/services/generic/serializer";

@Injectable()
export class SuppliersService extends ResourceService<Supplier> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "suppliers.json", new Serializer(Supplier));
  }

  private _suppliers: Supplier[] = [];
  get suppliers() {
    return this._suppliers;
  }

  async getAll(): Promise<Supplier[]> {
    if (this._suppliers.length === 0)
      this._suppliers = await this.list().toPromise();
    return this.suppliers;
  }

  updateLocal(supplier) {
    if (!supplier.id) {
      supplier.id = this.suppliers.length + 1;
      this.suppliers.push(supplier);
    } else if (!isNaN(supplier.id))
      this.suppliers[
        this.suppliers.findIndex(el => el.id === supplier.id)
      ] = supplier;
  }
}
