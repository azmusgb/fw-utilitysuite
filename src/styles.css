import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #1e1e2f;
    --text-color: #fff;
    --card-bg: #282a36;
    --input-bg: #3b3e51;
    --button-bg: #ff79c6;
    --button-hover: #ff92d0;
    --card-hover: #44475a;
  }

  .light-mode {
    --bg-color: #f0f0f0;
    --text-color: #333;
    --card-bg: #fff;
    --input-bg: #e0e0e0;
    --button-bg: #4a90e2;
    --button-hover: #357abd;
    --card-hover: #f5f5f5;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color 0.3s, color 0.3s;
  }

  .container {
    background-color: var(--card-bg);
    padding: 20px 40px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    max-width: 800px;
    width: 100%;
    margin: 20px;
    transition: background-color 0.3s;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label,
  input,
  select,
  button {
    padding: 10px;
    margin: 5px 0 20px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="file"],
  select {
    background-color: var(--input-bg);
    color: var(--text-color);
  }

  button {
    background-color: var(--button-bg);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: var(--button-hover);
  }

  #results {
    margin-top: 20px;
    font-size: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .card {
    background-color: var(--card-bg);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s, background-color 0.3s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card:hover {
    transform: translateY(-5px);
    background-color: var(--card-hover);
  }

  .card table {
    width: 100%;
    border-collapse: collapse;
  }

  .card table,
  .card th,
  .card td {
    border: 1px solid var(--text-color);
  }

  .card th,
  .card td {
    padding: 8px;
    text-align: left;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .controls button {
    padding: 5px 10px;
    font-size: 14px;
    border-radius: 4px;
  }

  .loading {
    text-align: center;
    margin-top: 20px;
  }

  .loading-spinner {
    border: 4px solid var(--text-color);
    border-radius: 50%;
    border-top: 4px solid var(--button-bg);
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    margin: 0 auto;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .feedback {
    text-align: center;
    margin-top: 20px;
  }

  .feedback.success {
    color: #28a745;
  }

  .feedback.error {
    color: #dc3545;
  }

  .collapsible {
    background-color: var(--card-bg);
    color: var(--text-color);
    cursor: pointer;
    padding: 10px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 16px;
    margin-bottom: 5px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .collapsible.active,
  .collapsible:hover {
    background-color: var(--card-hover);
  }

  .content {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    background-color: var(--card-bg);
    border-radius: 8px;
  }

  .content table {
    margin-top: 10px;
  }

  .icon {
    margin-right: 10px;
    vertical-align: middle;
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .section-title {
    display: flex;
    align-items: center;
  }

  .section-icon {
    margin-right: 10px;
    font-size: 1.2em;
  }

  .status-icon {
    font-size: 1.2em;
  }

  .status-icon.running {
    color: #28a745;
  }

  .status-icon.stopped {
    color: #dc3545;
  }

  .process-list {
    margin-top: 10px;
    background-color: var(--input-bg);
    padding: 10px;
    border-radius: 8px;
  }

  .process-list ul {
    list-style-type: none;
    padding: 0;
  }

  .process-list li {
    margin-bottom: 5px;
  }

  .toggle-container {
    position: fixed;
    top: 20px;
    right: 20px;
  }

  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: var(--button-bg);
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .search-container {
    margin-bottom: 20px;
  }

  #searchInput {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    background-color: var(--input-bg);
    color: var(--text-color);
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .copy-btn {
    background-color: var(--button-bg);
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin-left: 10px;
  }

  .copy-btn:hover {
    background-color: var(--button-hover);
  }

  #backToTop {
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    border: none;
    outline: none;
    background-color: var(--button-bg);
    color: white;
    cursor: pointer;
    padding: 15px;
    border-radius: 50%;
    font-size: 18px;
  }

  #backToTop:hover {
    background-color: var(--button-hover);
  }

  @media (max-width: 600px) {
    .container {
      padding: 10px;
    }

    #results {
      grid-template-columns: 1fr;
    }
  }
`;
