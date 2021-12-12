import { TireRemodeling } from '../packages/frontend/server/domain/entities/TireRemodeling';
import { Schema } from '../../../shared/Schema';

export interface ITireRemodelingSchema {}

export class TireRemodelingSchema extends Schema<
  ITireRemodelingSchema,
  TireRemodeling
> {}
