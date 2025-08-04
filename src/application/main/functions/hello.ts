import { HelloController } from "../../controllers/hello-controller.js";

import { lambdaHttpAdpter } from "../adapters/lambda-http-adpter.js";

const controller = new HelloController();

export const handler = lambdaHttpAdpter(controller);
