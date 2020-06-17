export const urlToRedirectTo = (domain: string, hostUrl: string): string | undefined => {
    if (!hostUrl.includes(domain)) { return; }

    let redirectUrl = hostUrl;

    if (redirectUrl.startsWith('http://')) {
        redirectUrl = redirectUrl.replace('http://', 'https://');
    }

    if (redirectUrl.includes('://www.')) {
        redirectUrl = redirectUrl.replace('://www.', '://');
    }
    // console.log('Redirecting to: ' + url);
    return redirectUrl !== hostUrl ? redirectUrl : undefined;
};

export const redirect = (window, destinationUrl: string): void => {
    if (destinationUrl !== undefined) {
        window.location.replace(destinationUrl);
    }
};
