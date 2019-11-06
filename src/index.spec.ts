import { Request, Response } from "servie/dist/node";
import { prefix } from ".";

describe("popsicle prefix", () => {
  const done = async () => new Response();

  it("should prefix urls", async () => {
    const req = new Request("/test");

    await prefix("http://prefix.com")(req, done);

    expect(req.url).toEqual("http://prefix.com/test");
  });

  it("should prefix relative urls", async () => {
    const req = new Request("test");

    await prefix("http://prefix.com")(req, done);

    expect(req.url).toEqual("http://prefix.com/test");
  });

  it("should prefix absolute urls", async () => {
    const req = new Request("http://example.com");

    await prefix("http://prefix.com")(req, done);

    expect(req.url).toEqual("http://prefix.com/http://example.com");
  });
});
