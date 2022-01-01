import { ITireBrand } from './TireBrand';
export interface ITireModel {
	id?: string;
  name: string;
  brand?: ITireBrand;
  description?: string;
}
