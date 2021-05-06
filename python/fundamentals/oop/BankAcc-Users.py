class BankAcc:
    
    instances = set()
    
    def __init__(self, balance, int_rate):
        self.name = "Default"
        self.int_rate = int_rate
        self.balance = balance
        self.acc_type = 'Checking'
        BankAcc.instances.add(self)
        return None
    
    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdrawal(self, amount):
        self.balance -= amount
        return self
    
    def acc_info(self):
        print( "Account Type: ", self.acc_type, "|   Account Balance:  $", self.balance, "|  APY:  ", self.int_rate*100,"%")
        return self
    
    def balance_info(self):
        print(self.balance)
        return self

    def int_yield(self):
        print('Annual APY: ', self.int_rate*100,'%      |      Note: Subject to change at anytime, youre a pleb' )
        return self
    
    #kinda extra trying to just figure out ninja bonus
    @classmethod
    def get_instances(cls):
        return str(cls.instances)

#######Parent below, bc child is connected through?
class User:
    bank_name= "First Bank of Default Dojo"
    def __init__(self, name, email):
        self.name= name
        self.email = email
        self.account = BankAcc(balance = 0, int_rate= 0.02)
        return None #exception to return self rule - only on init
    
    def make_deposit(self, amount):
        self.account.deposit(amount)
        return self
    
    def make_withdrawal(self, amount):
        self.account.withdrawal(amount)
        return self
    
    def acc_info(self):
        self.account.acc_info()
        return self
    
    def display_balance(self):
        self.account.balance_info()
        return self
        
    def transfer(self, name, amount):
        self.account.withdrawal(amount)
        name.account.deposit(amount)
        print("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        print(self.name, 'transfering  $', amount, 'to ', name.name, '....')
        print("-------------------------------------------------")
        print('Transfer Complete. Current balances: ')
        print(self.name), self.acc_info()
        print(name.name), name.acc_info()
        print("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
        return self


# Users()
michael = User('Michael Jordan', 'mj23@nba.com')
anna = User('Anna Staub', 'anns1337@yahoo.com')
noah = User('Noah Biggs', 'nbiggs1337@gmail.com')

anna.make_deposit(200).make_withdrawal(20).display_balance()

michael.make_deposit(9432532463).display_balance

noah.display_balance().make_deposit(200000).make_withdrawal(5001).display_balance()

noah.transfer(anna, 10000)

michael.transfer(noah, 8625432543)

















#Accounts for previous single class assignments
# acc1 = BankAcc(5000, 0.01)
# acc2 = BankAcc(21000, 0.025)

# #Required chain for acc1
# acc1.acc_info().deposit(500).deposit(270).deposit(1003).withdrawal(3000).int_yield().acc_info()

# # #Required chain for acc2
# acc2.acc_info().deposit(400).deposit(792).withdrawal(2000).withdrawal(64).withdrawal(400).withdrawal(31).int_yield().acc_info()

#Ninja Bonus - doesn't work and TA couldnt figure it out either so w/e
# print(BankAcc.get_instances())