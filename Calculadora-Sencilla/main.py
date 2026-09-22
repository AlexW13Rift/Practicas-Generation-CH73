while True:

    print("\n¿Qué quieres hacer?")
    print("1. Sumar dos numeros")
    print("2. Restar dos numeros")
    print("3. Multiplicar dos numeros")
    print("4. Dividir dos numeros")
    print("5. Modulo")
    print("6. Sumar tres numeros")
    print("7. Escribir una operacion")
    print("8. Salir")

    opcion = input("Selecciona una opcion: ")

    # Suma
    if opcion == "1":
        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))

        resultado = numero1 + numero2

        print("Resultado:", resultado)

    # Resta
    elif opcion == "2":
        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))

        resultado = numero1 - numero2

        print("Resultado:", resultado)

    # Multiplicacion
    elif opcion == "3":
        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))

        resultado = numero1 * numero2

        print("Resultado:", resultado)

    # Division
    elif opcion == "4":
        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))

        if numero2 != 0:
            resultado = numero1 / numero2
            print("Resultado:", resultado)
        else:
            print("No se puede dividir entre cero.")

    # Modulo
    elif opcion == "5":
        numero1 = int(input("Ingresa el primer número: "))
        numero2 = int(input("Ingresa el segundo número: "))

        resultado = numero1 % numero2

        print("Resultado:", resultado)

    # Tres numeros
    elif opcion == "6":
        numero1 = float(input("Ingresa el primer número: "))
        numero2 = float(input("Ingresa el segundo número: "))
        numero3 = float(input("Ingresa el tercer número: "))

        resultado = numero1 + numero2 + numero3

        print("Resultado:", resultado)

    # Operaciones con 3 numeros diferentes o mas
    elif opcion == "7":
        operacion = input("Escribe una operación: ")

        resultado = eval(operacion)

        print("Resultado:", resultado)

    # SALIR
    elif opcion == "8":
        print("¡Hasta luego!")
        break

    else:
        print("Opción no válida.")