
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Form
    deactivate server

   

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server. The user then presses save on form to POST the inputted string.

 ```