import serverlessExpress from '@codegenie/serverless-express';
import app from './routes.mjs'

export const handler = serverlessExpress({ app })