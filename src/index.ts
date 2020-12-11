function get_global_obj() {
	if (typeof window !== 'undefined') {
		return window;
	} else if (typeof global !== 'undefined') {
		// Node and Weixin App
		return global;
	} else if (typeof self !== 'undefined') {
		// Web workers
		return self;
	}
	return {};
}

export default function get<T>(name: string, default_val?: T) {
	const globalObject = get_global_obj() as unknown as { [key: string]: unknown };
	if (!globalObject[name]) {
		globalObject[name] = default_val;
	}
	return globalObject[name] as T;
}

export function set<T>(name: string, val: T) {
	const globalObject = get_global_obj() as unknown as { [key: string]: unknown };
	globalObject[name] = val;
}
