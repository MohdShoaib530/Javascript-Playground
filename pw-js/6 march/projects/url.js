const url = "https://example.com"; // Replace with your URL

const regex = /^(https?:\/\/[^.]+\.[a-zA-Z]{2,})$/;

const result = url.match(regex);

if (result) {
  console.log("Valid URL:", result[0]);
} else {
  console.log("Invalid URL");
}
