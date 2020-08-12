export class Config {
  // The values that are defined here are the default values that can
  // be overridden by env.js
  public env = {
    apiUrl: '',
  };

  constructor() { }

  public static get(): Config {
    const config = new Config();
    const env = '__env';
    // Read environment variables from browser window
    const browserWindow = window || {};
    const browserWindowEnv = browserWindow[env] || {};

    // Assign environment variables from browser window to env
    // In the current implementation, properties from env.js overwrite defaults from the EnvService.
    // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
    for (const key in browserWindowEnv) {
      if (browserWindowEnv.hasOwnProperty(key)) {
        config.env[key] = window[env][key];
      }
    }

    console.log(config.env);

    return config;
  }
}
