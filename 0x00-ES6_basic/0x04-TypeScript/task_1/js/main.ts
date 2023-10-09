
interface Teacher {
    void teach();
    void gradePapers();
}

// 
interface Directors extends Teacher {
    int numberOfReports(); // 
}