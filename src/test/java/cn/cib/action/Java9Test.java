package cn.cib.action;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import static java.util.Map.entry;

public class Java9Test {
    public static void main(String[] args) throws Exception {
        List immutableList = List.of("one", "two", "three");
        List emptyImmutableList = List.of();
        System.out.println(immutableList);
        System.out.println(emptyImmutableList);

        Map immutableMap = Map.of(1, "one", 2, "two", 3, "three");
        Map emptyImmutableMap = Map.of();
        System.out.println(immutableMap);
        System.out.println(emptyImmutableMap);

        Map nonEmptyImmutableMap = Map.ofEntries(entry(1, "one"), entry(2, "two"), entry(3, "three"));
        System.out.println(nonEmptyImmutableMap);


        ProcessHandle currentProcess = ProcessHandle.current();
        System.out.println("Current Process Id: = " + currentProcess.pid());

        testARM_Java9();


        Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).takeWhile(i -> i < 5)
                .forEach(System.out::println);

        Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).dropWhile(i -> i < 5)
                .forEach(System.out::println);
    }

    static void testARM_Java9() throws IOException {
        BufferedReader reader1 = new BufferedReader(new FileReader("d:/run.bat"));
        try (reader1) {
            System.out.println(reader1.readLine());
        }
    }
}
