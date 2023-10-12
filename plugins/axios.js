import https from 'https';

export default ({ $axios, app }) => {
    const agent = new https.Agent({
        rejectUnauthorized: false
    });
    $axios.onRequest((config) => {
        config.headers = {
            'Accept-Language': app.i18n.locale,
        }

        config.httpsAgent = agent;

    })
}