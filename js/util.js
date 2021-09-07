export const wrap = async (promise) => promise.then((data) => [data, null]).catch((error) => [null, error]);

export const get = async (fetch, endpoint) => {
	const req = await fetch(endpoint);
	const json = await req.json();
	if (!req.ok) throw new Error(`${json.message} (${req.status})`);
	return json;
};
