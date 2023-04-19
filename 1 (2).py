from threading import Thread,Condition
from random import randint
from time import sleep
class Account(Thread):
    def __init__(self,ID,threadname):
        Thread.__init__(self,name=threadname)
        self.ID=ID
    def put(self):
        global balance
        count=randint(1,100)
        if(con.acquire()):
            balance=balance+count
            print("%s put %d balance: %d" \
                  %(self.name,count,balance))
            con.notify()
            con.release()
    def take(self):
        global balance
        if(con.acquire()):
            count=randint(1,100)
            if(balance<count):
                con.wait()
            else:
                balance-=count
                print("%s take %d balance: %d"\
                      %(self.name,count,balance))
                con.notify()
            con.release()
            #sleep(1)
con = Condition() 
balance = 100
def test():
    taker=Account("ID1","taker")
    putter=Account("ID2","putter")
    while(True):
        taker.take()
        putter.put()
if __name__=="__main__":
    test()