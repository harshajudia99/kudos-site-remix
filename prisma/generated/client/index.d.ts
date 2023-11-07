
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model KudoStyle
 * 
 */
export type KudoStyle = $Result.DefaultSelection<Prisma.$KudoStylePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kudo
 * 
 */
export type Kudo = $Result.DefaultSelection<Prisma.$KudoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Color: {
  RED: 'RED',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
  BLUE: 'BLUE',
  WHITE: 'WHITE'
};

export type Color = (typeof Color)[keyof typeof Color]


export const Emoji: {
  THUMBSUP: 'THUMBSUP',
  PARTY: 'PARTY',
  HANDSUP: 'HANDSUP'
};

export type Emoji = (typeof Emoji)[keyof typeof Emoji]

}

export type Color = $Enums.Color

export const Color: typeof $Enums.Color

export type Emoji = $Enums.Emoji

export const Emoji: typeof $Enums.Emoji

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.kudo`: Exposes CRUD operations for the **Kudo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kudos
    * const kudos = await prisma.kudo.findMany()
    * ```
    */
  get kudo(): Prisma.KudoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Kudo: 'Kudo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'kudo'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kudo: {
        payload: Prisma.$KudoPayload<ExtArgs>
        fields: Prisma.KudoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KudoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KudoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          findFirst: {
            args: Prisma.KudoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KudoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          findMany: {
            args: Prisma.KudoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>[]
          }
          create: {
            args: Prisma.KudoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          createMany: {
            args: Prisma.KudoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KudoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          update: {
            args: Prisma.KudoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          deleteMany: {
            args: Prisma.KudoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KudoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KudoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KudoPayload>
          }
          aggregate: {
            args: Prisma.KudoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKudo>
          }
          groupBy: {
            args: Prisma.KudoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KudoGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.KudoFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.KudoAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.KudoCountArgs<ExtArgs>,
            result: $Utils.Optional<KudoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authoredKudos: number
    kudos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredKudos?: boolean | UserCountOutputTypeCountAuthoredKudosArgs
    kudos?: boolean | UserCountOutputTypeCountKudosArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthoredKudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudoWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Profile
   */





  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    firstName?: boolean
    lastName?: boolean
  }


  export type $ProfilePayload = {
    name: "Profile"
    objects: {}
    scalars: {
      firstName: string
      lastName: string
    }
    composites: {}
  }


  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>





  /**
   * Fields of the Profile model
   */ 
  interface ProfileFieldRefs {
    readonly firstName: FieldRef<"Profile", 'String'>
    readonly lastName: FieldRef<"Profile", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
  }



  /**
   * Model KudoStyle
   */





  export type KudoStyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    backgroundColor?: boolean
    textColor?: boolean
    emoji?: boolean
  }, ExtArgs["result"]["kudoStyle"]>

  export type KudoStyleSelectScalar = {
    backgroundColor?: boolean
    textColor?: boolean
    emoji?: boolean
  }


  export type $KudoStylePayload = {
    name: "KudoStyle"
    objects: {}
    scalars: {
      backgroundColor: $Enums.Color
      textColor: $Enums.Color
      emoji: $Enums.Emoji
    }
    composites: {}
  }


  type KudoStyleGetPayload<S extends boolean | null | undefined | KudoStyleDefaultArgs> = $Result.GetResult<Prisma.$KudoStylePayload, S>





  /**
   * Fields of the KudoStyle model
   */ 
  interface KudoStyleFieldRefs {
    readonly backgroundColor: FieldRef<"KudoStyle", 'Color'>
    readonly textColor: FieldRef<"KudoStyle", 'Color'>
    readonly emoji: FieldRef<"KudoStyle", 'Emoji'>
  }
    

  // Custom InputTypes

  /**
   * KudoStyle without action
   */
  export type KudoStyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KudoStyle
     */
    select?: KudoStyleSelect<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    authoredKudos?: boolean | User$authoredKudosArgs<ExtArgs>
    kudos?: boolean | User$kudosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authoredKudos?: boolean | User$authoredKudosArgs<ExtArgs>
    kudos?: boolean | User$kudosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      authoredKudos: Prisma.$KudoPayload<ExtArgs>[]
      kudos: Prisma.$KudoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {
      profile: Prisma.$ProfilePayload
    }
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    authoredKudos<T extends User$authoredKudosArgs<ExtArgs> = {}>(args?: Subset<T, User$authoredKudosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findMany'> | Null>;

    kudos<T extends User$kudosArgs<ExtArgs> = {}>(args?: Subset<T, User$kudosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.authoredKudos
   */
  export type User$authoredKudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    where?: KudoWhereInput
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    cursor?: KudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KudoScalarFieldEnum | KudoScalarFieldEnum[]
  }


  /**
   * User.kudos
   */
  export type User$kudosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    where?: KudoWhereInput
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    cursor?: KudoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KudoScalarFieldEnum | KudoScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Kudo
   */

  export type AggregateKudo = {
    _count: KudoCountAggregateOutputType | null
    _min: KudoMinAggregateOutputType | null
    _max: KudoMaxAggregateOutputType | null
  }

  export type KudoMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    authorId: string | null
    recipientId: string | null
  }

  export type KudoMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    message: string | null
    authorId: string | null
    recipientId: string | null
  }

  export type KudoCountAggregateOutputType = {
    id: number
    createdAt: number
    message: number
    authorId: number
    recipientId: number
    _all: number
  }


  export type KudoMinAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
    recipientId?: true
  }

  export type KudoMaxAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
    recipientId?: true
  }

  export type KudoCountAggregateInputType = {
    id?: true
    createdAt?: true
    message?: true
    authorId?: true
    recipientId?: true
    _all?: true
  }

  export type KudoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kudo to aggregate.
     */
    where?: KudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kudos
    **/
    _count?: true | KudoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KudoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KudoMaxAggregateInputType
  }

  export type GetKudoAggregateType<T extends KudoAggregateArgs> = {
        [P in keyof T & keyof AggregateKudo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKudo[P]>
      : GetScalarType<T[P], AggregateKudo[P]>
  }




  export type KudoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KudoWhereInput
    orderBy?: KudoOrderByWithAggregationInput | KudoOrderByWithAggregationInput[]
    by: KudoScalarFieldEnum[] | KudoScalarFieldEnum
    having?: KudoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KudoCountAggregateInputType | true
    _min?: KudoMinAggregateInputType
    _max?: KudoMaxAggregateInputType
  }

  export type KudoGroupByOutputType = {
    id: string
    createdAt: Date
    message: string
    authorId: string
    recipientId: string
    _count: KudoCountAggregateOutputType | null
    _min: KudoMinAggregateOutputType | null
    _max: KudoMaxAggregateOutputType | null
  }

  type GetKudoGroupByPayload<T extends KudoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KudoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KudoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KudoGroupByOutputType[P]>
            : GetScalarType<T[P], KudoGroupByOutputType[P]>
        }
      >
    >


  export type KudoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    style?: boolean | KudoStyleDefaultArgs<ExtArgs>
    message?: boolean
    authorId?: boolean
    recipientId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kudo"]>

  export type KudoSelectScalar = {
    id?: boolean
    createdAt?: boolean
    message?: boolean
    authorId?: boolean
    recipientId?: boolean
  }

  export type KudoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $KudoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kudo"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      message: string
      authorId: string
      recipientId: string
    }, ExtArgs["result"]["kudo"]>
    composites: {
      style: Prisma.$KudoStylePayload | null
    }
  }


  type KudoGetPayload<S extends boolean | null | undefined | KudoDefaultArgs> = $Result.GetResult<Prisma.$KudoPayload, S>

  type KudoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KudoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: KudoCountAggregateInputType | true
    }

  export interface KudoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kudo'], meta: { name: 'Kudo' } }
    /**
     * Find zero or one Kudo that matches the filter.
     * @param {KudoFindUniqueArgs} args - Arguments to find a Kudo
     * @example
     * // Get one Kudo
     * const kudo = await prisma.kudo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KudoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KudoFindUniqueArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Kudo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KudoFindUniqueOrThrowArgs} args - Arguments to find a Kudo
     * @example
     * // Get one Kudo
     * const kudo = await prisma.kudo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KudoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Kudo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoFindFirstArgs} args - Arguments to find a Kudo
     * @example
     * // Get one Kudo
     * const kudo = await prisma.kudo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KudoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoFindFirstArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Kudo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoFindFirstOrThrowArgs} args - Arguments to find a Kudo
     * @example
     * // Get one Kudo
     * const kudo = await prisma.kudo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KudoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Kudos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kudos
     * const kudos = await prisma.kudo.findMany()
     * 
     * // Get first 10 Kudos
     * const kudos = await prisma.kudo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kudoWithIdOnly = await prisma.kudo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KudoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Kudo.
     * @param {KudoCreateArgs} args - Arguments to create a Kudo.
     * @example
     * // Create one Kudo
     * const Kudo = await prisma.kudo.create({
     *   data: {
     *     // ... data to create a Kudo
     *   }
     * })
     * 
    **/
    create<T extends KudoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KudoCreateArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Kudos.
     *     @param {KudoCreateManyArgs} args - Arguments to create many Kudos.
     *     @example
     *     // Create many Kudos
     *     const kudo = await prisma.kudo.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KudoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kudo.
     * @param {KudoDeleteArgs} args - Arguments to delete one Kudo.
     * @example
     * // Delete one Kudo
     * const Kudo = await prisma.kudo.delete({
     *   where: {
     *     // ... filter to delete one Kudo
     *   }
     * })
     * 
    **/
    delete<T extends KudoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KudoDeleteArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Kudo.
     * @param {KudoUpdateArgs} args - Arguments to update one Kudo.
     * @example
     * // Update one Kudo
     * const kudo = await prisma.kudo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KudoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KudoUpdateArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Kudos.
     * @param {KudoDeleteManyArgs} args - Arguments to filter Kudos to delete.
     * @example
     * // Delete a few Kudos
     * const { count } = await prisma.kudo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KudoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KudoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kudos
     * const kudo = await prisma.kudo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KudoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KudoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kudo.
     * @param {KudoUpsertArgs} args - Arguments to update or create a Kudo.
     * @example
     * // Update or create a Kudo
     * const kudo = await prisma.kudo.upsert({
     *   create: {
     *     // ... data to create a Kudo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kudo we want to update
     *   }
     * })
    **/
    upsert<T extends KudoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KudoUpsertArgs<ExtArgs>>
    ): Prisma__KudoClient<$Result.GetResult<Prisma.$KudoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Kudos that matches the filter.
     * @param {KudoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const kudo = await prisma.kudo.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: KudoFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Kudo.
     * @param {KudoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const kudo = await prisma.kudo.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: KudoAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Kudos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoCountArgs} args - Arguments to filter Kudos to count.
     * @example
     * // Count the number of Kudos
     * const count = await prisma.kudo.count({
     *   where: {
     *     // ... the filter for the Kudos we want to count
     *   }
     * })
    **/
    count<T extends KudoCountArgs>(
      args?: Subset<T, KudoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KudoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KudoAggregateArgs>(args: Subset<T, KudoAggregateArgs>): Prisma.PrismaPromise<GetKudoAggregateType<T>>

    /**
     * Group by Kudo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KudoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KudoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KudoGroupByArgs['orderBy'] }
        : { orderBy?: KudoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KudoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKudoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kudo model
   */
  readonly fields: KudoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kudo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KudoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Kudo model
   */ 
  interface KudoFieldRefs {
    readonly id: FieldRef<"Kudo", 'String'>
    readonly createdAt: FieldRef<"Kudo", 'DateTime'>
    readonly message: FieldRef<"Kudo", 'String'>
    readonly authorId: FieldRef<"Kudo", 'String'>
    readonly recipientId: FieldRef<"Kudo", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Kudo findUnique
   */
  export type KudoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter, which Kudo to fetch.
     */
    where: KudoWhereUniqueInput
  }


  /**
   * Kudo findUniqueOrThrow
   */
  export type KudoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter, which Kudo to fetch.
     */
    where: KudoWhereUniqueInput
  }


  /**
   * Kudo findFirst
   */
  export type KudoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter, which Kudo to fetch.
     */
    where?: KudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kudos.
     */
    cursor?: KudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kudos.
     */
    distinct?: KudoScalarFieldEnum | KudoScalarFieldEnum[]
  }


  /**
   * Kudo findFirstOrThrow
   */
  export type KudoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter, which Kudo to fetch.
     */
    where?: KudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kudos.
     */
    cursor?: KudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kudos.
     */
    distinct?: KudoScalarFieldEnum | KudoScalarFieldEnum[]
  }


  /**
   * Kudo findMany
   */
  export type KudoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter, which Kudos to fetch.
     */
    where?: KudoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kudos to fetch.
     */
    orderBy?: KudoOrderByWithRelationInput | KudoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kudos.
     */
    cursor?: KudoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kudos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kudos.
     */
    skip?: number
    distinct?: KudoScalarFieldEnum | KudoScalarFieldEnum[]
  }


  /**
   * Kudo create
   */
  export type KudoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * The data needed to create a Kudo.
     */
    data: XOR<KudoCreateInput, KudoUncheckedCreateInput>
  }


  /**
   * Kudo createMany
   */
  export type KudoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kudos.
     */
    data: KudoCreateManyInput | KudoCreateManyInput[]
  }


  /**
   * Kudo update
   */
  export type KudoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * The data needed to update a Kudo.
     */
    data: XOR<KudoUpdateInput, KudoUncheckedUpdateInput>
    /**
     * Choose, which Kudo to update.
     */
    where: KudoWhereUniqueInput
  }


  /**
   * Kudo updateMany
   */
  export type KudoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kudos.
     */
    data: XOR<KudoUpdateManyMutationInput, KudoUncheckedUpdateManyInput>
    /**
     * Filter which Kudos to update
     */
    where?: KudoWhereInput
  }


  /**
   * Kudo upsert
   */
  export type KudoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * The filter to search for the Kudo to update in case it exists.
     */
    where: KudoWhereUniqueInput
    /**
     * In case the Kudo found by the `where` argument doesn't exist, create a new Kudo with this data.
     */
    create: XOR<KudoCreateInput, KudoUncheckedCreateInput>
    /**
     * In case the Kudo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KudoUpdateInput, KudoUncheckedUpdateInput>
  }


  /**
   * Kudo delete
   */
  export type KudoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
    /**
     * Filter which Kudo to delete.
     */
    where: KudoWhereUniqueInput
  }


  /**
   * Kudo deleteMany
   */
  export type KudoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kudos to delete
     */
    where?: KudoWhereInput
  }


  /**
   * Kudo findRaw
   */
  export type KudoFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Kudo aggregateRaw
   */
  export type KudoAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Kudo without action
   */
  export type KudoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kudo
     */
    select?: KudoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KudoInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KudoScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    message: 'message',
    authorId: 'authorId',
    recipientId: 'recipientId'
  };

  export type KudoScalarFieldEnum = (typeof KudoScalarFieldEnum)[keyof typeof KudoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Color'
   */
  export type EnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color'>
    


  /**
   * Reference to a field of type 'Color[]'
   */
  export type ListEnumColorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Color[]'>
    


  /**
   * Reference to a field of type 'Emoji'
   */
  export type EnumEmojiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Emoji'>
    


  /**
   * Reference to a field of type 'Emoji[]'
   */
  export type ListEnumEmojiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Emoji[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileCompositeFilter, ProfileObjectEqualityInput>
    authoredKudos?: KudoListRelationFilter
    kudos?: KudoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByInput
    authoredKudos?: KudoOrderByRelationAggregateInput
    kudos?: KudoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileCompositeFilter, ProfileObjectEqualityInput>
    authoredKudos?: KudoListRelationFilter
    kudos?: KudoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KudoWhereInput = {
    AND?: KudoWhereInput | KudoWhereInput[]
    OR?: KudoWhereInput[]
    NOT?: KudoWhereInput | KudoWhereInput[]
    id?: StringFilter<"Kudo"> | string
    createdAt?: DateTimeFilter<"Kudo"> | Date | string
    style?: XOR<KudoStyleNullableCompositeFilter, KudoStyleObjectEqualityInput> | null
    message?: StringFilter<"Kudo"> | string
    authorId?: StringFilter<"Kudo"> | string
    recipientId?: StringFilter<"Kudo"> | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    recipient?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type KudoOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    style?: KudoStyleOrderByInput
    message?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    author?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
  }

  export type KudoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KudoWhereInput | KudoWhereInput[]
    OR?: KudoWhereInput[]
    NOT?: KudoWhereInput | KudoWhereInput[]
    createdAt?: DateTimeFilter<"Kudo"> | Date | string
    style?: XOR<KudoStyleNullableCompositeFilter, KudoStyleObjectEqualityInput> | null
    message?: StringFilter<"Kudo"> | string
    authorId?: StringFilter<"Kudo"> | string
    recipientId?: StringFilter<"Kudo"> | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    recipient?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type KudoOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
    _count?: KudoCountOrderByAggregateInput
    _max?: KudoMaxOrderByAggregateInput
    _min?: KudoMinOrderByAggregateInput
  }

  export type KudoScalarWhereWithAggregatesInput = {
    AND?: KudoScalarWhereWithAggregatesInput | KudoScalarWhereWithAggregatesInput[]
    OR?: KudoScalarWhereWithAggregatesInput[]
    NOT?: KudoScalarWhereWithAggregatesInput | KudoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kudo"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Kudo"> | Date | string
    message?: StringWithAggregatesFilter<"Kudo"> | string
    authorId?: StringWithAggregatesFilter<"Kudo"> | string
    recipientId?: StringWithAggregatesFilter<"Kudo"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoCreateNestedManyWithoutAuthorInput
    kudos?: KudoCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUncheckedCreateNestedManyWithoutAuthorInput
    kudos?: KudoUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUpdateManyWithoutAuthorNestedInput
    kudos?: KudoUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUncheckedUpdateManyWithoutAuthorNestedInput
    kudos?: KudoUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
  }

  export type KudoCreateInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    author: UserCreateNestedOneWithoutAuthoredKudosInput
    recipient: UserCreateNestedOneWithoutKudosInput
  }

  export type KudoUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    authorId: string
    recipientId: string
  }

  export type KudoUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutAuthoredKudosNestedInput
    recipient?: UserUpdateOneRequiredWithoutKudosNestedInput
  }

  export type KudoUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type KudoCreateManyInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    authorId: string
    recipientId: string
  }

  export type KudoUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
  }

  export type KudoUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileCompositeFilter = {
    equals?: ProfileObjectEqualityInput
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type ProfileObjectEqualityInput = {
    firstName: string
    lastName: string
  }

  export type KudoListRelationFilter = {
    every?: KudoWhereInput
    some?: KudoWhereInput
    none?: KudoWhereInput
  }

  export type ProfileOrderByInput = {
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type KudoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KudoStyleNullableCompositeFilter = {
    equals?: KudoStyleObjectEqualityInput | null
    is?: KudoStyleWhereInput | null
    isNot?: KudoStyleWhereInput | null
    isSet?: boolean
  }

  export type KudoStyleObjectEqualityInput = {
    backgroundColor: $Enums.Color
    textColor: $Enums.Color
    emoji: $Enums.Emoji
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KudoStyleOrderByInput = {
    backgroundColor?: SortOrder
    textColor?: SortOrder
    emoji?: SortOrder
  }

  export type KudoCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
  }

  export type KudoMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
  }

  export type KudoMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    message?: SortOrder
    authorId?: SortOrder
    recipientId?: SortOrder
  }

  export type ProfileCreateEnvelopeInput = {
    set?: ProfileCreateInput
  }

  export type ProfileCreateInput = {
    firstName: string
    lastName: string
  }

  export type KudoCreateNestedManyWithoutAuthorInput = {
    create?: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput> | KudoCreateWithoutAuthorInput[] | KudoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutAuthorInput | KudoCreateOrConnectWithoutAuthorInput[]
    createMany?: KudoCreateManyAuthorInputEnvelope
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
  }

  export type KudoCreateNestedManyWithoutRecipientInput = {
    create?: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput> | KudoCreateWithoutRecipientInput[] | KudoUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutRecipientInput | KudoCreateOrConnectWithoutRecipientInput[]
    createMany?: KudoCreateManyRecipientInputEnvelope
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
  }

  export type KudoUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput> | KudoCreateWithoutAuthorInput[] | KudoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutAuthorInput | KudoCreateOrConnectWithoutAuthorInput[]
    createMany?: KudoCreateManyAuthorInputEnvelope
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
  }

  export type KudoUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput> | KudoCreateWithoutRecipientInput[] | KudoUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutRecipientInput | KudoCreateOrConnectWithoutRecipientInput[]
    createMany?: KudoCreateManyRecipientInputEnvelope
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateEnvelopeInput = {
    set?: ProfileCreateInput
    update?: ProfileUpdateInput
  }

  export type KudoUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput> | KudoCreateWithoutAuthorInput[] | KudoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutAuthorInput | KudoCreateOrConnectWithoutAuthorInput[]
    upsert?: KudoUpsertWithWhereUniqueWithoutAuthorInput | KudoUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: KudoCreateManyAuthorInputEnvelope
    set?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    disconnect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    delete?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    update?: KudoUpdateWithWhereUniqueWithoutAuthorInput | KudoUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: KudoUpdateManyWithWhereWithoutAuthorInput | KudoUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: KudoScalarWhereInput | KudoScalarWhereInput[]
  }

  export type KudoUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput> | KudoCreateWithoutRecipientInput[] | KudoUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutRecipientInput | KudoCreateOrConnectWithoutRecipientInput[]
    upsert?: KudoUpsertWithWhereUniqueWithoutRecipientInput | KudoUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: KudoCreateManyRecipientInputEnvelope
    set?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    disconnect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    delete?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    update?: KudoUpdateWithWhereUniqueWithoutRecipientInput | KudoUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: KudoUpdateManyWithWhereWithoutRecipientInput | KudoUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: KudoScalarWhereInput | KudoScalarWhereInput[]
  }

  export type KudoUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput> | KudoCreateWithoutAuthorInput[] | KudoUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutAuthorInput | KudoCreateOrConnectWithoutAuthorInput[]
    upsert?: KudoUpsertWithWhereUniqueWithoutAuthorInput | KudoUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: KudoCreateManyAuthorInputEnvelope
    set?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    disconnect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    delete?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    update?: KudoUpdateWithWhereUniqueWithoutAuthorInput | KudoUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: KudoUpdateManyWithWhereWithoutAuthorInput | KudoUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: KudoScalarWhereInput | KudoScalarWhereInput[]
  }

  export type KudoUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput> | KudoCreateWithoutRecipientInput[] | KudoUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: KudoCreateOrConnectWithoutRecipientInput | KudoCreateOrConnectWithoutRecipientInput[]
    upsert?: KudoUpsertWithWhereUniqueWithoutRecipientInput | KudoUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: KudoCreateManyRecipientInputEnvelope
    set?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    disconnect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    delete?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    connect?: KudoWhereUniqueInput | KudoWhereUniqueInput[]
    update?: KudoUpdateWithWhereUniqueWithoutRecipientInput | KudoUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: KudoUpdateManyWithWhereWithoutRecipientInput | KudoUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: KudoScalarWhereInput | KudoScalarWhereInput[]
  }

  export type KudoStyleNullableCreateEnvelopeInput = {
    set?: KudoStyleCreateInput | null
  }

  export type KudoStyleCreateInput = {
    backgroundColor?: $Enums.Color
    textColor?: $Enums.Color
    emoji?: $Enums.Emoji
  }

  export type UserCreateNestedOneWithoutAuthoredKudosInput = {
    create?: XOR<UserCreateWithoutAuthoredKudosInput, UserUncheckedCreateWithoutAuthoredKudosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredKudosInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutKudosInput = {
    create?: XOR<UserCreateWithoutKudosInput, UserUncheckedCreateWithoutKudosInput>
    connectOrCreate?: UserCreateOrConnectWithoutKudosInput
    connect?: UserWhereUniqueInput
  }

  export type KudoStyleNullableUpdateEnvelopeInput = {
    set?: KudoStyleCreateInput | null
    upsert?: KudoStyleUpsertInput
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutAuthoredKudosNestedInput = {
    create?: XOR<UserCreateWithoutAuthoredKudosInput, UserUncheckedCreateWithoutAuthoredKudosInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthoredKudosInput
    upsert?: UserUpsertWithoutAuthoredKudosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthoredKudosInput, UserUpdateWithoutAuthoredKudosInput>, UserUncheckedUpdateWithoutAuthoredKudosInput>
  }

  export type UserUpdateOneRequiredWithoutKudosNestedInput = {
    create?: XOR<UserCreateWithoutKudosInput, UserUncheckedCreateWithoutKudosInput>
    connectOrCreate?: UserCreateOrConnectWithoutKudosInput
    upsert?: UserUpsertWithoutKudosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKudosInput, UserUpdateWithoutKudosInput>, UserUncheckedUpdateWithoutKudosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    firstName?: StringFilter<"Profile"> | string
    lastName?: StringFilter<"Profile"> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type KudoStyleWhereInput = {
    AND?: KudoStyleWhereInput | KudoStyleWhereInput[]
    OR?: KudoStyleWhereInput[]
    NOT?: KudoStyleWhereInput | KudoStyleWhereInput[]
    backgroundColor?: EnumColorFilter<"KudoStyle"> | $Enums.Color
    textColor?: EnumColorFilter<"KudoStyle"> | $Enums.Color
    emoji?: EnumEmojiFilter<"KudoStyle"> | $Enums.Emoji
  }

  export type KudoCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    recipient: UserCreateNestedOneWithoutKudosInput
  }

  export type KudoUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    recipientId: string
  }

  export type KudoCreateOrConnectWithoutAuthorInput = {
    where: KudoWhereUniqueInput
    create: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput>
  }

  export type KudoCreateManyAuthorInputEnvelope = {
    data: KudoCreateManyAuthorInput | KudoCreateManyAuthorInput[]
  }

  export type KudoCreateWithoutRecipientInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    author: UserCreateNestedOneWithoutAuthoredKudosInput
  }

  export type KudoUncheckedCreateWithoutRecipientInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    authorId: string
  }

  export type KudoCreateOrConnectWithoutRecipientInput = {
    where: KudoWhereUniqueInput
    create: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput>
  }

  export type KudoCreateManyRecipientInputEnvelope = {
    data: KudoCreateManyRecipientInput | KudoCreateManyRecipientInput[]
  }

  export type ProfileUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type KudoUpsertWithWhereUniqueWithoutAuthorInput = {
    where: KudoWhereUniqueInput
    update: XOR<KudoUpdateWithoutAuthorInput, KudoUncheckedUpdateWithoutAuthorInput>
    create: XOR<KudoCreateWithoutAuthorInput, KudoUncheckedCreateWithoutAuthorInput>
  }

  export type KudoUpdateWithWhereUniqueWithoutAuthorInput = {
    where: KudoWhereUniqueInput
    data: XOR<KudoUpdateWithoutAuthorInput, KudoUncheckedUpdateWithoutAuthorInput>
  }

  export type KudoUpdateManyWithWhereWithoutAuthorInput = {
    where: KudoScalarWhereInput
    data: XOR<KudoUpdateManyMutationInput, KudoUncheckedUpdateManyWithoutAuthorInput>
  }

  export type KudoScalarWhereInput = {
    AND?: KudoScalarWhereInput | KudoScalarWhereInput[]
    OR?: KudoScalarWhereInput[]
    NOT?: KudoScalarWhereInput | KudoScalarWhereInput[]
    id?: StringFilter<"Kudo"> | string
    createdAt?: DateTimeFilter<"Kudo"> | Date | string
    message?: StringFilter<"Kudo"> | string
    authorId?: StringFilter<"Kudo"> | string
    recipientId?: StringFilter<"Kudo"> | string
  }

  export type KudoUpsertWithWhereUniqueWithoutRecipientInput = {
    where: KudoWhereUniqueInput
    update: XOR<KudoUpdateWithoutRecipientInput, KudoUncheckedUpdateWithoutRecipientInput>
    create: XOR<KudoCreateWithoutRecipientInput, KudoUncheckedCreateWithoutRecipientInput>
  }

  export type KudoUpdateWithWhereUniqueWithoutRecipientInput = {
    where: KudoWhereUniqueInput
    data: XOR<KudoUpdateWithoutRecipientInput, KudoUncheckedUpdateWithoutRecipientInput>
  }

  export type KudoUpdateManyWithWhereWithoutRecipientInput = {
    where: KudoScalarWhereInput
    data: XOR<KudoUpdateManyMutationInput, KudoUncheckedUpdateManyWithoutRecipientInput>
  }

  export type UserCreateWithoutAuthoredKudosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    kudos?: KudoCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutAuthoredKudosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    kudos?: KudoUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutAuthoredKudosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthoredKudosInput, UserUncheckedCreateWithoutAuthoredKudosInput>
  }

  export type UserCreateWithoutKudosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutKudosInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: XOR<ProfileCreateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutKudosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKudosInput, UserUncheckedCreateWithoutKudosInput>
  }

  export type KudoStyleUpsertInput = {
    set: KudoStyleCreateInput | null
    update: KudoStyleUpdateInput
  }

  export type UserUpsertWithoutAuthoredKudosInput = {
    update: XOR<UserUpdateWithoutAuthoredKudosInput, UserUncheckedUpdateWithoutAuthoredKudosInput>
    create: XOR<UserCreateWithoutAuthoredKudosInput, UserUncheckedCreateWithoutAuthoredKudosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthoredKudosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthoredKudosInput, UserUncheckedUpdateWithoutAuthoredKudosInput>
  }

  export type UserUpdateWithoutAuthoredKudosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    kudos?: KudoUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthoredKudosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    kudos?: KudoUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutKudosInput = {
    update: XOR<UserUpdateWithoutKudosInput, UserUncheckedUpdateWithoutKudosInput>
    create: XOR<UserCreateWithoutKudosInput, UserUncheckedCreateWithoutKudosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKudosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKudosInput, UserUncheckedUpdateWithoutKudosInput>
  }

  export type UserUpdateWithoutKudosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutKudosInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: XOR<ProfileUpdateEnvelopeInput, ProfileCreateInput>
    authoredKudos?: KudoUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type EnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type EnumEmojiFilter<$PrismaModel = never> = {
    equals?: $Enums.Emoji | EnumEmojiFieldRefInput<$PrismaModel>
    in?: $Enums.Emoji[] | ListEnumEmojiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Emoji[] | ListEnumEmojiFieldRefInput<$PrismaModel>
    not?: NestedEnumEmojiFilter<$PrismaModel> | $Enums.Emoji
  }

  export type KudoCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    recipientId: string
  }

  export type KudoCreateManyRecipientInput = {
    id?: string
    createdAt?: Date | string
    style?: XOR<KudoStyleNullableCreateEnvelopeInput, KudoStyleCreateInput> | null
    message: string
    authorId: string
  }

  export type KudoUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    recipient?: UserUpdateOneRequiredWithoutKudosNestedInput
  }

  export type KudoUncheckedUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type KudoUncheckedUpdateManyWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type KudoUpdateWithoutRecipientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutAuthoredKudosNestedInput
  }

  export type KudoUncheckedUpdateWithoutRecipientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type KudoUncheckedUpdateManyWithoutRecipientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    style?: XOR<KudoStyleNullableUpdateEnvelopeInput, KudoStyleCreateInput> | null
    message?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
  }

  export type KudoStyleUpdateInput = {
    backgroundColor?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    textColor?: EnumColorFieldUpdateOperationsInput | $Enums.Color
    emoji?: EnumEmojiFieldUpdateOperationsInput | $Enums.Emoji
  }

  export type NestedEnumColorFilter<$PrismaModel = never> = {
    equals?: $Enums.Color | EnumColorFieldRefInput<$PrismaModel>
    in?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    notIn?: $Enums.Color[] | ListEnumColorFieldRefInput<$PrismaModel>
    not?: NestedEnumColorFilter<$PrismaModel> | $Enums.Color
  }

  export type NestedEnumEmojiFilter<$PrismaModel = never> = {
    equals?: $Enums.Emoji | EnumEmojiFieldRefInput<$PrismaModel>
    in?: $Enums.Emoji[] | ListEnumEmojiFieldRefInput<$PrismaModel>
    notIn?: $Enums.Emoji[] | ListEnumEmojiFieldRefInput<$PrismaModel>
    not?: NestedEnumEmojiFilter<$PrismaModel> | $Enums.Emoji
  }

  export type EnumColorFieldUpdateOperationsInput = {
    set?: $Enums.Color
  }

  export type EnumEmojiFieldUpdateOperationsInput = {
    set?: $Enums.Emoji
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProfileDefaultArgs instead
     */
    export type ProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KudoStyleDefaultArgs instead
     */
    export type KudoStyleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KudoStyleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KudoDefaultArgs instead
     */
    export type KudoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KudoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}