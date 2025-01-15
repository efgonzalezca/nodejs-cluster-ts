import 'dotenv/config';
import * as env from 'env-var';

export default {
  logFile: env.get('LOG_FILE').required().asString(),
  port: env.get('PORT').required().asPortNumber()
}