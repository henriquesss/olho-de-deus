export class HttpNotFoundError extends Error {
  status: number;

  constructor(message: string) {
    super(); // Chame isso por que você utiliza 'extends'
    this.message = message;
    this.status = 404;
  }
}
