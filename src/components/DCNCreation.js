import React from 'react';

function DCNCreation() {
  return (
    <form>
      <label htmlFor="dcnTextarea">DCNs:</label>
      <textarea id="dcnTextarea" rows="4"></textarea>
      <label htmlFor="dcnFileNameInput">File Name:</label>
      <input id="dcnFileNameInput" type="text" placeholder="Enter file name with 'DLTAFWC2_' prefix" />
      {/* Other form elements */}
    </form>
  );
}

export default DCNCreation;