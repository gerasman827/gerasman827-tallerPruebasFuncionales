Feature: Visualización del carrito de compras

  Scenario: Visualización del carrito de compras
    Given que el usuario ha agregado 2 productos al carrito de compras
    When hace clic en el ícono del carrito
    Then el sistema debe mostrar el listado de los 2 productos agregados al carrito

  Scenario: Total de la compra en el carrito
    Given que el usuario está visualizando el carrito de compras
    When se listan los productos agregados
    Then el sistema debe mostrar el total de la compra de $25.00 al final de la lista


  Scenario: Total incorrecto de la compra en el carrito
    Given que el usuario ha agregado 2 productos al carrito de compras
    When se listan los productos agregados
    Then el sistema debe mostrar el total de la compra de $40.00 al final de la lista