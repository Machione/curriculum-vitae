from bs4 import BeautifulSoup

if __name__ == "__main__":
    soup = BeautifulSoup(open("cv.html"), features="html5lib")
    for private_div in soup.find_all("div", class_="private"):
        private_div.decompose()
    
    with open("private_cv.html", "w") as html:
        html.write(str(soup))