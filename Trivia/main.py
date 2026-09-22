import requests

def trivia_fetch(num):
    url = f"https://opentdb.com/api.php?amount={num}"
    response = requests.get(url)
    trivia = response.json()
    return trivia


def main():
    cantidad = int(input("¿Cuántas preguntas quieres? "))
    trivia = trivia_fetch(cantidad)
    6
    for question in trivia["results"]:
        print(f"Question: {question['question']}")
        print(f"Correct Answer: {question['correct_answer']}")
        print(f"Incorrect Answers: {question['incorrect_answers']}")
        print("-" * 50)


if __name__ == "__main__":
    main()