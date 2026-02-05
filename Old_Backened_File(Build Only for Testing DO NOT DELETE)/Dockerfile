# STAGE 1: Build the Application
FROM maven:3.9-eclipse-temurin-17-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
# Compile the code
RUN mvn clean package -DskipTests

# STAGE 2: Run the Application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Copy the built jar from Stage 1
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]