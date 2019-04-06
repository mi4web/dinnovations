const DEFAULT_CONFIG = {};

const PROD_ENV = {

};

const STAGING_ENV = {

};

const BETA_ENV = {

};

const DEV_ENV = {

};

const env = process.env.NODE_ENV;

let current_ENV = BETA_ENV;
if (env === 'production') {
    current_ENV = PROD_ENV;
}
if (env === 'staging') {
    current_ENV = STAGING_ENV;
}
if (env === 'beta') {
    current_ENV = BETA_ENV;
}
if (env === 'development') {
    current_ENV = DEV_ENV;
}

export default { ...DEFAULT_CONFIG, ...STAGING_ENV };
