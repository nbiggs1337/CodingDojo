class User:
    bank_name= "First Bank of Default Dojo"
    def __init__(self, name, email):
        self.name= name
        self.email = email
        self.account_balance = 0
        return None #exception to return self rule - only on init
    
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
        
    def display_balance(self):
        print('Name: ', self.name, ' Balance: $', self.account_balance)
        return self
        
    def transfer(self, name, amount):
        self.account_balance -= amount
        name.account_balance += amount
        print(self.name, 'transfering  $', amount, 'to ', name.name, '....')
        print('Transfer Complete. Current balances: ')
        print('Name: ', self.name, ' Balance: $', self.account_balance)
        print('Name: ', name.name, ' Balance: $', name.account_balance)
        return self

# Users()
michael = User('Michael Jordan', 'mj23@nba.com')
anna = User('Anna Staub', 'anns1337@yahoo.com')
noah = User('Noah Biggs', 'nbiggs1337@gmail.com')

# michael.name = "Michael" setting values per instance. 
# anna.name = 'Anna'


anna.make_deposit(200).make_deposit(3000).make_withdrawal(25).make_withdrawal(1040)

#define user/attribute on FIRST link of chain ONLY

noah.make_deposit(99999).make_withdrawal(40000).make_withdrawal(500).make_withdrawal(9).transfer(anna, 4000)



# noah.display_balance()   #to check accounts balances previously, now call class/method
# anna.display_balance()   #test instancies

# print(michael.account_balance)  
# print(anna.account_balance)
