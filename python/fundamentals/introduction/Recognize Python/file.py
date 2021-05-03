num1 = 42 # var declaration
num2 = 2.3 #var declaration
boolean = True #data tyoe - boolean
string = 'Hello World' #data type string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #list - initialize
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #dictionary - initialize 
fruit = ('blueberry', 'strawberry', 'banana') #tuple - initialize
print(type(fruit)) #tuple - access value
print(pizza_toppings[1])#list - access value
pizza_toppings.append('Mushrooms')# list - add value
print(person['name']) #dictionary - access value
person['name'] = 'George' # dictionary - change value
person['eye_color'] = 'blue' # dictionary - add value
print(fruit[2]) #tuple - access value ?

if num1 > 45: #conditional - if
    print("It's greater")#log statement
else: #conditional - else
    print("It's lower")#log statement

if len(string) < 5: #condtional - if
    print("It's a short word!") #log statement
elif len(string) > 15: #conditional - else if
    print("It's a long word!") #log statement
else: #condtional - else
    print("Just right!")#log statement

for x in range(5): #for - start 
    print(x) #for - continue
for x in range(2,5): #for - start, sequence
    print(x) #for - continue
for x in range(2,10,3): #for - strart, sequence, increment
    print(x) #log - statement
x = 0 #while - start
while(x < 5): #while - stop
    print(x) # while - sequence
    x += 1 #while - increment

pizza_toppings.pop() #list - remove value
pizza_toppings.pop(1) #list - change value

print(person) #log statement
person.pop('eye_color') #dictionary - remove value
print(person)#log statement

for topping in pizza_toppings: #for - start
    if topping == 'Pepperoni': #conditional - if
        continue #for - continue 
    print('After 1st if statement') # for - sequence
    if topping == 'Olives': #conditional
        break #break

def print_hello_ten_times(): #function - parameter
    for num in range(10): # function - argument
        print('Hello') # function - return

print_hello_ten_times() #function - called

def print_hello_x_times(x): #function - parameter
    for num in range(x): #function - arguement / forloop
        print('Hello') #function - return

print_hello_x_times(4) # function - calling + parameter

def print_hello_x_or_ten_times(x = 10):#function - parameter
    for num in range(x): #function - argument / forloop
        print('Hello') #function - return

print_hello_x_or_ten_times() #function - calling
print_hello_x_or_ten_times(4) #function- call + parameter


"""
Bonus section
"""

# print(num3) #NameError: name <variable name> is not defined
# num3 = 72 #tuples - add value
# fruit[0] = 'cranberry' #tuples - change value
# print(person['favorite_team'])#KeyError: 'favorite_team'
# print(pizza_toppings[7])# IndexError: list index out of range
#   print(boolean) #IndentationError: unexpected indent
# fruit.append('raspberry')#- AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1)#- AttributeError: 'tuple' object has no attribute 'pop'
