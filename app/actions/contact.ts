"use server";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/schemas/contact-form";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://dev-api.easyvacayplanner.com";

export async function submitContactForm(data: ContactFormValues) {
  try {
    // Validate the data with the schema
    const validatedData = contactFormSchema.parse(data);

    // Send data to API
    const response = await fetch(`${API_BASE_URL}/user/contact_us_website`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    // Check if the response is ok
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      throw new Error(`Failed to send message. Please try again.`);
    }

    // Parse the response
    const result = await response.json().catch(() => ({}));

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);

    // Handle validation errors
    if (error instanceof Error && error.name === "ZodError") {
      return {
        success: false,
        message: "Invalid form data. Please check your inputs.",
        error: error.message,
      };
    }

    // Handle network/API errors
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
