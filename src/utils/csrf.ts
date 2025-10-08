export function getCSRFToken(): string | null {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1] || null;
}

export async function csrfFetch(url: string, options: RequestInit = {}) {
    const csrfToken = await getCSRFToken();


    const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'credentials': "include", // ✅ important!
        ...options.headers,
    };

    if (csrfToken) {
        console.log("CSRF Token found:", csrfToken);
        headers['X-CSRF-Token'] = csrfToken;
    }
    console.log("Final url:", url);
    console.log("all options :", options);

    return await fetch(url, {
        ...options,
        headers,
        credentials: 'include', // IMPORTANT: for session cookies
    });
}
