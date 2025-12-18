import { Form, useActionData } from "react-router";

export default function Register() {
    const data = useActionData();
    console.log(data);
    return (
        <div>
            <Form method="post">
                <input type="text" name="email" placeholder="email" />
                <input type="password" name="password" placeholder="password" />
                <button type="submit">Register</button>
                {data?.message && <div>{data.message}</div>}
            </Form>
        </div>
    );
}
