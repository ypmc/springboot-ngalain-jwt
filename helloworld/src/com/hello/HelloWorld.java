package com.hello;

import java.util.Calendar;

public class HelloWorld {

    public String sayHelloWorld() {

        return String.format("%s, now is %s", "hello world", Calendar.getInstance().getTime());
    }

}
