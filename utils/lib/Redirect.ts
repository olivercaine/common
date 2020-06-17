export const urlToRedirectTo = (domain: string, hostUrl: string): string | undefined => {
    if (!hostUrl.includes(domain)) { return; }

    if (hostUrl.startsWith('http://')) {
        hostUrl = hostUrl.replace('http://', 'https://');
    }

    if (hostUrl.includes('://www.')) {
        hostUrl = hostUrl.replace('://www.', '://');
    }
    // console.log('Redirecting to: ' + url);
    return hostUrl;
};

export const redirect = (window, destinationUrl: string): void => {
    if (urlToRedirectTo !== undefined) {
        window.location.replace(destinationUrl);
    }
};
