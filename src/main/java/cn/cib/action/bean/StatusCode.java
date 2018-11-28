package cn.cib.action.bean;

public enum StatusCode {
    OK(200, "OK"),
    FORBIDDEN(403, "Forbidden"),
    NOT_FOUND(404, "Not Found"),
    REQUEST_TIMEOUT(408, "Request Timeout"),
    BAD_REQUEST(400, "Bad Request"),
    UNAUTHORIZED(401, "Unauthorized"),
    INTERNAL_SERVER_ERROR(500, "Internal Server Error"),
    JWT_TOKEN_EXPIRED(600, "JWT Token Expired"),
    REQUEST_PARAM_INVALID(601, "Request Param Invalid"),
    REQUEST_PARAM_CONVERSION_ERROR(602, "Request Param Conversion Error"),
    HTTP_MESSAGE_NOT_READABLE(603, "HTTP Message Not Readable"),
    REQUEST_METHOD_NOT_SUPPORTED(604, "HTTP Request Method Not Supported"),
    MODEL_OR_OPERATION_ERROR(800, "Request M/O Error");

    private final int value;
    private final String reasonPhrase;

    StatusCode(int value, String reasonPhrase) {
        this.value = value;
        this.reasonPhrase = reasonPhrase;
    }

    public int value() {
        return this.value;
    }

    public String getReasonPhrase() {
        return this.reasonPhrase;
    }

    public String toString() {
        return Integer.toString(this.value);
    }

    public static StatusCode valueOf(int statusCode) {
        StatusCode[] var = values();
        StatusCode[] var2 = var;
        int var3 = var.length;

        for(int var4 = 0; var4 < var3; ++var4) {
            StatusCode status = var2[var4];
            if (status.value == statusCode) {
                return status;
            }
        }

        throw new IllegalArgumentException("No matching constant for [" + statusCode + "]");
    }
}
