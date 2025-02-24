"use client"

import Button from "react-bootstrap/Button";

export default function Admin() {
    return (
        <>
            <script type="text/javascript">
                window.location.href = "/notauthorised"
            </script>
            <div className="flex flex-col items-center justify-center min-h-[calc(100svh-60px)]">
                <h1>Admin Panel</h1>
                <h4 style={{ marginTop: "10px" }} className="text-secondary">Welcome to the admin panel.</h4>
                <h4 className="text-secondary">You can manage users and posts here.</h4>
                <div className="flex flex-row items-center justify-center" style={{ marginTop: "20px" }}>
                    <Button href="#" variant="primary" size="lg" style={{ marginRight: "20px" }}>Manage Users</Button>
                    <Button href="#" variant="danger" size="lg">Manage Posts</Button>
                </div>
                <img src="adminpanel.jpeg" className="w-[25%]" style={{ paddingTop: "50px" }}/>
                <div className="absolute bottom-0 w-full flex items-center justify-center py-4 text-secondary">
                    <p className="text-secondary">Powered by Azure Active Directory. Read the documentation <a href="https://go.microsoft.com/fwlink/?LinkId=856642" target="blank" style={{ color: "#0000EE" }}>here</a>.</p>
                </div>
            </div>
        </>
    )
}