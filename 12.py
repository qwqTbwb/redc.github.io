# -*- coding: utf-8 -*-
import requests
import sys
from bs4 import BeautifulSoup as bs
from fake_useragent import UserAgent

header = {
    'User-Agent':  UserAgent().random,
    'sec-ch-ua':'"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'Host':'ssr1.scrape.center',
    'Accept-Encoding':'gzip, deflate, br'
}


requests.packages.urllib3.disable_warnings()                #关闭安全警告
url = 'https://ssr1.scrape.center/page/2'
r = requests.get(url,headers=header,proxies='41.60.232.106:8080',verify=False)          #由于该网页没有安装证书，verify设置为False
if r.status_code==200:
    #获取名字
    datas = []
    soup = bs(r.text,'lxml')
    film_list=soup.find_all(attrs={'class':'el-card__body'})
    film = film_list[0]
    categories = film.find_all(attrs={'class':'category'})
    lis = []
    for category in categories:
        lis.append(category.span.text)
    print(lis)
       # -*- coding: utf-8 -*-
# import requests
# import sys
# from bs4 import BeautifulSoup as bs
# from fake_useragent import UserAgent

# header = {
#     'User-Agent':  UserAgent().random,
# }
# #n是页数
# def SeachIp(n):
#     url = 'https://www.89ip.cn/index_{0}.html'.format(n)
#     response = requests.get(url)
#     soup = bs(response.text,'html.parser')
#     items = soup.find_all('td')
#     lis = []
#     for i,j in zip(items[::5],items[1::5]):
#         ip=i.text.replace('\t','').replace('\n','')+':'+j.text.replace('\n','').replace('\t','')
#         lis.append(ip)

#     return lis

# def check_ip(a):
#     """检测代理ip的可用性"""
#     use_proxy = []
#     for ip in SeachIp(a):
#         try:
#             response = requests.get(url='https://ssr1.scrape.center/', proxies=ip, timeout=2,headers=header,verify=False)
#             if response.status_code == 200:
#                 use_proxy.append(ip)
#         except Exception as e:
#             print('当前代理ip: ', ip, '请求超时, 检测不合格!!!')
#         else:
#             print('当前代理ip: ', ip, '检测通过')
#     return use_proxy

# print(check_ip(4))