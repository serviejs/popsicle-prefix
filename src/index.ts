import { CommonRequest, CommonResponse } from "servie/dist/common";

export function prefix(prefix: string) {
  return function<T extends CommonRequest, U extends CommonResponse>(
    req: T,
    next: () => Promise<U>
  ): Promise<U> {
    req.url = `${prefix}/${req.url.replace(/^\//, "")}`;

    return next();
  };
}
