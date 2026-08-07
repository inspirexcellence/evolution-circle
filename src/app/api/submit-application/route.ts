import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, profession, companyName, paymentMethod, paymentId } = body;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Circle Application: ${name}`,
          from_name: "Inspire Excellence Portal",
          Applicant_Name: name,
          Phone_Number: phone,
          Email_Address: email,
          Profession: profession,
          Company_Name: companyName,
          Payment_Method_Used: paymentMethod,
          Payment_ID_or_Status: paymentId,
          Important_Note: "If Payment Method was 'Manual QR Scan', please manually verify the receipt of ₹100 in your bank account before approving."
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Web3Forms error:", errorData);
      } else {
        console.log("Application details sent via Web3Forms.");
      }
    } else {
      console.warn("WEB3FORMS_ACCESS_KEY not configured. Email was not sent.");
    }

    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { error: "Error submitting application", details: error.message },
      { status: 500 }
    );
  }
}
