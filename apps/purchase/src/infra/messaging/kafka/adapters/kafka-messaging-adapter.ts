import { MessagingAdapter } from "../../../../application/adapters/messaging-adapter";
import { producer } from "../producer";

export class KafkaMessagingAdapter implements MessagingAdapter {
  async sendMessaging(topic: string, message: any): Promise<void> {
    console.log(`[PURCHASE] New messaging in topic "${topic}"`);
    console.log(JSON.stringify(message, null, 2));

    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }
}
