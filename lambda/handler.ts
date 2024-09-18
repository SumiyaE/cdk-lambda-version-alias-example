import {Context, SQSEvent} from "aws-lambda";

export const handler = async (event: SQSEvent, context: Context): Promise<void> => {
  console.log('-------------ここから処理開始-------------')
  for (const record of event.Records) {
    console.log(`Message body: ${record.body}`)
  }
  console.log('-------------ここで処理終了-------------')
  console.log('------ソースコードを若干変更--------')
}