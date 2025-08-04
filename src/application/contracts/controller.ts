export interface IController<TBody = undefined> {
  handle(params: IController.request): Promise<IController.response<TBody>>;
}

export namespace IController {
  export type request<
    TBody = Record<string, unknown>,
    TParams = Record<string, unknown>,
    TQueryParams = Record<string, unknown>
  > = {
    body: TBody;
    params: TParams;
    queryParams: TQueryParams;
  };

  export type response<TBody = undefined> = {
    statusCode: number;
    body?: TBody;
  };
}
