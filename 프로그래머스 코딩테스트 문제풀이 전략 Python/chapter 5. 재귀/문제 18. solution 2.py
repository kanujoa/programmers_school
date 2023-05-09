# 직접 계산하여 몇 번째인지 알아내는 방법
# * 사전을 미리 만들고 검색하는 방법의 경우, 제한 시간 안에 끝나지 않을 정도로 매우 큰 사전을 만들어야
# 한다면 해당 방식으로는 문제를 풀 수 없다.

def solution(word):
    preset = {
        'A': [1, 1, 1, 1, 1],
        'E': [782, 157, 32, 7, 2],
        'I': [1563, 313, 63, 13, 3],
        'O': [2344, 469, 94, 19, 4],
        'U': [3125, 625, 125, 25, 5]
    }     # 각 문자열의 위치별로 인덱스가 늘어남을 적용

    answer =  0
    for idx, key in enumerate(word):
        answer += preset[key][idx]
    return answer