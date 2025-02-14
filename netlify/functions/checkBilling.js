import { google } from "googleapis";



// Google Cloud Project ID
const PROJECT_ID = "fastandeasysolar-444418";

// Authenticate using Service Account
async function authenticate() {
  return await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/cloud-billing.readonly"],
  });
}

// Fetch Billing Info
export async function checkBillingStatus() {
  try {
    const authClient = await authenticate();
    const cloudBilling = google.cloudbilling({ version: "v1", auth: authClient });

    const res = await cloudBilling.projects.getBillingInfo({
      name: `projects/${PROJECT_ID}`,
    });

    if (res.data.billingEnabled) {
      console.log("✅ Billing is ENABLED.");
    } else {
      console.log("🚫 Billing is DISABLED.");
    }

    return res.data.billingEnabled;
  } catch (error) {
    console.error("❌ Error fetching billing status:", error.response?.data || error.message);
  }
}

// Run the function
checkBillingStatus();