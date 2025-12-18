export default async function registerAction(request) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
        return { message: "Email and password are required" };
    }

    if (email.length < 3 || password.length < 3) {
        return {
            message: "Email and password must be at least 3 characters long",
        };
    }
}
