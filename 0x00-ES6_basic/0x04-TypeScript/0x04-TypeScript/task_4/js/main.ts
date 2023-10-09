#include <iostream>
#include <string>

const std::string cppSubject = "Cpp";
const std::string javaSubject = "Java";
const std::string reactSubject = "React";

// Teacher class
class Teacher {
public:
    Teacher(int experience) : experienceTeachingC(experience) {}

    std::string getRequirements() {
        return "Requirements for " + subject + ": ...";
    }

    std::string getAvailableTeacher() {
        return "Available teacher for " + subject + ": " + (experienceTeachingC >= 10 ? "Yes" : "No");
    }

    std::string subject = cppSubject; // Default subject
    int experienceTeachingC;
};

int main() {
    // Create a teacher object for C++
    Teacher cTeacher(10);

    // Set subject and log
    cTeacher.subject = cppSubject;
    std::cout << "C++" << std::endl;

    // Call methods and print results
    std::cout << cTeacher.getRequirements() << std::endl;
    std::cout << cTeacher.getAvailableTeacher() << std::endl;

    // Set subject for Java and log
    cTeacher.subject = javaSubject;
    std::cout << "Java" << std::endl;

    // Call methods and print results
    std::cout << cTeacher.getRequirements() << std::endl;
    std::cout << cTeacher.getAvailableTeacher() << std::endl;

    // Set subject for React and log
    cTeacher.subject = reactSubject;
    std::cout << "React" << std::endl;

    // Call methods and print results
    std::cout << cTeacher.getRequirements() << std::endl;
    std::cout << cTeacher.getAvailableTeacher() << std::endl;

    return 0;
}
Java:

java
Copy code
public class Main {

    // Constants for subjects
    public static final String cppSubject = "Cpp";
    public static final String javaSubject = "Java";
    public static final String reactSubject = "React";

    // Teacher class
    public static class Teacher {
        public String subject = cppSubject; // Default subject
        public int experienceTeachingC;

        public Teacher(int experience) {
            experienceTeachingC = experience;
        }

        public String getRequirements() {
            return "Requirements for " + subject + ": ...";
        }

        public String getAvailableTeacher() {
            return "Available teacher for " + subject + ": " + (experienceTeachingC >= 10 ? "Yes" : "No");
        }
    }

    public static void main(String[] args) {
        // Create a teacher object for C++
        Teacher cTeacher = new Teacher(10);

        // Set subject and log
        cTeacher.subject = cppSubject;
        System.out.println("C++");

        // Call methods and print results
        System.out.println(cTeacher.getRequirements());
        System.out.println(cTeacher.getAvailableTeacher());

        // Set subject for Java and log
        cTeacher.subject = javaSubject;
        System.out.println("Java");

        // Call methods and print results
        System.out.println(cTeacher.getRequirements());
        System.out.println(cTeacher.getAvailableTeacher());

        // Set subject for React and log
        cTeacher.subject = reactSubject;
        System.out.println("React");

        // Call methods and print results
        System.out.println(cTeacher.getRequirements());
        System.out.println(cTeacher.getAvailableTeacher());
    }
}