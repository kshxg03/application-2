export class CustomError<T> {
  public readonly _error: TypeError<T>;
  
  constructor(error: TypeError<T>) {
    this._error = error;
  }
}

export interface TypeError<T> {
  Message: string | Object | Array<T> | any;
}
