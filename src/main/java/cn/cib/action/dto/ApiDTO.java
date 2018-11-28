package cn.cib.action.dto;

import cn.cib.action.bean.StatusCode;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.io.Serializable;

public class ApiDTO<T> implements Serializable {
    private static final long serialVersionUID = 1376988622279678336L;
    public long timestamp;

    public int status;

    public String code;

    public String message;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    public T data;

    private ApiDTO() {
    }

    private ApiDTO(int status, String code, String message, T data) {
        this.timestamp = System.currentTimeMillis();
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
    }

    private ApiDTO(int status,  String code, String message) {
        this.timestamp = System.currentTimeMillis();
        this.status = status;
        this.code = code;
        this.message = message;
    }



    public static <T> ApiDTO<T> ok(String code, String message, T data) {
        return new ApiDTO(StatusCode.OK.value(), code, message, data);
    }

    public static <T> ApiDTO<T> ok(T data) {
        return ok("", "", data);
    }

    public static <T> ApiDTO<T> ok(String code, String message) {
        return ok(code, message, null);
    }

    public static <T> ApiDTO<T> fail(StatusCode status, String code, String message) {
        return new ApiDTO(status.value(), status.getReasonPhrase(), code, message);
    }

    public static <T> ApiDTO<T> fail(StatusCode status, String message) {
        return fail(status, "", message);
    }

    public static <T> ApiDTO<T> fail(StatusCode status) {
        return fail(status, "");
    }
}
