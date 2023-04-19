# -*- coding: utf-8 -*-
import requests
import sys
from bs4 import BeautifulSoup as bs
from threading import Thread
from fake_useragent import UserAgent
from queue import Queue


requests.packages.urllib3.disable_warnings()        #关闭安全警告

# #可用ip池，由于免费ip过于难找先不使用
# proxies={

# }
header = {
    'User-Agent':   UserAgent().random,
    'sec-ch-ua':'"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'Host':'ssr1.scrape.center',
    'Accept-Encoding':'gzip, deflate, br'
}

def getName(film):
    FnameBox = film.find_all(attrs={'class':'name'})
    name = FnameBox[0].h2.text
    return name

def getPic(film):
    img = film.find('img')
    picUrl = img['src']
    return picUrl

def getTag(film):
    categories = film.find_all(attrs={'class':'category'})
    tags = []
    for category in categories:
        tags.append(category.span.text)
    return tags

def getScore(film):
    FscoreBox = film.find_all(attrs={'class':'score'})
    score = FscoreBox[0].text.replace('\n','')
    return score.replace(' ','')



#获取到的全部数据
def spider(url,q):
    datas = []
    # for i in range(1,10):
    #     url = 'https://ssr1.scrape.center/page/'+str(i)
    r = requests.get(url,headers=header,verify=False)          #由于该网页没有安装证书，verify设置为False
    if r.status_code==200:
        #获取
        soup = bs(r.text,'lxml')
        film_list=soup.find_all(attrs={'class':'el-card__body'})
        for i in range(0,10):
            obj = {}
            film = film_list[i]
            name = getName(film)
            picUrl = getPic(film)
            score = getScore(film)
            tags = getTag(film)
            obj["name"]=name
            obj["tags"]=tags
            obj["picUrl"]=picUrl
            obj["score"]=score
            datas.append(obj)
    q.put(datas)


if __name__ == "__main__":
    q = Queue()
    
    threads=[]
    for i in range(2):
        t=Thread(target=spider,args=(url[i],q))
        t.start()
        threads.append(t)
    for i in threads:
        threads.join()
    results = []
    for _ in range(2):
        results.append(q.get())
    print(results)
