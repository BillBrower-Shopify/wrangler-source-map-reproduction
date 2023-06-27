import {Router} from 'itty-router';

import {createRequestHandler} from '@remix-run/cloudflare';
import {type AppLoadContext} from '@remix-run/server-runtime';

const remixMiddleware = async (
  request: Request,
  _context: any,
) => {
  const build = await import('@build/index');

  const remixHandler: ReturnType<typeof createRequestHandler> =
    createRequestHandler(build as any, 'development');

  console.log("REMIX HANDLER", remixHandler, typeof remixHandler)

  const loadContext: AppLoadContext = {
    cf: request.cf,
  };

  return await remixHandler(request, loadContext);
};

const routes = () => {
  const router = Router();
  router.all(
    '*', // all routes
    remixMiddleware, // process the request with Remix
  );
  return router;
};

export default {
  async fetch(
    request: Request,
    _env: any,
    context: any,
  ): Promise<Response> {
    const router = routes();
    return await router.handle(request, context);
  },
};
