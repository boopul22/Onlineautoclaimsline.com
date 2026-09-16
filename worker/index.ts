/**
 * Online Auto Claimsline — Worker with Static Assets + Claim email API.
 *
 * POST /api/claim            -> help@onlineautoclaimsline.com  (existing site form)
 * POST /api/commercial-claim -> admin@onlineautoclaimsline.com (commercial-insurance page)
 *
 * Uses Cloudflare Email Sending binding `EMAIL`.
 * Domain `onlineautoclaimsline.com` must be onboarded to Email Sending
 * (Dashboard: Compute & AI > Email Service > Email Sending > Onboard Domain).
 * Receiving already works via Email Routing catch-all -> bipul281b@gmail.com.
 */

interface EmailBinding {
  send(message: {
    from: { email: string; name?: string };
    to: string | string[];
    cc?: string | string[];
    subject: string;
    text?: string;
    html?: string;
    replyTo?: string;
  }): Promise<unknown>;
}

interface Env {
  EMAIL: EmailBinding;
  ASSETS: { fetch: typeof fetch };
}

const FROM_EMAIL = "claims@onlineautoclaimsline.com";
const FROM_NAME = "Online Auto Claimsline";
const AUTO_TO = "help@onlineautoclaimsline.com";
const COMMERCIAL_TO = "admin@onlineautoclaimsline.com";

function esc(v: unknown): string {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function handleClaim(request: Request, env: Env, opts: { to: string | string[]; subjectPrefix: string }) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const phone = String(body.phone || "").trim();
  const email = String(body.email || "").trim();
  const state = String(body.state || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !phone || !email || !state) {
    return Response.json({ ok: false, error: "Missing required fields (name, phone, email, state)" }, { status: 400 });
  }
  if (!body.tcpa_consent || String(body.tcpa_consent).toLowerCase() !== "yes") {
    // Frontend blocks this, backend double-checks for compliance
    return Response.json({ ok: false, error: "TCPA consent required" }, { status: 400 });
  }

  const subject = `${opts.subjectPrefix} - ${name} (${state})`;
  const text = [
    `${opts.subjectPrefix}`,
    `-----------------------------`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `State: ${state}`,
    `Message: ${message || "-"}`,
    ``,
    `Consent group: ${body.consent_group || "-"}`,
    `TCPA consent: ${body.tcpa_consent || "-"}`,
    `Sensitive data consent: ${body.sensitive_data_consent || "-"}`,
    `WA health consent: ${body.wa_health_consent || "-"}`,
    `Page/source: ${body.source || request.headers.get("referer") || "-"}`,
    `IP: ${body.ip_address || request.headers.get("cf-connecting-ip") || "-"}`,
    `User-Agent: ${body.user_agent || request.headers.get("user-agent") || "-"}`,
    `Timestamp: ${body.timestamp || new Date().toISOString()}`,
  ].join("\n");

  const html = `
    <h2>${esc(opts.subjectPrefix)}</h2>
    <table cellpadding="6" cellspacing="0" border="1" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${esc(name)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${esc(phone)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${esc(email)}</td></tr>
      <tr><td><strong>State</strong></td><td>${esc(state)}</td></tr>
      <tr><td><strong>Message</strong></td><td>${esc(message || "-")}</td></tr>
      <tr><td><strong>Consent group</strong></td><td>${esc(body.consent_group)}</td></tr>
      <tr><td><strong>TCPA consent</strong></td><td>${esc(body.tcpa_consent)}</td></tr>
      <tr><td><strong>Sensitive data consent</strong></td><td>${esc(body.sensitive_data_consent)}</td></tr>
      <tr><td><strong>WA health consent</strong></td><td>${esc(body.wa_health_consent)}</td></tr>
      <tr><td><strong>Page/source</strong></td><td>${esc(body.source || request.headers.get("referer"))}</td></tr>
      <tr><td><strong>IP</strong></td><td>${esc(body.ip_address || request.headers.get("cf-connecting-ip"))}</td></tr>
      <tr><td><strong>Timestamp</strong></td><td>${esc(body.timestamp || new Date().toISOString())}</td></tr>
    </table>`;

  try {
    await env.EMAIL.send({
      from: { email: FROM_EMAIL, name: FROM_NAME },
      to: opts.to,
      subject,
      text,
      html,
      replyTo: email,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("EMAIL.send failed:", err);
    return Response.json(
      { ok: false, error: "Email service unavailable. Please call us directly." },
      { status: 502 }
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/commercial-claim") {
      return handleClaim(request, env, {
        to: COMMERCIAL_TO,
        subjectPrefix: "New COMMERCIAL Claim Request",
      });
    }

    if (request.method === "POST" && url.pathname === "/api/claim") {
      return handleClaim(request, env, {
        // Homepage form goes to BOTH: help@ (routes to Bipul) + Immaculate direct.
        // Cloudflare Routing forward allows only one destination per rule,
        // so fan-out happens here where multiple `to` recipients are supported.
        to: [AUTO_TO, "immaculatemedia2018@gmail.com"],
        subjectPrefix: "New Claim Request",
      });
    }

    if (request.method === "POST" && url.pathname === "/api/privacy-request") {
      let body: Record<string, unknown>;
      try {
        body = (await request.json()) as Record<string, unknown>;
      } catch {
        return Response.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
      }
      const email = String(body.email || "").trim();
      if (!body.fullName || !email) {
        return Response.json({ ok: false, error: "Missing required fields" }, { status: 400 });
      }
      const subject = "PRIVACY OPT-OUT REQUEST - Online Auto Claimsline";
      const lines = Object.entries(body).map(([k, v]) => `${k}: ${v}`);
      const text = ["Privacy opt-out request", "-------------------------", ...lines].join("\n");
      try {
        await env.EMAIL.send({
          from: { email: FROM_EMAIL, name: FROM_NAME },
          to: [AUTO_TO, "immaculatemedia2018@gmail.com"],
          subject,
          text,
          html: `<h2>${esc(subject)}</h2><pre>${esc(text)}</pre>`,
          replyTo: email,
        });
        return Response.json({ ok: true });
      } catch (err) {
        console.error("EMAIL.send failed:", err);
        return Response.json(
          { ok: false, error: "Email service unavailable. Please call us directly." },
          { status: 502 }
        );
      }
    }

    // Everything else -> static SPA assets
    return env.ASSETS.fetch(request);
  },
};
