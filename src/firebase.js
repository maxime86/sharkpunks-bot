const admin = require("firebase-admin");
const { SERVICE_ACCOUNT_KEY_BASE64 } = require("./constants");

const serviceAccount = Buffer.from(
  SERVICE_ACCOUNT_KEY_BASE64,
  "base64"
).toString();

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount)),
});

module.exports = {
  db: admin.firestore(),
};
