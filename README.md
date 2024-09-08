# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

## SQSにメッセージを送信するコマンド
```shell
aws sqs send-message --queue-url https://sqs.ap-northeast-1.amazonaws.com/{aws_accound_id}/CdkLambdaVersionAliasExampleStack-CdkLambdaVersionAliasExampleQueue-{hash} \
--message-body '{ "message": "Hello World" }' \
--profile xxxxxx
```

- {aws_accound_id} はAWSアカウントIDを指定してください。
- {hash} はリソース作成時に自動生成されるハッシュ値を指定してください。