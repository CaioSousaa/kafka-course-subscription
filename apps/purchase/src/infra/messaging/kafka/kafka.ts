import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  clientId: "purchases",
  brokers: ["localhost:9092"],
});
