document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('generatePDFButton').addEventListener('click', generatePDF);
});

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const motivation = document.getElementById('motivation').value;

    let yPosition = 10;  // Starting Y position

    // إضافة النصوص
    doc.text(`Nom complet: ${fullName}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Date de naissance: ${dob}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Email: ${email}`, 10, yPosition);
    yPosition += 10;
    doc.text(`Adresse: ${address}`, 10, yPosition);
    yPosition += 10;

    doc.text('Lettre de motivation:', 10, yPosition);
    yPosition += 10;

    // هنا أضفنا التفاف النص
    doc.text(motivation, 10, yPosition, {maxWidth: 180});
    
    // حفظ المستند كـ PDF
    doc.save('form-data.pdf');
}
