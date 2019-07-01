import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = new BehaviorSubject(false);
  profile = new BehaviorSubject<any>(null);
  token = new BehaviorSubject<string>(null);

  private auth0Client: Auth0Client;

  // Auth0 application configuration
  config = {
    domain: "dev-xsfon-m5.auth0.com",
    client_id: "UCT1TdGLhlw8UJA79cnd3kNDwYty21oC",
    redirect_uri: `${window.location.origin}/callback`,
    audience: "Trainee" // NEW - add in the audience value
  };

  /*  config = {
      domain: 'dev-xsfon-m5.auth0.com',
      client_id: 'qBhIPoGAsE7bZpASpkfXlhhJr1iewawZ',
      redirect_uri: `${window.location.origin}/callback`,
      audience: 'Trainee'
    };
  */

  /**
   * Gets the Auth0Client instance.
   */
  async getAuth0Client(): Promise<Auth0Client> {
    if (!this.auth0Client) {
      this.auth0Client = await createAuth0Client({
        domain: this.config.domain,
        client_id: this.config.client_id,
        audience: this.config.audience,
        redirect_uri: `${window.location.origin}/callback`
      });

      try {
        this.token.next(await this.auth0Client.getTokenSilently());

        this.isAuthenticated.next(await this.auth0Client.isAuthenticated());

        this.isAuthenticated.subscribe(async isAuthenticated => {
          if (isAuthenticated) {
            return this.profile.next(await this.auth0Client.getUser());
          }

          this.profile.next(null);
        });
      } catch {}

      return this.auth0Client;
    }

    return this.auth0Client;
  }

  getIdTokenClaims = (...p) => this.auth0Client.getIdTokenClaims(...p);
  getTokenSilently = (...p) => this.auth0Client.getTokenSilently(...p);
}
