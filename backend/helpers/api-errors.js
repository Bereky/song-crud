class ApiError extends Error {
  statusCode;

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

class BadRequestError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}

class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

class ServerError extends ApiError {
  constructor(message) {
    super(message ?? "Forbidden", 500);
  }
}

module.exports = {
  ApiError,
  BadRequestError,
  NotFoundError,
  ServerError,
};
