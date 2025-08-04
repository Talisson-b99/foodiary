import {
  type APIGatewayProxyEventV2,
  type APIGatewayProxyResultV2,
} from "aws-lambda";
import { lambdaBodyParse } from "../utils/lambda-body-parse.js";
import { IController } from "../../contracts/controller.js";

export function lambdaHttpAdpter(controller: IController<unknown>) {
  return async (
    event: APIGatewayProxyEventV2
  ): Promise<APIGatewayProxyResultV2> => {
    const body = lambdaBodyParse(event.body);
    const params = event.pathParameters ?? {};
    const queryParams = event.queryStringParameters ?? {};

    const response = await controller.handle({
      body,
      params,
      queryParams,
    });

    return {
      statusCode: response.statusCode,
      body: response.body ? JSON.stringify(response.body) : undefined,
    };
  };
}
