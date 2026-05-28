import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("primeiro-teste-pulumi-al3xandr3sl", {
  bucket: "primeiro-teste-pulumi-al3xandr3sl",
  tags: {
    IAC: "true",
  }
});

const secondBucket = new aws.s3.Bucket("segundo-teste-pulumi-al3xandr3sl", {
  bucket: "segundo-teste-pulumi-al3xandr3sl",
  tags: {
    IAC: "true",
  }
});

const ecr = new aws.ecr.Repository("segundo-teste-pos-rocketseat", {
  name: 'segundo-teste-pos-rocketseat',
  imageTagMutability: 'IMMUTABLE',
  tags: {
    IAC: "true"
  }
})

export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;