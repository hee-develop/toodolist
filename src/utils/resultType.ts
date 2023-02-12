export type Result<T, E extends Error> = Success<T, E> | Failure<E, T>;

export class Success<T, E extends Error = never> {
  readonly type = 'success';

  constructor(readonly value: T) {}

  isSuccess(): this is Success<T, E> {
    return true;
  }

  isFailure(): this is Failure<E, T> {
    return false;
  }
}

export class Failure<E extends Error, T = never> {
  readonly type = 'failure';

  constructor(readonly value: E) {}

  isSuccess(): this is Success<T, E> {
    return false;
  }
  isFailure(): this is Failure<E, T> {
    return true;
  }
}
