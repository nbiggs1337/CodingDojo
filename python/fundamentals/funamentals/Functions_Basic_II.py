# -----Note: some vars may interfere with eachother, uncomment one at a time and run if testing! 


# #1 
# def countdown(num):
#     count = []  
#     for x in range (num, -1, -1):
#         count.append(x)

#     return count

# countdown(10)
# print(countdown(10))
# countdown(53)
# print(countdown(53))


#2
# def print_return(a,b):
#     print(a)
#     return(b)

# x = print_return(5,9)
# print(x) #for debugging/testing


#3 
# list1 = [1,2,5,7]
# list2 = [32, 53, 77, 23, 1, 35, 8, 9, 34, 55, 22, 7, 8]

# def first_length(inlist):
#     # print(inlist[0], len(inlist))         #for debugging/testing
#     return inlist[0] + len(inlist)
    
# print(first_length(list1))
# print(first_length(list2))



#4 
# list1 = [1,4,5,7, 3, 5, 1, 1, 6]
# list2 = [32, 53, 77, 23, 1, 35, 8, 9, 34, 55, 22, 7, 8]
# list3 = [1]

# def greater_than_second(defList):
#     new_list = []
#     total = 0
#     if len(defList) < 2:
#         return False
#     else:
#         for x in range (0, len(defList)):
#             if defList[x] > defList[1]:
#                 total = total +1
#             if defList[x] > defList[1]:
#                 new_list.append(defList[x])
#     print(total)
#     return new_list

# print(greater_than_second(list1))




#5

# def length_value(a,b):
#     new_list = []
#     for i in range(0, a):
#         new_list.append(b)
#     print(new_list)

# length_value(4,7)
# length_value(6,2)
