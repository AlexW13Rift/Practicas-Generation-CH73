def sumar(a, b):
    return a + b


def restar(a, b):
    return a - b


def multiplicar(a, b):
    return a * b


def dividir(a, b):
    return a / b


def potencia(base, exponente):
    return base ** exponente


def addmultiplenumbers(numbers):
    total = 0

    for number in numbers:
        total = total + number

    return total


def multiplymultiplenumbers(numbers):
    total = 1

    for number in numbers:
        total = total * number

    return total


def isiteven(num):
    if isitaninteger(num) and num % 2 == 0:
        return True
    else:
        return False


def isitaninteger(num):
    return num == int(num)


def main():
    print("Hello learners")
    print("\n===== CALCULADORA =====")
    print("1. Hacer una operación")
    print("2. Sumar varios números")
    print("3. Multiplicar varios números")
    print("4. Comprobar si un número es par")
    print("5. Comprobar si un número es entero")

    opcion = input("Selecciona una opción: ")

    if opcion == "1":

        print("\n¿Qué operación quieres realizar?")
        print("1. Suma")
        print("2. Resta")
        print("3. Multiplicación")
        print("4. División")
        print("5. Potencia")

        operacion = input("Selecciona una operación: ")

        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))

        if operacion == "1":
            print("Resultado:", sumar(numero1, numero2))

        elif operacion == "2":
            print("Resultado:", restar(numero1, numero2))

        elif operacion == "3":
            print("Resultado:", multiplicar(numero1, numero2))

        elif operacion == "4":
            if numero2 != 0:
                print("Resultado:", dividir(numero1, numero2))
            else:
                print("No se puede dividir entre cero.")

        elif operacion == "5":
            print("Resultado:", potencia(numero1, numero2))

        else:
            print("Operación no válida.")

    elif opcion == "2":
        numeros = input("Ingresa los números separados por espacios: ")
        numeros = [float(numero) for numero in numeros.split()]
        print("Resultado:", addmultiplenumbers(numeros))

    elif opcion == "3":
        numeros = input("Ingresa los números separados por espacios: ")
        numeros = [float(numero) for numero in numeros.split()]
        print("Resultado:", multiplymultiplenumbers(numeros))

    elif opcion == "4":
        numero = float(input("Ingresa un número: "))

        if isiteven(numero):
            print("El número es par.")
        else:
            print("El número no es par.")

    elif opcion == "5":
        numero = float(input("Ingresa un número: "))

        if isitaninteger(numero):
            print("El número es entero.")
        else:
            print("El número no es entero.")

    else:
        print("Opción no válida.")


if __name__ == "__main__":
    main()