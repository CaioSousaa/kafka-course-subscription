export interface MessagingAdapter {
  sendMessaging(topic: string, message: any): Promise<void>;
}
