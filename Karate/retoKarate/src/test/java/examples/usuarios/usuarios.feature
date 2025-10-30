Feature: casos de prueba para reto 2025

  Background:
    * url 'https://serverest.dev/'

  Scenario: obtener lista de usuarios
    Given path 'usuarios'
    * params {administrador: true}
    When method get
    Then status 200

  Scenario: crear nuevo usuario
    * def user =
      """
      {
        "nome": "Luis Miguel Miranda",
        "email": "luismms@qa.com.br",
        "password": "1223456",
        "administrador": "true"
      }
      """

    Given path "usuarios"
    And request user
    When method post
    Then status 201

    * def id = response._id
    * print 'id creado: ', id

  @TestTag
  Scenario: Actualizar Usuario
    * def userActualiza =
      """
      {
        "nome": "Luis Miguel Miranda",
        "email": "luismms123@qa.com.br",
        "password": "1223456",
        "administrador": "true"
      }
      """
    Given path "usuarios"+"/J1bSyBm6Y9OfsP95"
    And request userActualiza
    When method put
    Then status 200
