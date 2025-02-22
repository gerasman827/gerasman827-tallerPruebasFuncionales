Feature: Ver carrito de compras

  Scenario: Visualización del carrito de compras
    Given que el usuario ha agregado productos al carrito de compras
    When haga clic en el ícono del carrito
    Then el sistema debe mostrar el listado de productos agregados al carrito

  Scenario: Estructura de la tabla del carrito
    Given que el usuario está visualizando el carrito de compras
    When se muestre la lista de productos agregados
    Then el sistema debe mostrar la información en una tabla con tres columnas:
      | Nombre del producto | Cantidad de unidades | Subtotal del producto |

  Scenario: Total de la compra en el carrito
    Given que el usuario está visualizando el carrito de compras
    When se listen los productos agregados
    Then el sistema debe mostrar el total de la compra al final de la lista

  Scenario: Redirección al detalle del producto
    Given que el usuario está visualizando el listado de productos agregados al carrito de compras
    When haga clic en un producto dentro del carrito
    Then el sistema debe redireccionarlo a la página de detalles de ese producto

  Scenario: Persistencia de los productos en el carrito
    Given que el usuario tiene productos en el carrito de compras
    When decida seguir comprando y agregue más productos
    Then el sistema debe mantener los productos previamente agregados sin eliminarlos
