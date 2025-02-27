document.addEventListener("DOMContentLoaded", () => {
    try {

      const body = document.body;
  
      body.innerHTML = "";
  
      const h1 = document.createElement("h1");
      h1.textContent = "My HTML adventure";
      body.appendChild(h1);
  
      const paragraph = document.createElement("p");
      paragraph.innerHTML = `We're writing 
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">HTML</a> 
        markup to display in our <strong>browser</strong>. 
        We're basically telling computers what to do. <em>Neat!</em>`;
      body.appendChild(paragraph);
  
      const table = document.createElement("table");
  
      const thead = document.createElement("thead");
      const headerRow = document.createElement("tr");
      headerRow.innerHTML = `
        <th>Element name</th>
        <th>Display value</th>
      `;
      thead.appendChild(headerRow);
      table.appendChild(thead);
  
      const tbody = document.createElement("tbody");
      const elements = [
        { name: "h1", display: "block" },
        { name: "p", display: "block" },
        { name: "strong", display: "inline" },
        { name: "em", display: "inline" },
      ];
  
      elements.forEach((element) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${element.name}</td><td>${element.display}</td>`;
        tbody.appendChild(row);
      });
  
      table.appendChild(tbody);
      body.appendChild(table);
    } catch (error) {
      console.error("Error loading DOM elements:", error);
    }
  });
  