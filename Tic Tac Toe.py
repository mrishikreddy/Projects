import os

def mainprogram():
    global player, choice, chance, mark, s, num, i
    player = 1
    choice = 0
    chance = 0
    num = 0
    s = ['1','2','3','4','5','6','7','8','9']
    
    while True:
        board()
        player = 1 if player % 2 else 2
        mark = 'X' if player == 1 else 'O'
        
        if player == 1:
            print(f"\n\n  {name}, enter a number:", end=' ')
            choice = int(input())
        else:
            choice = computer()
        
        num = choice
        if s[choice-1] == str(choice):
            s[choice-1] = mark
        else:
            print("  Invalid input, retry again")
            player -= 1
            input("Press any key to continue...")
        
        i = checkwin()
        player += 1
        
        if i != -1:
            break
    
    board()
    player -= 1
    if i == 1:
        if player == 1:
            print(f"\n\n  {name} won the match\n\n\n")
        else:
            print("\n\n  Computer won the match\n\n\n")
    else:
        print("\n\n  Game is a draw\n\n\n")
    
    print("  Press 1 to play again, press 0 to exit:", end=' ')
    chance = int(input())
    if chance == 1:
        mainprogram()
    elif chance == 0:
        exit()
    else:
        print("\n\n  You did not share your opinion properly")
        input("Press any key to continue...")

def checkwin():
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for combo in winning_combinations:
        if s[combo[0]] == s[combo[1]] == s[combo[2]]:
            return 1
    if any(cell.isdigit() for cell in s):
        return -1
    return 0

def board():
    os.system('cls' if os.name == 'nt' else 'clear')
    print("\t\tTic Tac Toe\n\n")
    print(f"  {name} - (X)\tComputer - (O)\n\n\n")
    print("\t         |   |    ")
    print(f"\t       {s[0]} | {s[1]} | {s[2]} ")
    print("\t     ____|___|____")
    print("\t         |   |    ")
    print(f"\t       {s[3]} | {s[4]} | {s[5]} ")
    print("\t     ____|___|____")
    print("\t         |   |    ")
    print(f"\t       {s[6]} | {s[7]} | {s[8]} ")
    print("\t         |   |    \n\n")
    if num != 0 and i != 1:
        print(f"  Computer choice: {num}")

def computer():
    # Winning combinations
    winning_combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # Columns
        [0, 4, 8], [2, 4, 6]  # Diagonals
    ]

    # Check if computer can win
    for combo in winning_combinations:
        values = [s[i] for i in combo]
        if values.count('O') == 2 and values.count(str(combo[0] + 1)) == 1:
            return combo[values.index(str(combo[0] + 1))] + 1

    # Check if player can win, block them
    for combo in winning_combinations:
        values = [s[i] for i in combo]
        if values.count('X') == 2 and values.count(str(combo[0] + 1)) == 1:
            return combo[values.index(str(combo[0] + 1))] + 1

    # Take the center if available
    if s[4] == '5':
        return 5

    # Take one of the corners if available
    for move in [1, 3, 7, 9]:
        if s[move - 1] == str(move):
            return move

    # Take one of the sides if available
    for move in [2, 4, 6, 8]:
        if s[move - 1] == str(move):
            return move

    return 1  # Fallback (shouldn't happen)


if __name__ == "__main__":
    print("\n\t\tWelcome to Tic Tac Toe\n\n\n")
    name = input("  Enter player name: ")
    os.system('cls' if os.name == 'nt' else 'clear')
    mainprogram()
