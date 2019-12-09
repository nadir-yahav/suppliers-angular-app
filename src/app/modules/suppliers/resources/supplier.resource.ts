import { Resource } from "src/app/core/services/generic/resource";

export class Supplier extends Resource {
  name: string = "";
  address: string = "";
  phone: string = "";
  email: string = "";
  attributes: number[] = [];
}
