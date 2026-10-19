export function GET() {
  const token = process.env.STUDY_PLAN_DEMO_TOKEN;

  return Response.json({
    configured: Boolean(token),
    message: token
      ? "The server received the environment variable!"
      : "Environment variable is missing."
  });
}