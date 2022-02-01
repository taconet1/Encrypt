const crypto = require("crypto");

exports.sha1 = function (data) {
    return crypto.createHash("sha1").update(data, "binary").digest("hex")
}

exports.compareSha1 = function (data, dataCrypt) {
    return this.sha1(data) === dataCrypt
}


