import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, email, message } = body;

    // Validate required fields
    if (!nom || !telephone || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Tous les champs sont obligatoires" },
        { status: 400 }
      );
    }

    // Get email credentials using the SMTP_ prefix variables
    const emailUser = process.env.SMTP_USER;
    const emailPass = process.env.SMTP_PASS;
    
    console.log("Environment variables loaded:", {
      SMTP_USER_EXISTS: !!emailUser,
      SMTP_PASS_EXISTS: !!emailPass,
    });

    // Check if credentials are available
    if (!emailUser || !emailPass) {
      console.error("Missing email credentials in environment variables");
      return NextResponse.json(
        { success: false, message: "Configuration du serveur email manquante" },
        { status: 500 }
      );
    }

    // Create the transporter object for nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Verify the connection configuration
    try {
      await transporter.verify();
      console.log("SMTP connection verified successfully");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        { 
          success: false, 
          message: "Erreur de connexion au serveur email", 
          error: verifyError.message 
        },
        { status: 500 }
      );
    }

    // Send the email
    const info = await transporter.sendMail({
      from: `"Contact Form" <${emailUser}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL || emailUser, // If no recipient specified, send to self
      subject: `Nouveau message de contact de ${nom}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    console.log("Message sent successfully:", info.messageId);
    return NextResponse.json({ success: true, messageId: info.messageId });
    
  } catch (error) {
    console.error("Contact form error:", error);
    
    // Return more specific error information for debugging
    return NextResponse.json(
      { 
        success: false, 
        message: "Une erreur est survenue lors de l'envoi du message",
        error: error.message,
        code: error.code
      },
      { status: 500 }
    );
  }
}