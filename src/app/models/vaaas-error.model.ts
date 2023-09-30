import {ApiResponse} from './api-response.model';

export class VaaasError {
  error:ApiResponse;
  headers: any;
  message: any;
  ok: boolean;
  status: number;
  statusText: string;
  url: string;
}
