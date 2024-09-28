function hideAllTables() {
    // Hide all forms
    document.getElementById("showTableLink").style.display = "none";
    document.getElementById("showTableIncome").style.display = "none";
}

function showTable() {
    hideAllTables();
    document.getElementById("showTableLink").style.display = "table"; 
}

function showTableIncome() {
    hideAllTables();
    document.getElementById("showTableIncome").style.display = "table"; 
}

function hideAllTables2() {
    // Hide all forms
    document.getElementById("passed").style.display = "none";
    document.getElementById("Succeed").style.display = "none";
    document.getElementById("Failed").style.display = "none";
}

function showTablepassed() {
    hideAllTables2();
    document.getElementById("passed").style.display = "table"; 
}

function showTableSucceed() {
    hideAllTables2();
    document.getElementById("Succeed").style.display = "table"; 
}

function showTableFailed() {
    hideAllTables2();
    document.getElementById("Failed").style.display = "table"; 
}

function hideAllForms() {
    // Hide all forms
    document.getElementById("createUserForm").style.display = "none";
    document.getElementById("disableUserForm").style.display = "none";
    document.getElementById("updateUserForm").style.display = "none";
}

function showCreateUser() {
    hideAllForms(); // Hide all forms first
    document.getElementById("createUserForm").style.display = "block"; 
}

function showEnableUser() {
    hideAllForms(); // Hide all forms first
    document.getElementById("disableUserForm").style.display = "block";
}

function showUpdateUser() {
    hideAllForms(); // Hide all forms first
    document.getElementById("updateUserForm").style.display = "block";
}

function hideAllFormsCourse() {
    // Hide all forms
    document.getElementById("createCourseForm").style.display = "none";
    document.getElementById("disableCourseForm").style.display = "none";
    document.getElementById("updateCourseForm").style.display = "none";
}

function showCreateCourse() {
    hideAllFormsCourse();
    document.getElementById("createCourseForm").style.display = "block";
}

function showEnableCourse() {
    hideAllFormsCourse();
    document.getElementById("disableCourseForm").style.display = "block";
}

function showUpdateCourse() {
    hideAllFormsCourse();
    document.getElementById("updateCourseForm").style.display = "block";
}

function hideAllFormsQuiz() {
    // Hide all forms
    document.getElementById("createQuizForm").style.display = "none";
    document.getElementById("disableQuizForm").style.display = "none";
    document.getElementById("updateQuizForm").style.display = "none";
}

function showCreateQuiz() {
    hideAllFormsQuiz();
    document.getElementById("createQuizForm").style.display = "block";
}

function showEnableQuiz() {
    hideAllFormsQuiz();
    document.getElementById("disableQuizForm").style.display = "block";
}

function showUpdateQuiz() {
    hideAllFormsQuiz();
    document.getElementById("updateQuizForm").style.display = "block";
}








