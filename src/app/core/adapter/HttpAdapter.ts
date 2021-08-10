import axios from 'axios';

interface GetParams {
  url: string;
  queryString?: string;
  headers?: object;
  options?: object;
}

interface PostParams {
  url: string;
  queryString?: string;
  headers?: object;
  options?: object;
  body?: any;
}

export interface IHttpAdapter {
  get(p: GetParams): Promise<any>;
  post(p: PostParams): Promise<any>;
  request(p: any): Promise<any>;
  put(request?: any): Promise<any>;
  // delete(request?: any): Promise<any>;
}

export class HttpAdapter implements IHttpAdapter {
  private initialHeaders: object;

  constructor(initialHeaders?: object) {
    this.initialHeaders = initialHeaders || {};
  }

  put(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = `${p.url}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };

    return axios.put(urlCall, p.body, {
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  post(p: PostParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = `${p.url}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };

    return axios.post(urlCall, p.body, {
      headers,
      timeout: 300000,
      ...p.options,
    });
  }

  get(p: GetParams): Promise<any> {
    const qs = p.queryString ? `?${p.queryString}` : '';
    const urlCall = `${p.url}${qs}`;
    const headers = { ...this.initialHeaders, ...p.headers };
    return axios.get(urlCall, { headers, ...p.options });
  }

  request(p: any): Promise<any> {
    return axios.request(p);
  }
}
