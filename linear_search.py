def search(list, target):
    for i in range(len(list)):
        if (list[i] == target):
            return i
    return -1

print search([1, 3, 5, 7, 9], 5)
