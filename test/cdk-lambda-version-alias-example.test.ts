import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkLambdaVersionAliasExample from '../lib/cdk-lambda-version-alias-example-stack';
import {expect, test} from "vitest";
import {ignoreAssetHashSerializer} from "./plugins/ignore-asset-hash";
test('SQS Queue Created', () => {
  const app = new cdk.App();
  const stack = new CdkLambdaVersionAliasExample.CdkLambdaVersionAliasExampleStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  // snapshot testを実行する
  // s3のbucket名やlambdaのコードのhash値が毎回変わるため、それらを無視するためのserializerを追加
  expect.addSnapshotSerializer(ignoreAssetHashSerializer);
  expect(template).toMatchSnapshot();
});
