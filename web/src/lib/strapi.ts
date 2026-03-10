import 'server-only';

function getStrapiConfig() {
	const host = process.env.STRAPI_HOST?.replace(/\/$/, '');
	const token = process.env.STRAPI_TOKEN;

	if (!host || !token) {
		throw new Error(
			'Missing STRAPI_HOST or STRAPI_TOKEN. Configure env vars or enable mock data.',
		);
	}

	return { host, token };
}

export function getStrapiMediaUrl(url?: string | null) {
	if (!url) {
		return null;
	}

	if (url.startsWith('http://') || url.startsWith('https://')) {
		return url;
	}

	const host = process.env.STRAPI_HOST?.replace(/\/$/, '');
	return host ? `${host}${url.startsWith('/') ? '' : '/'}${url}` : null;
}

export async function query<T>(url: string): Promise<T> {
	const { host, token } = getStrapiConfig();
	const response = await fetch(`${host}/api/${url}`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
		next: {
			revalidate: 60,
		},
	});

	if (!response.ok) {
		throw new Error(`Strapi request failed (${response.status}) for ${url}`);
	}

	return response.json() as Promise<T>;
}
