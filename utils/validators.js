export const isValidURL = (url) => {
    const pattern = new RegExp('^(https?:\/\/)?' + // protocol
        '((([a-z\d]([a-z\d-]*[a-z\d])?)\.)+([a-z]{2,}|[a-z\d-]{2,})|' + // domain name
        'localhost|' + // localhost
        '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|' + // IP address
        '\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\])' + // IPv6
        '(\:\d+)?(\/[-a-z\d%_.~+]*)*' + // port and path
        '(\?[;&a-z\d%_.~+=-]*)?' + // query string
        '(\#[-a-z\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
};

export const isShortcodeValid = (shortcode) => {
    const pattern = /^[a-zA-Z0-9]{6,}$/; // 6+ alphanumeric
    return pattern.test(shortcode);
};

export const isValidValidity = (validity) => {
    return /^\d+$/.test(validity) && parseInt(validity) > 0;
};