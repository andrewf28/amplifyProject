import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBaseUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseUser, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBaseUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BaseUser, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly phoneNumber?: string | null;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BaseUser = LazyLoading extends LazyLoadingDisabled ? EagerBaseUser : LazyBaseUser

export declare const BaseUser: (new (init: ModelInit<BaseUser>) => BaseUser) & {
  copyOf(source: BaseUser, mutator: (draft: MutableModel<BaseUser>) => MutableModel<BaseUser> | void): BaseUser;
}

type EagerJobApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobApplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobApplication = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobApplication, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobApplication = LazyLoading extends LazyLoadingDisabled ? EagerJobApplication : LazyJobApplication

export declare const JobApplication: (new (init: ModelInit<JobApplication>) => JobApplication) & {
  copyOf(source: JobApplication, mutator: (draft: MutableModel<JobApplication>) => MutableModel<JobApplication> | void): JobApplication;
}

type EagerJobPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJobPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JobPost, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JobPost = LazyLoading extends LazyLoadingDisabled ? EagerJobPost : LazyJobPost

export declare const JobPost: (new (init: ModelInit<JobPost>) => JobPost) & {
  copyOf(source: JobPost, mutator: (draft: MutableModel<JobPost>) => MutableModel<JobPost> | void): JobPost;
}

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notification = LazyLoading extends LazyLoadingDisabled ? EagerNotification : LazyNotification

export declare const Notification: (new (init: ModelInit<Notification>) => Notification) & {
  copyOf(source: Notification, mutator: (draft: MutableModel<Notification>) => MutableModel<Notification> | void): Notification;
}

type EagerMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Message, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Message = LazyLoading extends LazyLoadingDisabled ? EagerMessage : LazyMessage

export declare const Message: (new (init: ModelInit<Message>) => Message) & {
  copyOf(source: Message, mutator: (draft: MutableModel<Message>) => MutableModel<Message> | void): Message;
}

type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly hiringManagerName?: string | null;
  readonly profilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly companyName?: string | null;
  readonly hiringManagerName?: string | null;
  readonly profilePicture?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly address?: string | null;
  readonly profilePicture?: string | null;
  readonly isInstagram?: boolean | null;
  readonly isTikTok?: boolean | null;
  readonly isYoutube?: boolean | null;
  readonly isTwitter?: boolean | null;
  readonly niches: (string | null)[];
  readonly bio?: string | null;
  readonly rating?: number | null;
  readonly jobs_completed?: number | null;
  readonly job_views?: number | null;
  readonly job_shares?: number | null;
  readonly job_clicks?: number | null;
  readonly job_likes?: number | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly randomString?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly address?: string | null;
  readonly profilePicture?: string | null;
  readonly isInstagram?: boolean | null;
  readonly isTikTok?: boolean | null;
  readonly isYoutube?: boolean | null;
  readonly isTwitter?: boolean | null;
  readonly niches: (string | null)[];
  readonly bio?: string | null;
  readonly rating?: number | null;
  readonly jobs_completed?: number | null;
  readonly job_views?: number | null;
  readonly job_shares?: number | null;
  readonly job_clicks?: number | null;
  readonly job_likes?: number | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly createdAt?: string | null;
  readonly randomString?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}