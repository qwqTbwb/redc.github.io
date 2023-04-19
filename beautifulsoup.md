准备

```python
from bs4 import BeautifulSoup as bs
url = 'https://ssr1.scrape.center'
headers = {
    'User-Agent':  'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36',
}
```

创建

```python
r = requests.get(url,headers=header,verify=False)  //最后一个参数是安全证书
soup = bs(r.text,'lxml')
```

获取标签

```python
#find_all获取后的arg是一个beatufulsoup类型列表，里面是beatufulsoup类型的数据可以接着查找
arg = soup.find_all(attr={'属性名':'属性值'})
arg[i].find_all(attr={'属性名':'属性值'})	
#find 获取后的arg是beatufulsoup类型的数据
arg = soup.find(attr={'属性名':'属性值'})
#获取子元素  临近访问就好
arg_1 = arg.h2
#获取元素的内容
string = arg_1.text
```

获取标签的属性

```python
#直接对于获取到的标签进行访问就行了
url = arg['src']
```

免费代理ip网站

```python
https://www.89ip.cn/
```

