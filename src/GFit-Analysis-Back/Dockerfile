FROM openjdk:11-jdk-slim-buster
VOLUME /tmp
ARG JAR_FILE=target/GFit-Analysis-Back-0.0.1-SNAPSHOT.war
ADD ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-Dserver.port=$PORT", "-XX:MaxRAM=400M","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]