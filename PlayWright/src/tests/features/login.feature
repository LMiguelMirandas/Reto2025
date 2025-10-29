Feature: Login
     Feature Login page para verificar los escenarios de prueba login.

    Scenario Outline: Validacion de login
    Given Ingresa a bowser web
    When Ingresar usuario <Usuario>, contraseña <password>, y clicks en boton login
    Then Verificacion de ingreso a web
    Then Cerrar borwser

    Examples:
    | Usuario  | password | 
    | standard_user   | secret_sauce | 
    | locked_out_user | secret_sauce| 

    Scenario: Realizar compra
    Given Ingresa a bowser web
    When Ingresar usuario 'standard_user', contraseña 'secret_sauce', y clicks en boton login
    Then Verificacion de ingreso a web
    When Seleccionar productos y agregarlos al carrito
    Then Verificar productos en el carrito
    Then Cerrar borwser