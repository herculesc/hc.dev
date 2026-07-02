import { Handler } from "@netlify/functions"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Método não permitido" }
  }

  try {
    const { nome, email, mensagem } = JSON.parse(event.body || "{}")

    const result = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "herculesfreelaml@gmail.com",
      subject: `Nova mensagem de ${nome}`,
      replyTo: email,
      html: `
        <h2>Novo contato pelo portfólio</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${mensagem}</p>
      `,
    })

    console.log("RESEND RESULT:", result)

    if (result.error) {
      console.error("RESEND ERROR:", result.error)
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: result.error }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    }

  } catch (error) {
    console.error("FUNCTION ERROR:", error)

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Erro ao enviar e-mail",
      }),
    }
  }
}