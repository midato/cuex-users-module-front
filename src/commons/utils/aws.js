import AWS from 'aws-sdk';
import config from '../../config'

AWS.config.update({
  region: config.AWS_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY_ID,
})

export default AWS
