### Walkthrough

https://www.youtube.com/watch?v=JJ44WA_eV8E (fiddle in description)

These URLs are used in walkthrough:

- https://developers.google.com/oauthplayground/
- https://console.cloud.google.com

## Troubleshooting

### Data and salt arguments required

Error: `Error: redirect_uri_mismatch` when trying to Authorise APIs in [OAuth 2.0 Playground](https://developers.google.com/oauthplayground) (see above walkthrough)

Cause: Redirect URL doesn't match what's specified in credentials config

Solution: Add both "https://developers.google.com/oauthplayground/" and "https://developers.google.com/oauthplayground" to "Authorized redirect URIs" in [OAuth Credentials in Google Developer Console](https://console.developers.google.com/apis/credentials)

