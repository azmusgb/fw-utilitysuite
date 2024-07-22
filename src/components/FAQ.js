import React from 'react';

const FAQ = () => (
  <div className="container">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-section">
      <h3>General Questions</h3>
      <p><strong>What is FormWorks Utility Suite?</strong><br />
        A1: FormWorks Utility Suite is a comprehensive software tool designed to help manage the application</p>
      <h3>Feature Use</h3>
      <p><strong>How do I execute a command in the SAT Command tab?</strong><br />
        Navigate to the SAT Command tab, select the appropriate environment and command from the dropdown menus, and
        click the 'Execute Command' button. You will receive feedback directly in the interface once the command is
        executed.</p>
      <p><strong>How can I retrieve a work record?</strong><br />
        Go to the Work Record Retrieval tab, enter the Work Record ID in the input field, and click 'Retrieve Work
        Record'. The details will appear on the screen if the record is found in the database.</p>
      <h3>Customization and Settings</h3>
      <p><strong>How do I change the application theme?</strong><br />
        In the Settings tab, find the 'Theme' selector, choose 'Light' or 'Dark', and the application will update
        immediately to reflect your choice.</p>
      <p><strong>How do I adjust the font size in the application?</strong><br />
        In the Settings tab, select the 'Font Size' dropdown menu.
        Choose from 'Default', 'Large', or 'Larger' to set the font size that best suits your viewing preference.</p>
      <h3>Additional support</h3>
      <p><strong>How do I find additional support?</strong><br />
        Visit our Confluence site for more information and support on these tools and other details.</p>
    </div>
  </div>
);

export default FAQ;
