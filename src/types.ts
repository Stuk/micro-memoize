export type Dictionary<Type> = {
  [key: string]: Type;
  [index: number]: Type;
};

export type Key = any[];

export type RawKey = Key | IArguments;

export type Keys = Key[];

export type Values = any[];

export type Cache = {
  canTransformKey: boolean;
  getKeyIndex: KeyIndexGetter;
  keys: Keys;
  options: Options;
  shouldCloneArguments: boolean;
  shouldUpdateOnAdd: boolean;
  shouldUpdateOnChange: boolean;
  shouldUpdateOnHit: boolean;
  snapshot: {
    keys: Keys;
    size: number;
    values: Values;
  };
  values: Values;
};

export type EqualityComparator = (object1: any, object2: any) => boolean;

export type MatchingKeyComparator = (key1: Key, key2: RawKey) => boolean;

export type CacheModifiedHandler = (
  cache: Cache,
  options: StandardOptions,
  memoized: Function,
) => void;

export type KeyTransformer = (args: RawKey) => Key;

export type KeyIndexGetter = (keyToMatch: RawKey) => number;

export type StandardOptions = {
  isEqual?: EqualityComparator;
  isMatchingKey?: MatchingKeyComparator;
  isPromise?: boolean;
  maxSize?: number;
  onCacheAdd?: CacheModifiedHandler;
  onCacheChange?: CacheModifiedHandler;
  onCacheHit?: CacheModifiedHandler;
  transformKey?: KeyTransformer;
};

export type Options = StandardOptions & Dictionary<any>;

export type Memoized<Fn extends Function> = Fn & {
  [key: string]: any;
  cache?: Cache;
  cacheSnapshot?: Cache;
  isMemoized?: boolean;
  options?: Options;
};
