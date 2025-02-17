Feature: Agregar productos al carrito de compras

  Scenario: Usuario agrega un producto al carrito de compras
    Given el usuario ve un producto llamado "MacBook"
    When hace clic en el producto "MacBook"
    And hace clic en el botón "Add to Cart"
    Then el producto se agrega al carrito

  Scenario: Usuario actualiza el carrito con un producto y cantidad específica
    Given el usuario está en la página de productos
    When selecciona el producto "MacBook"
    And ingresa la cantidad "2"
    And presiona el botón "Agregar al carrito"
    Then el producto debe añadirse al carrito con la cantidad indicada

  Scenario: Notificación de producto agregado
    Given que el usuario agrega un producto al carrito
    When el producto se haya agregado correctamente
    Then el sistema debe mostrar un mensaje de "Producto agregado" en la parte inferior izquierda
    And el mensaje debe cerrarse automáticamente después de 3 segundos
  
  Scenario: Persistencia del carrito de compras
    Given que el usuario tiene productos en el carrito de compras
    When navegue por cualquier parte del sistema
    Then el sistema deberá conservar la lista de productos agregados al carrito de compras
  
  Scenario: Actualización del badge del carrito
    Given que el usuario tiene productos en el carrito
    When agregue un nuevo producto
    Then el sistema debe actualizar el badge del carrito con la cantidad total de productos en menos de 1 segundo

