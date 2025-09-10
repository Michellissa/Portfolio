// EmailJS Debug Test
import emailjs from "@emailjs/browser";

// Test EmailJS configuration
const testEmailJS = async () => {
  try {
    console.log("Testing EmailJS configuration...");

    const result = await emailjs.send(
      "service_n3708ws",
      "template_3g8t271",
      {
        from_name: "Test User",
        to_name: "Michell",
        from_email: "test@example.com",
        to_email: "Michellissa5@gmail.com", // Add recipient email
        message: "This is a test message from debug script",
      },
      "hzX7dHRJD9jfmThVw"
    );

    console.log("EmailJS test successful:", result);
    return true;
  } catch (error) {
    console.error("EmailJS test failed:", error);
    console.error("Status:", error.status);
    console.error("Text:", error.text);
    return false;
  }
};

export default testEmailJS;
