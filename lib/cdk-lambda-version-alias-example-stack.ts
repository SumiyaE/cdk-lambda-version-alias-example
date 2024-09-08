import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import {Alias, Runtime} from "aws-cdk-lib/aws-lambda";
import {SqsEventSource} from "aws-cdk-lib/aws-lambda-event-sources";

export class CdkLambdaVersionAliasExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // SQSの作成
    const queue = new sqs.Queue(this, 'CdkLambdaVersionAliasExampleQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // lambdaの作成
    const lambda = new NodejsFunction(this, 'CdkLambdaVersionAliasExampleFunction', {
      runtime: Runtime.NODEJS_LATEST,
      entry: 'lambda/handler.ts',
      handler: 'handler',
    });

    const lambdaLatestVersion = lambda.latestVersion
    // lambdaのエイリアスを作成
    const alias = new Alias(this, 'CdkLambdaVersionAliasExampleAlias', {
      aliasName: 'test',
      version: lambdaLatestVersion
    });

    // lambdaのトリガーとしてSQSを設定
    lambda.addEventSource(new SqsEventSource(queue));
  }
}
