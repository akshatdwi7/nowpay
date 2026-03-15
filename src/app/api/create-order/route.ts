import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const TIER_AMOUNTS: Record<string, number> = {
  seed: 999 * 100, // ₹999 in paise
  bloom: 2499 * 100, // ₹2,499 in paise
  thrive: 7999 * 100, // ₹7,999 in paise
};

export async function POST(request: Request) {
  try {
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        {
          error:
            "Razorpay is not configured. Set NEXT_PUBLIC_RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const tierId =
      typeof body?.tierId === "string" ? body.tierId.toLowerCase() : null;

    if (!tierId || !(tierId in TIER_AMOUNTS)) {
      return NextResponse.json(
        { error: "Invalid tier. Use seed, bloom, or thrive." },
        { status: 400 }
      );
    }

    const amount = TIER_AMOUNTS[tierId];
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount,
      currency: "INR",
      receipt: `noww_${tierId}_${Date.now()}`,
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency ?? "INR",
      keyId,
    });
  } catch (err) {
    console.error("Create order error:", err);
    return NextResponse.json(
      { error: "Failed to create order." },
      { status: 500 }
    );
  }
}
