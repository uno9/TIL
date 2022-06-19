from importlib.abc import ResourceLoader
import random

omikuji = [
  "大吉",
  "吉",
  "中吉",
  "小吉",
  "末吉",
  "凶",
  "大凶",
]

result = random.randrange(len(omikuji))

print("今日の運勢は、「" + omikuji[result] + "」です！")