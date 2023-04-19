import requests
import sys
from bs4 import BeautifulSoup as bs
from fake_useragent import UserAgent

header = {
    'User-Agent':  UserAgent().random,
}
can_use = []
#n是页数
def SeachIp(n):
    url = 'https://www.89ip.cn/index_{0}.html'.format(n)
    response = requests.get(url)
    soup = bs(response.text,'html.parser')
    items = soup.find_all('td')
    lis = []
    for i,j in zip(items[::5],items[1::5]):
        ip=i.text.replace('\t','').replace('\n','')+':'+j.text.replace('\n','').replace('\t','')
        lis.append(ip)
    return lis

def check_ip(a):
    """检测代理ip的可用性"""
    for ip in SeachIp(a):
        try:
            response = requests.get(url='https://ssr1.scrape.center/', proxies=ip, timeout=2,headers=header,verify=False)
            if response.status_code == 200:
                can_use.append(ip)
        except Exception as e:
            print('当前代理ip: ', ip, '请求超时, 检测不合格!!!')
        else:
            print('当前代理ip: ', ip, '检测通过')

for i in range(0,10):
    check_ip(i)
if can_use != []:
    print(can_use)
else:
    print('未查找到可用ip')