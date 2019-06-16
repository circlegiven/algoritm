def search(list, target):
    minIndex = 0
    maxIndex = len(list) - 1
    while minIndex <= maxIndex:
        midIndex = (minIndex + maxIndex) / 2
        guess = list[midIndex]
        if guess == target:
            return midIndex
        if guess < target:
            minIndex = midIndex + 1
        else:
            maxIndex = midIndex - 1

    return None


print search([1, 3, 5, 7, 9], 11)