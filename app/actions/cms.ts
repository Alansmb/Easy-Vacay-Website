"use server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://dev-api.easyvacayplanner.com";

export async function getAllPage(page: any) {
  try {
    const queryParams = new URLSearchParams();

    const where: any = { name: page };

    queryParams.append("where", JSON.stringify(where));

    const response = await fetch(
      `${API_BASE_URL}/page/find?${queryParams.toString() || ""}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is ok
    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      return { error: true, data: errorText };
    }

    // Parse the response
    const data = await response.json().catch(() => ({}));

    return { error: false, data };
  } catch (error: any) {
    console.log(error);

    console.error("Error fetching page:", error);
    return { error: true, data: error };
  }
}
