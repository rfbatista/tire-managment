export abstract class Schema<Type, Entity> {
  constructor(props: Type, id?: number) {
    Object.assign(this, { ...props, id });
  }
}
