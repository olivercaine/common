export const urlToRedirectTo = (domain: string, url: string): string | undefined => {
    if (!url.includes(domain)) { return; }

    if (url.startsWith('http://')) {
        url = url.replace('http://', 'https://');
    }

    if (url.includes('://www.')) {
        url = url.replace('://www.', '://');
    }
    // console.log('Redirecting to: ' + url);
    return url;
};

export class WindowRedirector {
    private window: any | undefined;
    constructor(window: any | undefined) {
        this.window = window;
    }
    public redirect(domain: string, currentUrl: string) {
        const destinationUrl = urlToRedirectTo(domain, currentUrl);
        if (destinationUrl !== undefined) {
            this.window.location.replace(destinationUrl);
        }
    }
}