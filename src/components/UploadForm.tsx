import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  padding: 10px;
  margin: 5px 0 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px 0 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--input-bg);
  color: var(--text-color);
`;

const Button = styled.button`
  padding: 10px;
  margin: 5px 0 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  background-color: var(--button-bg);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--button-hover);
  }
`;

const UploadForm: React.FC = () => {
  const parseConfigFile = (text: string) => {
    const resultsDiv = document.getElementById('results') as HTMLElement;
    const loadingDiv = document.getElementById('loading') as HTMLElement;

    resultsDiv.innerHTML = '';
    showFeedback('', '');
    loadingDiv.style.display = 'block';

    const sections = text.split(/\n\s*\n/);
    sections.forEach((section, index) => {
      setTimeout(() => {
        const lines = section.trim().split('\n');
        const sectionName = lines[0].replace(/[\[\]#]/g, '').trim();
        let tableHtml = `<table><thead><tr><th colspan="2">${sectionName}</th></tr></thead><tbody>`;
        lines.slice(1).forEach(line => {
          const [key, value] = line.split('=');
          tableHtml += `<tr><td>${key.trim()}</td><td>${value ? value.trim() : ''}</td></tr>`;
        });
        tableHtml += '</tbody></table>';

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <button class="collapsible">
            <span class="section-header">
              <span class="section-title">
                <span class="section-icon"><i class="fas fa-file-alt"></i></span>${sectionName}
              </span>
            </span>
          </button>
          <div class="content">
            ${tableHtml}
          </div>`;
        resultsDiv.appendChild(card);

        if (index === sections.length - 1) {
          loadingDiv.style.display = 'none';
          initCollapsibles();
        }
      }, index * 100);
    });
  };

  const showFeedback = (message: string, type: string) => {
    const feedbackDiv = document.getElementById('feedback') as HTMLElement;
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback ${type}`;
  };

  const initCollapsibles = () => {
    const coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  };

  return (
    <Form id="uploadForm" onSubmit={(e) => {
      e.preventDefault();
      const fileInput = document.getElementById('configFile') as HTMLInputElement;
      const file = fileInput.files?.[0];

      if (!file) {
        showFeedback("Please select a configuration file.", "error");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target?.result as string;
        parseConfigFile(text);
      };
      reader.readAsText(file);
    }} aria-label="Upload Form">
      <Label htmlFor="configFile">Upload Configuration File:</Label>
      <Input type="file" id="configFile" name="configFile" accept=".cfg" />
      <Button type="submit">Upload</Button>
    </Form>
  );
};

export default UploadForm;
