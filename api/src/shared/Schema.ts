export abstract class Schema<Type, Entity> {
  constructor(props: Type, id?: string) {
    Object.assign(this, { ...props, id });
  }
}
