# Eenvoudige A11y tests met Playwright

Gebruik `npm install` om de afhankelijkheden te installeren.

# Runnen van de tests

Meestal herkent je IDE de tests in de mappen `test`. Met de rechter muisknop
klikken op de map `test` geeft vaak een context-menu 'Run all Tests' of 
iets dergelijks.

Je kunt ook een command-prompt (of 'terminal') starten en dan het command gebruiken:

```bash
 npx playwright test
```
Eventueel kun je de Grafische User Interface (GUI) openen met

```bash
 npx playwright test --ui
```

# Opbouw

Er zijn in wezen 3 start punten om te openen in de browser:

* index.html
* index2.html
* index3.html

Elk test script zal steeds één van deze 3 startpunten gebruiken.

# Tests

Merk op dat de eerste twee test bestanden op de URL na identiek zijn, ondanks
dat de HTML pagina anders is qua structuur. 

De derde test heeft kennis nodig over de structuur van de HTML omdat deze *minder* werkt met "Semantische HTML": 
de betekenis van een `<div>` element is nul, maar van `<nav>` kunnen we iets afleiden. Dit geldt ook voor

* `<main>`
* `<article>`
* `<section>`

Dus ondanks dat het op de pagina die de gebruiker ziet er geen enkel verschil is, is het verschil voor andere doeleinden
dus wel degelijk anders. Zogenaamde 'screen readers' kunnen dit goed gebruiken, maar dus ook test-frameworks maken dat we
niet meer de structuur van de HTML hoeven te kennen om toch goed te kunnen testen.

Merk op dat `<h1>` als `heading` wordt gezien, ook als deze niet in de `<header>` opgenomen is! 