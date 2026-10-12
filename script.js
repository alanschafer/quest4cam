// --- Contact Form Submission Handler ---
// This connects the inquiry form directly to questforthe4cam@gmail.com
function submitInquiry(event) {
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('clientName').value.trim();
    const email = document.getElementById('clientEmail').value.trim();
    const vehicle = document.getElementById('vehicleInfo').value.trim();
    const details = document.getElementById('projectDetails').value.trim();

    // Format destination email
    const recipient = "questforthe4cam@gmail.com";
    const subject = encodeURIComponent(`Project Inquiry: ${vehicle} - ${name}`);
    const body = encodeURIComponent(
        `New service inquiry from Quest 4-Cam website:\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Vehicle: ${vehicle}\n\n` +
        `Project / Service Details:\n${details}`
    );

    // Open user's default mail client pre-filled with their submission
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    // Optional success confirmation
    alert(`Thank you, ${name}! Your email client has been opened to send your inquiry directly to questforthe4cam@gmail.com.`);
    
    // Reset form
    document.getElementById('inquiryForm').reset();
}
