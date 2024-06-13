import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the student visit istqb test page", () => {
    //Esta sentencia equivale a cy.visit("https://aliciajuste.github.io/istqb-online-test");
    //porque la url está definida en la variable baseUrl del fichero cypress-config.js
    cy.visit("/");
  });