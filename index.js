module.exports = {
    extractUrl (url) {
        let newUrl = url.replace(/^https?\:\/\//i, "");

        return newUrl;
    }
};