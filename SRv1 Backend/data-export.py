import pymysql
import csv

conn = pymysql.connect(host='localhost', port=3306, user='root', passwd='root', db='your_db')

cur = conn.cursor()

cur.execute("SELECT * FROM your_table")

with open('output.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow([i[0] for i in cur.description])  # write headers
    writer.writerows(cur)

cur.close()
conn.close()
