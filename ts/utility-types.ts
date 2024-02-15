type Entries<O> = {
	[K in keyof O]: [K, O[K]];
}[keyof O][];
export const entries = <const O extends Parameters<typeof Object.entries>[0]>(o: O) => Object.entries(o) as Entries<O>;

type EntriesType = readonly (readonly [PropertyKey, unknown])[];
type FromEntries<E extends EntriesType> = { [K in E[number] as K[0]]: K[1] };
export const fromEntries = <const E extends EntriesType>(e: E) => Object.fromEntries(e) as FromEntries<E>;

export const wrap =
	<const O extends Parameters<typeof entries>[0]>(o: O) =>
	<T extends Parameters<typeof fromEntries>[0]>(fn: (arg: Entries<typeof o>) => T) =>
		fromEntries(fn(entries(o)));
