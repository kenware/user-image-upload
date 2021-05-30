import AWS from 'aws-sdk';
import dotenv from 'dotenv';

const { env } = process;
dotenv.config();

export default {
  secrete: env.APP_SECRETE || 'newsecrete',
  s3: new AWS.S3({
    accessKeyId: env.ACCESS_KEY_ID,
    secretAccessKey: env.SECRETE_ACCESS_KEY,
  }),
  s3Bucket: env.AWS_BUCKET,
  accessKeyId: env.ACCESS_KEY_ID,
  secretAccessKey: env.SECRETE_ACCESS_KEY,
};
