import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Upload: any;
};

export type About = {
  __typename?: 'About';
  Description?: Maybe<Scalars['String']>;
  ImageUrl?: Maybe<UploadFileEntityResponse>;
  Title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AboutEntity = {
  __typename?: 'AboutEntity';
  attributes?: Maybe<About>;
  id?: Maybe<Scalars['ID']>;
};

export type AboutEntityResponse = {
  __typename?: 'AboutEntityResponse';
  data?: Maybe<AboutEntity>;
};

export type AboutEntityResponseCollection = {
  __typename?: 'AboutEntityResponseCollection';
  data: Array<AboutEntity>;
  meta: ResponseCollectionMeta;
};

export type AboutFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AboutFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AboutFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AboutInput = {
  Description?: InputMaybe<Scalars['String']>;
  ImageUrl?: InputMaybe<Scalars['ID']>;
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type Brand = {
  __typename?: 'Brand';
  ImageUrl?: Maybe<UploadFileEntityResponse>;
  Name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BrandEntity = {
  __typename?: 'BrandEntity';
  attributes?: Maybe<Brand>;
  id?: Maybe<Scalars['ID']>;
};

export type BrandEntityResponse = {
  __typename?: 'BrandEntityResponse';
  data?: Maybe<BrandEntity>;
};

export type BrandEntityResponseCollection = {
  __typename?: 'BrandEntityResponseCollection';
  data: Array<BrandEntity>;
  meta: ResponseCollectionMeta;
};

export type BrandFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BrandFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BrandFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BrandInput = {
  ImageUrl?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type Contact = {
  __typename?: 'Contact';
  Email: Scalars['String'];
  Message: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ContactEntity = {
  __typename?: 'ContactEntity';
  attributes?: Maybe<Contact>;
  id?: Maybe<Scalars['ID']>;
};

export type ContactEntityResponse = {
  __typename?: 'ContactEntityResponse';
  data?: Maybe<ContactEntity>;
};

export type ContactEntityResponseCollection = {
  __typename?: 'ContactEntityResponseCollection';
  data: Array<ContactEntity>;
  meta: ResponseCollectionMeta;
};

export type ContactFiltersInput = {
  Email?: InputMaybe<StringFilterInput>;
  Message?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContactFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContactFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContactInput = {
  Email?: InputMaybe<Scalars['String']>;
  Message?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Work_Tags {
  Backend = 'Backend',
  Frontend = 'Frontend',
  Fullstack = 'Fullstack',
  Mobile = 'Mobile',
  Other = 'Other'
}

export type Experience = {
  __typename?: 'Experience';
  Year: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  work_experiences?: Maybe<WorkExperienceRelationResponseCollection>;
};


export type ExperienceWork_ExperiencesArgs = {
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExperienceEntity = {
  __typename?: 'ExperienceEntity';
  attributes?: Maybe<Experience>;
  id?: Maybe<Scalars['ID']>;
};

export type ExperienceEntityResponse = {
  __typename?: 'ExperienceEntityResponse';
  data?: Maybe<ExperienceEntity>;
};

export type ExperienceEntityResponseCollection = {
  __typename?: 'ExperienceEntityResponseCollection';
  data: Array<ExperienceEntity>;
  meta: ResponseCollectionMeta;
};

export type ExperienceFiltersInput = {
  Year?: InputMaybe<IntFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ExperienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ExperienceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  work_experiences?: InputMaybe<WorkExperienceFiltersInput>;
};

export type ExperienceInput = {
  Year?: InputMaybe<Scalars['Int']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  work_experiences?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type GenericMorph = About | Brand | Contact | Experience | I18NLocale | Skill | Testimonial | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Work | WorkExperience;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAbout?: Maybe<AboutEntityResponse>;
  createBrand?: Maybe<BrandEntityResponse>;
  createContact?: Maybe<ContactEntityResponse>;
  createExperience?: Maybe<ExperienceEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  createTestimonial?: Maybe<TestimonialEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWork?: Maybe<WorkEntityResponse>;
  createWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  deleteAbout?: Maybe<AboutEntityResponse>;
  deleteBrand?: Maybe<BrandEntityResponse>;
  deleteContact?: Maybe<ContactEntityResponse>;
  deleteExperience?: Maybe<ExperienceEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  deleteTestimonial?: Maybe<TestimonialEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWork?: Maybe<WorkEntityResponse>;
  deleteWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAbout?: Maybe<AboutEntityResponse>;
  updateBrand?: Maybe<BrandEntityResponse>;
  updateContact?: Maybe<ContactEntityResponse>;
  updateExperience?: Maybe<ExperienceEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateSkill?: Maybe<SkillEntityResponse>;
  updateTestimonial?: Maybe<TestimonialEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWork?: Maybe<WorkEntityResponse>;
  updateWorkExperience?: Maybe<WorkExperienceEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationCreateAboutArgs = {
  data: AboutInput;
};


export type MutationCreateBrandArgs = {
  data: BrandInput;
};


export type MutationCreateContactArgs = {
  data: ContactInput;
};


export type MutationCreateExperienceArgs = {
  data: ExperienceInput;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkArgs = {
  data: WorkInput;
};


export type MutationCreateWorkExperienceArgs = {
  data: WorkExperienceInput;
};


export type MutationDeleteAboutArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBrandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteContactArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteExperienceArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTestimonialArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteWorkExperienceArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateAboutArgs = {
  data: AboutInput;
  id: Scalars['ID'];
};


export type MutationUpdateBrandArgs = {
  data: BrandInput;
  id: Scalars['ID'];
};


export type MutationUpdateContactArgs = {
  data: ContactInput;
  id: Scalars['ID'];
};


export type MutationUpdateExperienceArgs = {
  data: ExperienceInput;
  id: Scalars['ID'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['ID'];
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateWorkArgs = {
  data: WorkInput;
  id: Scalars['ID'];
};


export type MutationUpdateWorkExperienceArgs = {
  data: WorkExperienceInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  about?: Maybe<AboutEntityResponse>;
  abouts?: Maybe<AboutEntityResponseCollection>;
  brand?: Maybe<BrandEntityResponse>;
  brands?: Maybe<BrandEntityResponseCollection>;
  contact?: Maybe<ContactEntityResponse>;
  contacts?: Maybe<ContactEntityResponseCollection>;
  experience?: Maybe<ExperienceEntityResponse>;
  experiences?: Maybe<ExperienceEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  skill?: Maybe<SkillEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  testimonial?: Maybe<TestimonialEntityResponse>;
  testimonials?: Maybe<TestimonialEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  work?: Maybe<WorkEntityResponse>;
  workExperience?: Maybe<WorkExperienceEntityResponse>;
  workExperiences?: Maybe<WorkExperienceEntityResponseCollection>;
  works?: Maybe<WorkEntityResponseCollection>;
};


export type QueryAboutArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryAboutsArgs = {
  filters?: InputMaybe<AboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryBrandsArgs = {
  filters?: InputMaybe<BrandFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContactArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryContactsArgs = {
  filters?: InputMaybe<ContactFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryExperiencesArgs = {
  filters?: InputMaybe<ExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTestimonialArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWorkArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWorkExperienceArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryWorkExperiencesArgs = {
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryWorksArgs = {
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Skill = {
  __typename?: 'Skill';
  BackgroundColor?: Maybe<Scalars['String']>;
  ImageUrl?: Maybe<UploadFileEntityResponse>;
  Name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SkillEntity = {
  __typename?: 'SkillEntity';
  attributes?: Maybe<Skill>;
  id?: Maybe<Scalars['ID']>;
};

export type SkillEntityResponse = {
  __typename?: 'SkillEntityResponse';
  data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
  __typename?: 'SkillEntityResponseCollection';
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
  BackgroundColor?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<SkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillInput = {
  BackgroundColor?: InputMaybe<Scalars['String']>;
  ImageUrl?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  Compagny?: Maybe<Scalars['String']>;
  Feedback?: Maybe<Scalars['String']>;
  ImageUrl?: Maybe<UploadFileEntityResponse>;
  Name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TestimonialEntity = {
  __typename?: 'TestimonialEntity';
  attributes?: Maybe<Testimonial>;
  id?: Maybe<Scalars['ID']>;
};

export type TestimonialEntityResponse = {
  __typename?: 'TestimonialEntityResponse';
  data?: Maybe<TestimonialEntity>;
};

export type TestimonialEntityResponseCollection = {
  __typename?: 'TestimonialEntityResponseCollection';
  data: Array<TestimonialEntity>;
  meta: ResponseCollectionMeta;
};

export type TestimonialFiltersInput = {
  Compagny?: InputMaybe<StringFilterInput>;
  Feedback?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TestimonialInput = {
  Compagny?: InputMaybe<Scalars['String']>;
  Feedback?: InputMaybe<Scalars['String']>;
  ImageUrl?: InputMaybe<Scalars['ID']>;
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Work = {
  __typename?: 'Work';
  CodeLink?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  ImageUrl: UploadFileEntityResponse;
  ProjectLink?: Maybe<Scalars['String']>;
  Tags?: Maybe<Enum_Work_Tags>;
  Title: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkEntity = {
  __typename?: 'WorkEntity';
  attributes?: Maybe<Work>;
  id?: Maybe<Scalars['ID']>;
};

export type WorkEntityResponse = {
  __typename?: 'WorkEntityResponse';
  data?: Maybe<WorkEntity>;
};

export type WorkEntityResponseCollection = {
  __typename?: 'WorkEntityResponseCollection';
  data: Array<WorkEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkExperience = {
  __typename?: 'WorkExperience';
  Compagny?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  Name: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type WorkExperienceEntity = {
  __typename?: 'WorkExperienceEntity';
  attributes?: Maybe<WorkExperience>;
  id?: Maybe<Scalars['ID']>;
};

export type WorkExperienceEntityResponse = {
  __typename?: 'WorkExperienceEntityResponse';
  data?: Maybe<WorkExperienceEntity>;
};

export type WorkExperienceEntityResponseCollection = {
  __typename?: 'WorkExperienceEntityResponseCollection';
  data: Array<WorkExperienceEntity>;
  meta: ResponseCollectionMeta;
};

export type WorkExperienceFiltersInput = {
  Compagny?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WorkExperienceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WorkExperienceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkExperienceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WorkExperienceInput = {
  Compagny?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  Name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type WorkExperienceRelationResponseCollection = {
  __typename?: 'WorkExperienceRelationResponseCollection';
  data: Array<WorkExperienceEntity>;
};

export type WorkFiltersInput = {
  CodeLink?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  ProjectLink?: InputMaybe<StringFilterInput>;
  Tags?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<WorkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WorkFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WorkInput = {
  CodeLink?: InputMaybe<Scalars['String']>;
  Description?: InputMaybe<Scalars['String']>;
  ImageUrl?: InputMaybe<Scalars['ID']>;
  ProjectLink?: InputMaybe<Scalars['String']>;
  Tags?: InputMaybe<Enum_Work_Tags>;
  Title?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
};

export type GetOneAboutQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type GetOneAboutQuery = { __typename?: 'Query', about?: { __typename?: 'AboutEntityResponse', data?: { __typename?: 'AboutEntity', id?: string | null, attributes?: { __typename?: 'About', createdAt?: any | null, updatedAt?: any | null, Description?: string | null, Title: string, publishedAt?: any | null, ImageUrl?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, mime: string, name: string } | null } | null } | null } | null } | null } | null };

export type GetAllAboutQueryVariables = Exact<{
  filters?: InputMaybe<AboutFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type GetAllAboutQuery = { __typename?: 'Query', abouts?: { __typename?: 'AboutEntityResponseCollection', data: Array<{ __typename?: 'AboutEntity', id?: string | null, attributes?: { __typename?: 'About', createdAt?: any | null, updatedAt?: any | null, Description?: string | null, Title: string, publishedAt?: any | null, ImageUrl?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, mime: string, name: string } | null } | null } | null } | null }> } | null };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, confirmed?: boolean | null, email?: string | null, username: string, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null } | null } } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null } | null } } };

export type ExperiencesQueryVariables = Exact<{
  filters?: InputMaybe<ExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type ExperiencesQuery = { __typename?: 'Query', experiences?: { __typename?: 'ExperienceEntityResponseCollection', data: Array<{ __typename?: 'ExperienceEntity', id?: string | null, attributes?: { __typename?: 'Experience', createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, Year: number, work_experiences?: { __typename?: 'WorkExperienceRelationResponseCollection', data: Array<{ __typename?: 'WorkExperienceEntity', id?: string | null, attributes?: { __typename?: 'WorkExperience', Name: string, Description?: string | null, createdAt?: any | null, updatedAt?: any | null, Compagny?: string | null } | null }> } | null } | null }> } | null };

export type SkillsQueryVariables = Exact<{
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type SkillsQuery = { __typename?: 'Query', skills?: { __typename?: 'SkillEntityResponseCollection', data: Array<{ __typename?: 'SkillEntity', id?: string | null, attributes?: { __typename?: 'Skill', updatedAt?: any | null, createdAt?: any | null, Name: string, publishedAt?: any | null, BackgroundColor?: string | null, ImageUrl?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, mime: string, name: string } | null } | null } | null } | null }> } | null };

export type TestimonialsQueryVariables = Exact<{
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type TestimonialsQuery = { __typename?: 'Query', testimonials?: { __typename?: 'TestimonialEntityResponseCollection', data: Array<{ __typename?: 'TestimonialEntity', id?: string | null, attributes?: { __typename?: 'Testimonial', publishedAt?: any | null, createdAt?: any | null, updatedAt?: any | null, Compagny?: string | null, Feedback?: string | null, Name: string, ImageUrl?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, mime: string, name: string } | null } | null } | null } | null }> } | null };

export type WorksQueryVariables = Exact<{
  filters?: InputMaybe<WorkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type WorksQuery = { __typename?: 'Query', works?: { __typename?: 'WorkEntityResponseCollection', data: Array<{ __typename?: 'WorkEntity', id?: string | null, attributes?: { __typename?: 'Work', updatedAt?: any | null, createdAt?: any | null, publishedAt?: any | null, Description?: string | null, Title: string, CodeLink?: string | null, ProjectLink?: string | null, Tags?: Enum_Work_Tags | null, ImageUrl: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, previewUrl?: string | null, mime: string, name: string } | null } | null } } | null }> } | null };

export type WorkExperiencesQueryVariables = Exact<{
  filters?: InputMaybe<WorkExperienceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>> | InputMaybe<Scalars['String']>>;
}>;


export type WorkExperiencesQuery = { __typename?: 'Query', workExperiences?: { __typename?: 'WorkExperienceEntityResponseCollection', data: Array<{ __typename?: 'WorkExperienceEntity', id?: string | null, attributes?: { __typename?: 'WorkExperience', publishedAt?: any | null, Description?: string | null, updatedAt?: any | null, createdAt?: any | null, Compagny?: string | null } | null }> } | null };


export const GetOneAboutDocument = gql`
    query getOneAbout($id: ID) {
  about(id: $id) {
    data {
      id
      attributes {
        createdAt
        updatedAt
        Description
        Title
        publishedAt
        ImageUrl {
          data {
            id
            attributes {
              url
              previewUrl
              mime
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetOneAboutQuery__
 *
 * To run a query within a React component, call `useGetOneAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOneAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOneAboutQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOneAboutQuery(baseOptions?: Apollo.QueryHookOptions<GetOneAboutQuery, GetOneAboutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOneAboutQuery, GetOneAboutQueryVariables>(GetOneAboutDocument, options);
      }
export function useGetOneAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOneAboutQuery, GetOneAboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOneAboutQuery, GetOneAboutQueryVariables>(GetOneAboutDocument, options);
        }
export type GetOneAboutQueryHookResult = ReturnType<typeof useGetOneAboutQuery>;
export type GetOneAboutLazyQueryHookResult = ReturnType<typeof useGetOneAboutLazyQuery>;
export type GetOneAboutQueryResult = Apollo.QueryResult<GetOneAboutQuery, GetOneAboutQueryVariables>;
export const GetAllAboutDocument = gql`
    query getAllAbout($filters: AboutFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  abouts(
    filters: $filters
    pagination: $pagination
    publicationState: $publicationState
    sort: $sort
  ) {
    data {
      id
      attributes {
        createdAt
        updatedAt
        Description
        Title
        publishedAt
        ImageUrl {
          data {
            id
            attributes {
              url
              previewUrl
              mime
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllAboutQuery__
 *
 * To run a query within a React component, call `useGetAllAboutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAboutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAboutQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetAllAboutQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAboutQuery, GetAllAboutQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAboutQuery, GetAllAboutQueryVariables>(GetAllAboutDocument, options);
      }
export function useGetAllAboutLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAboutQuery, GetAllAboutQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAboutQuery, GetAllAboutQueryVariables>(GetAllAboutDocument, options);
        }
export type GetAllAboutQueryHookResult = ReturnType<typeof useGetAllAboutQuery>;
export type GetAllAboutLazyQueryHookResult = ReturnType<typeof useGetAllAboutLazyQuery>;
export type GetAllAboutQueryResult = Apollo.QueryResult<GetAllAboutQuery, GetAllAboutQueryVariables>;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    user {
      id
      confirmed
      email
      username
      role {
        id
        name
        description
      }
    }
    jwt
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
      }
    }
    jwt
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const ExperiencesDocument = gql`
    query Experiences($filters: ExperienceFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  experiences(
    filters: $filters
    pagination: $pagination
    publicationState: $publicationState
    sort: $sort
  ) {
    data {
      id
      attributes {
        createdAt
        updatedAt
        publishedAt
        Year
        work_experiences {
          data {
            id
            attributes {
              Name
              Description
              createdAt
              updatedAt
              Compagny
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useExperiencesQuery__
 *
 * To run a query within a React component, call `useExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExperiencesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useExperiencesQuery(baseOptions?: Apollo.QueryHookOptions<ExperiencesQuery, ExperiencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExperiencesQuery, ExperiencesQueryVariables>(ExperiencesDocument, options);
      }
export function useExperiencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExperiencesQuery, ExperiencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExperiencesQuery, ExperiencesQueryVariables>(ExperiencesDocument, options);
        }
export type ExperiencesQueryHookResult = ReturnType<typeof useExperiencesQuery>;
export type ExperiencesLazyQueryHookResult = ReturnType<typeof useExperiencesLazyQuery>;
export type ExperiencesQueryResult = Apollo.QueryResult<ExperiencesQuery, ExperiencesQueryVariables>;
export const SkillsDocument = gql`
    query Skills($filters: SkillFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  skills(
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
    filters: $filters
  ) {
    data {
      id
      attributes {
        updatedAt
        createdAt
        Name
        publishedAt
        BackgroundColor
        ImageUrl {
          data {
            id
            attributes {
              url
              previewUrl
              mime
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useSkillsQuery__
 *
 * To run a query within a React component, call `useSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useSkillsQuery(baseOptions?: Apollo.QueryHookOptions<SkillsQuery, SkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SkillsQuery, SkillsQueryVariables>(SkillsDocument, options);
      }
export function useSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SkillsQuery, SkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SkillsQuery, SkillsQueryVariables>(SkillsDocument, options);
        }
export type SkillsQueryHookResult = ReturnType<typeof useSkillsQuery>;
export type SkillsLazyQueryHookResult = ReturnType<typeof useSkillsLazyQuery>;
export type SkillsQueryResult = Apollo.QueryResult<SkillsQuery, SkillsQueryVariables>;
export const TestimonialsDocument = gql`
    query Testimonials($filters: TestimonialFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  testimonials(
    filters: $filters
    pagination: $pagination
    publicationState: $publicationState
    sort: $sort
  ) {
    data {
      id
      attributes {
        publishedAt
        createdAt
        updatedAt
        Compagny
        Feedback
        Name
        ImageUrl {
          data {
            id
            attributes {
              url
              previewUrl
              mime
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useTestimonialsQuery__
 *
 * To run a query within a React component, call `useTestimonialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestimonialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestimonialsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTestimonialsQuery(baseOptions?: Apollo.QueryHookOptions<TestimonialsQuery, TestimonialsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TestimonialsQuery, TestimonialsQueryVariables>(TestimonialsDocument, options);
      }
export function useTestimonialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TestimonialsQuery, TestimonialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TestimonialsQuery, TestimonialsQueryVariables>(TestimonialsDocument, options);
        }
export type TestimonialsQueryHookResult = ReturnType<typeof useTestimonialsQuery>;
export type TestimonialsLazyQueryHookResult = ReturnType<typeof useTestimonialsLazyQuery>;
export type TestimonialsQueryResult = Apollo.QueryResult<TestimonialsQuery, TestimonialsQueryVariables>;
export const WorksDocument = gql`
    query Works($filters: WorkFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  works(
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
    filters: $filters
  ) {
    data {
      id
      attributes {
        ImageUrl {
          data {
            id
            attributes {
              url
              previewUrl
              mime
              name
            }
          }
        }
        updatedAt
        createdAt
        publishedAt
        Description
        Title
        CodeLink
        ProjectLink
        Tags
      }
    }
  }
}
    `;

/**
 * __useWorksQuery__
 *
 * To run a query within a React component, call `useWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorksQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useWorksQuery(baseOptions?: Apollo.QueryHookOptions<WorksQuery, WorksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorksQuery, WorksQueryVariables>(WorksDocument, options);
      }
export function useWorksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorksQuery, WorksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorksQuery, WorksQueryVariables>(WorksDocument, options);
        }
export type WorksQueryHookResult = ReturnType<typeof useWorksQuery>;
export type WorksLazyQueryHookResult = ReturnType<typeof useWorksLazyQuery>;
export type WorksQueryResult = Apollo.QueryResult<WorksQuery, WorksQueryVariables>;
export const WorkExperiencesDocument = gql`
    query WorkExperiences($filters: WorkExperienceFiltersInput, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE, $sort: [String] = []) {
  workExperiences(
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
    filters: $filters
  ) {
    data {
      id
      attributes {
        publishedAt
        Description
        updatedAt
        createdAt
        Compagny
      }
    }
  }
}
    `;

/**
 * __useWorkExperiencesQuery__
 *
 * To run a query within a React component, call `useWorkExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkExperiencesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useWorkExperiencesQuery(baseOptions?: Apollo.QueryHookOptions<WorkExperiencesQuery, WorkExperiencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkExperiencesQuery, WorkExperiencesQueryVariables>(WorkExperiencesDocument, options);
      }
export function useWorkExperiencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkExperiencesQuery, WorkExperiencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkExperiencesQuery, WorkExperiencesQueryVariables>(WorkExperiencesDocument, options);
        }
export type WorkExperiencesQueryHookResult = ReturnType<typeof useWorkExperiencesQuery>;
export type WorkExperiencesLazyQueryHookResult = ReturnType<typeof useWorkExperiencesLazyQuery>;
export type WorkExperiencesQueryResult = Apollo.QueryResult<WorkExperiencesQuery, WorkExperiencesQueryVariables>;