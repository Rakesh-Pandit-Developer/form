let sheet = SpreadsheetApp.openByUrl("YOUR_SPREADSHEET_URL");
let sheetName = sheet.getSheetByName('Sheet1');

function doPost(e) {
  let data = e.parameter;
  
  // Save to Google Sheet
  sheetName.appendRow([
    data.name,
    data.email,
    data.phone,
    data.message,
    data['button-id'],
    data.timestamp
  ]);

  // Send Email
  GmailApp.sendEmail(
    "rajeshkp2078@gmail.com",
    "New Form Submission",
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}\nButton ID: ${data['button-id']}\nTimestamp: ${data.timestamp}`
  );

  return ContentService.createTextOutput("Form Submitted Successfully!");
}