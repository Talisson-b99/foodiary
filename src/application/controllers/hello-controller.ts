import { IController } from "../contracts/controller.js";

export class HelloController implements IController<unknown> {
  async handle(
    request: IController.request
  ): Promise<IController.response<unknown>> {
    return {
      statusCode: 200,
      body: {
        deuBoom: "true",
        request,
      },
    };
  }
}
