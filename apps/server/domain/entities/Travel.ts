import { Tire } from './Tire';
import { Truck } from './Truck';
import { TruckCart } from './TruckCart';

export interface ITravel{
	date: Date;
	truck: Truck;
	cart: TruckCart;
	tires: Tire;
}