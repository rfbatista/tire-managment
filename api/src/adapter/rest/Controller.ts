import { RouterOptions } from 'express';

export function Controller(
  url: string,
  middlewareOrRouterOptions?: RouterOptions,
  middleware: any[] = []
) {
  return (target): void => {
    const meta = {
      url: url,
      middleware: middleware,
      middlewareOrRouterOptions: middlewareOrRouterOptions,
    };
  };
}

function decoratorFactory(httpMethod: string, url: string, middleware: any[] = []) {
  return (target: any, key: string, descriptor: any) => {
    const meta = {}

    // init the routes dictionary
    const routes = {};
    const routeKey = `${httpMethod}.${url}`;
    if (routes[routeKey]) {
      // the combination of httpMethod and url is already registered for this method (fn)
      // let's not register a new route but concat its middlewares
      routes[routeKey].middleware = [...routes[routeKey].middleware, ...middleware];
    } else {
      // this is a new route for the method
      routes[routeKey] = {
        method: httpMethod,
        url,
        middleware,
      };
    }
    return descriptor;
  };
}

/**
 * Get route
 *
 * @param {string} url
 * @param {any[]} [middleware]
 */
export function Get(url: string, middleware?: any[]) {
  return decoratorFactory('get', url, middleware);
}

/**
 * Post route
 *
 * @param {string} url
 * @param {any[]} [middleware]
 */
export function Post(url: string, middleware?: any[]) {
  return decoratorFactory('post', url, middleware);
}

/**
 * Put route
 *
 * @param {string} url
 * @param {any[]} [middleware]
 */
export function Put(url: string, middleware?: any[]) {
  return decoratorFactory('put', url, middleware);
}

/**
 * Delete route
 *
 * @param {string} url
 * @param {any[]} [middleware]
 */
export function Delete(url: string, middleware?: any[]) {
  return decoratorFactory('delete', url, middleware);
}