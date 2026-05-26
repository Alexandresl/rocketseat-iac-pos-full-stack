import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("primeiro-teste-pulumi-al3xandr3sl", {
  bucket: "primeiro-teste-pulumi-al3xandr3sl",
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

export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;