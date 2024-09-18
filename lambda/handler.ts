import {Context, SQSEvent} from "aws-lambda";

export const handler = async (event: SQSEvent, context: Context): Promise<void> => {
  for (const record of event.Records) {
    console.log(`SQSのメッセージの中身： ${record.body}`)
    console.log("バージョンを発行したいです")
  }
}

