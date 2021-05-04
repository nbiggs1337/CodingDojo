students = []
num_of_students = 0
num_of_students = int(input('How many students do you have?  '))
while num_of_students > 0:
    current = {'Name':'', 'Course': '', 'Grade': 1}
    name = input('Student Name: ')
    current['Name'] = name
    # print(current)
    course_choice = False
    while course_choice == False:
        course = input("Select a course: 1 - Math, 2 - Science, 3 - History  ")
        if course == '1' or '2' or '3':
            if course == '1':
                current['Course'] = "Math"
                course_choice = True
            elif course == '2':
                current['Course'] = 'Science'
                course_choice = True
            elif course == '3':
                current['Course'] = 'History'
                course_choice = True
            else: 
                print("Invalid Selection, choose the number of the corresponding course.")
                
    grade = 0
    grade_input = False
    while grade_input == False:
        try:
            grade = int(input("Students Grade %:  "))
            # print(type(grade))
            if type(grade) == int:
                current['Grade'] = grade
                grade_input = True
        except:
            print("Please input grade out of 100 in integer form only...")
            # print(type(grade))
    students.append(current)
    num_of_students = num_of_students - 1
    
print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
print(*students, sep = "\n")
print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-')
print("    ==   Grades recorded. Have a nice day :)   ==" )
print('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-')



