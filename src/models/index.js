// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BaseUser, JobApplication, JobPost, Notification, Message, Client, Creator } = initSchema(schema);

export {
  BaseUser,
  JobApplication,
  JobPost,
  Notification,
  Message,
  Client,
  Creator
};