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
   