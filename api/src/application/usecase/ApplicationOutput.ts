export class ApplicationOutput<T> {
	public isSuccess: boolean;
	public isFailure: boolean
	public error: T | string;
	private _value: T;
  
	public constructor (isSuccess: boolean, error?: T | string, value?: T) {
	  if (isSuccess && error) {
		throw new Error("InvalidOperation: A result cannot be successful and contain an error");
	  }
	  if (!isSuccess && !error) {
		throw new Error("InvalidOperation: A failing result needs to contain an error message");
	  }
  
	  this.isSuccess = isSuccess;
	  this.isFailure = !isSuccess;
	  this.error = error;
	  this._value = value;
	  
	  Object.freeze(this);
	}
  
	public getValue () : T {
	  if (!this.isSuccess) {
		console.log(this.error,);
		throw new Error("Can't get the value of an error result. Use 'errorValue' instead.")
	  } 
  
	  return this._value;
	}
  
	public errorValue (): T {
	  return this.error as T;
	}
  
	public static ok<U> (value?: U) : ApplicationOutput<U> {
	  return new ApplicationOutput<U>(true, null, value);
	}
  
	public static fail<U> (error: string): ApplicationOutput<U> {
	  return new ApplicationOutput<U>(false, error);
	}
  
	public static combine (results: ApplicationOutput<any>[]) : ApplicationOutput<any> {
	  for (let result of results) {
		if (result.isFailure) return result;
	  }
	  return ApplicationOutput.ok();
	}
  }