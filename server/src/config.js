import "./boot.js";
import getNodeEnv from "./config/getNodeEnv.js";
import getDatabaseUrl from "./config/getDatabaseUrl.cjs";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const dotenv = require('dotenv');

dotenv.config();



const development = {
  nodeEnv: getNodeEnv(),
  session: { secret: process.env.SESSION_SECRET },
  databaseUrl: getDatabaseUrl(getNodeEnv()),
  web: { host: process.env.HOST || "127.0.0.1", port: process.env.PORT || 3000 },
  awsAccess: { key: process.env.AWS_ACCESS_KEY },
  awsSecret: { key: process.env.AWS_SECRET_KEY },
  s3Bucket: { name: process.env.S3_BUCKET_PRODUCTION }
};

const test = { ...development }


const e2e = { ...development }

const production = {
  ...development,
  s3Bucket: { name: process.env.S3_BUCKET_PRODUCTION }
}

const config = { development, test, production, e2e }

export default config[getNodeEnv()]