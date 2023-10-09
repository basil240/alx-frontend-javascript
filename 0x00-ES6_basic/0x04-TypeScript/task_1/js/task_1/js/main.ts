
interface PrintTeacherFunction {
    String printTeacher(String firstName, String lastName);
}

public class TeacherPrinter implements PrintTeacherFunction {
    @Override
    public String printTeacher(String firstName, String lastName) {
        // Ensure that firstName is not empty to avoid NullPointerException
        if (firstName == null || firstName.isEmpty()) {
            return lastName; // If firstName is empty or null, return just the lastName
        } else {
            // Extract the first letter of firstName and concatenate it with the lastName
            char firstInitial = firstName.charAt(0);
            return firstInitial + ". " + lastName;
        }
    }

    public static void main(String[] args) {
        TeacherPrinter teacherPrinter = new TeacherPrinter();
        String result = teacherPrinter.printTeacher("John", "Doe");
        System.out.println(result); // Output: J. Doe
    }
}