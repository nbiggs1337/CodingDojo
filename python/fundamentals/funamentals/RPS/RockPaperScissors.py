import random
rand_choice = ""

choices = ["Rock", "Paper", "Scissors"]
count_player = 0
count_code = 0

valid = False
while valid == False and count_player <= 2 and count_code <= 2:
    print(f"The score is: Human: {str(count_player)} |  Computer: {str(count_code)}")
    rand_choice = random.choice(choices)
    # print(rand_choice)
    user_choice = input("Rock, Paper, or Scissors? :  ")
    print(f"You picked {user_choice}... Computer picks {rand_choice}")
    
    if user_choice in choices:
        # print("Good Job!")
        # valid = True
        if user_choice == rand_choice:
            print("Tie! Try again!")
            valid = False
        elif user_choice == "Rock" and rand_choice == "Scissors":
            print("Humans Rock crushes Computers Paper, You win!")
            count_player += 1
            valid = False
        elif rand_choice == "Rock" and user_choice == "Scissors":
            print("Computers Rock crushes Humans Scissors, Computer wins!")
            count_code += 1
            valid = False
            
        elif user_choice == "Scissors" and rand_choice == "Paper":
            print("Humans Scissors cuts Computers paper! You win!")
            count_player += 1
            valid = False
        elif rand_choice == "Scissors" and user_choice == "Paper":
            print("Computers Scissors cut Humans Paper, Computer wins!")
            count_code += 1
            valid = False
            
        elif user_choice == "Paper" and rand_choice == "Rock":
            print("Humans Paper beats Computers Rock! You win!")
            count_player += 1
            valid = False
        elif rand_choice == "Paper" and user_choice == "Rock":
            print("Computers Paper beats Humans Rock, Computer wins!")
            count_code += 1
            valid = False
        
    else:
        print("Invalid choice, retry & use first letter Caps!")
    
    

