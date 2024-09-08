import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
import {NodejsFunction} from "aws-cdk-lib/aws-lambda-nodejs";
import {Alias, Runtime, Version} from "aws-cdk-lib/aws-lambda";
import {SqsEventSource} from "aws-cdk-lib/aws-lambda-event-sources";

export class CdkLambdaVersionAliasExampleStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // lambdaの作成
    const lambda = new NodejsFunction(this, 'CdkLambdaVersionAliasExampleFunction', {
      runtime: Runtime.NODEJS_LATEST,
      entry: 'lambda/handler.ts',
      handler: 'handler',
      description: 'This is a lambda function',
    });
    const currentVersion = lambda.currentVersion

    // lambdaの現在のバージョンを発行
    // const lambdaOldVersion = new Version(this, 'CdkLambdaVersionAliasExampleVersionOld', {
    //   lambda: lambda
    // })
    // lambdaの新しいバージョンを発行
    // const lambdaNewVersion =  new Version(this, 'CdkLambdaVersionAliasExampleVersionNew', {
    //   lambda: lambda
    // })

    // lambdaのエイリアスを作成
    // const alias = new Alias(this, 'CdkLambdaVersionAliasExampleAlias', {
      // aliasName: 'test',
      // version: lambdaOldVersion,
      // additionalVersions: [{
      //   version: lambdaNewVersion,
      //   weight: 0.5
      // }]
    // });


    // SQSの作成
    const queue = new sqs.Queue(this, 'CdkLambdaVersionAliasExampleQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });
    const queue2 = new sqs.Queue(this, 'CdkLambdaVersionAliasExampleQueue2', {
      visibilityTimeout: cdk.Duration.seconds(300)
    });

    // SQSをLambdaのトリガーに設定
    lambda.addEventSource(new SqsEventSource(queue));
  }
}
