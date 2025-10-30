package examples;

import com.intuit.karate.junit5.Karate;

public class DebugRunner {
    @Karate.Test
    Karate testDebug() {
        return Karate.run("classpath:examples").tags("@TestTag").relativeTo(getClass());
    }
}
