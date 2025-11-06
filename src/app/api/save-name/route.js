import { writeFile, appendFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function POST(request) {
  try {
    const { name, email, phone, company, city, country, product, message } =
      await request.json();

    // Basic validation
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ message: "Please fill in all required fields" }),
        { status: 400 }
      );
    }

    // Create folder and file paths
    const dir = path.join(process.cwd(), "data");
    const filePath = path.join(dir, "enquiries.csv");

    // Ensure directory exists
    if (!existsSync(dir)) await mkdir(dir);

    // Create file with headers if it doesn't exist
    if (!existsSync(filePath)) {
      await writeFile(
        filePath,
        "Name,Email,Phone,Company,City,Country,Product,Message\n"
      );
    }

    // Escape quotes and format as CSV row
    const escape = (str = "") => `"${String(str).replace(/"/g, '""')}"`;
    const csvLine =
      [
        escape(name),
        escape(email),
        escape(phone),
        escape(company),
        escape(city),
        escape(country),
        escape(product),
        escape(message),
      ].join(",") + "\n";

    await appendFile(filePath, csvLine);

    return new Response(
      JSON.stringify({ message: "Enquiry saved successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error saving enquiry:", error);
    return new Response(JSON.stringify({ message: "Failed to save enquiry" }), {
      status: 500,
    });
  }
}
