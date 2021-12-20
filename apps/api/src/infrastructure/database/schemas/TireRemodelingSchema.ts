import { TireRemodeling } from 'domain/entities/TireRemodeling';
import { Schema } from '../../../shared/Schema';

export interface ITireRemodelingSchema {}

export class TireRemodelingSchema extends Schema<
  ITireRemodelingSchema,
  TireRemodeling
> {}
