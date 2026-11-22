
export async function requireAuth(req, res, next) {
  try {
    const response = await fetch(
      `${process.env.CLIENT_URL}/api/auth/get-session`,
      {
        method: "GET",
        headers: {
          cookie: req.headers.cookie || "",
        },
      }
    );

    if (!response.ok) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const data = await response.json();

    if (!data?.user?.email) {
      return res.status(401).json({
        message: "Invalid session",
      });
    }

    req.user = {
      email: data.user.email,
      name: data.user.name || data.user.email,
    };

    return next();
  } catch (error) {
    console.error("Authentication error:", error);

    return res.status(401).json({
      message: "Authentication failed",
    });
  }
}
