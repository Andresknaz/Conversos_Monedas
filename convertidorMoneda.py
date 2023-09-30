DolarPeso = 4.073

def cambiarDolar(dolares):
    pesosC = dolares * DolarPeso
    return pesosC

def cambiarPesos(pesos):
    dolares = pesos / DolarPeso
    return dolares


def solicitarCantidad(tipo):
    cantidad = float(input(f'Cuanta cantidad de {tipo} vas a cambiar: '))
    return cantidad

if __name__ == '__main__':
    menu = """
        Cambio de monedas
        Selecciona una opcion

        1. Cambio a Pesos Colombianos
        2. Cambio a Dolares.
        3. Salir
    """
    while True:
        opcion = int(input(menu))
        if opcion == 1:
            cantidad = solicitarCantidad("dolares")
            pesos = round(cambiarDolar(cantidad),3)
            print(f'El resultado de cambiar {cantidad} Dolares es de {pesos} Pesos Colombianos')
        elif opcion == 2:
            cantidad = solicitarCantidad("pesos")
            dolares = round(cambiarPesos(cantidad),3)
            print(f'El resultado de cambiar {cantidad} Pesos Colombuianos es de {dolares} Dolares')
        else:
            print("Salir")
            break


