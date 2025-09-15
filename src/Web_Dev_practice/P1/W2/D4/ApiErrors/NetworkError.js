export class NetworkError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }
}
