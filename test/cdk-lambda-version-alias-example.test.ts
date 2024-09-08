import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as CdkLambdaVersionAliasExample from '../lib/cdk-lambda-version-alias-example-stack';
import {expect, test} from "vitest";
// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-lambda-version-alias-example-stack.ts
test('SQS Queue Created', () => {
  const app = new cdk.App();
  const stack = new CdkLambdaVersionAliasExample.CdkLambdaVersionAliasExampleStack(app, 'MyTestStack');
  const template = Template.fromStack(stack);

  // snapshot testを実行する
  expect(template).toMatchSnapshot();
});
