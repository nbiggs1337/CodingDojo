#1
# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0] = 15
# # print(x)

# students[0]['last_name'] = 'Bryant'
# # print(students[0])

# sports_directory['soccer'][0] = 'Andres'
# # print(sports_directory['soccer'])

# z[0]['y'] = 30
# # print(z[0]['y'])

# print(x)
# print(students)
# print(sports_directory)
# print(z)



# #2
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# def iterateDictionary(students):
#     for x in range (0, len(students)):
#         print('First_Name - ' + students[x]['first_name'] + ', Last_Name: ' + students[x]['last_name'])

# iterateDictionary(students)




# #3
# students = [     #example
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]

# def iterateDictionary2(key_name, some_list):
#     for x in range (0, len(some_list)):
#         print(some_list[x][key_name])


# iterateDictionary2('first_name', students)
# iterateDictionary2('last_name', students)




#4
dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

def printInfo(some_dict):
    for x in some_dict:
        print(len(some_dict[x]), str(x.upper()))
        for i in some_dict[x]:
            print(i)

printInfo(dojo)
