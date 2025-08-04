import { APIGatewayProxyEventV2 } from "aws-lambda";

export function lambdaBodyParse(body: APIGatewayProxyEventV2["body"]) {
  try {
    if (!body) return {};

    return JSON.parse(body);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("Malformed body");
  }
}
