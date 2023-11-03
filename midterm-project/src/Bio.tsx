import { Header } from "./Header";
import { PersonalData } from "./data";

export const Bio = () => {
    function submitForm(event: any) {
        alert("Form submitted!")
        const data = new FormData(event.target);
        console.log(data.get("name"));
        console.log(data.get("lastname"));
        console.log(data.get("email"));
        console.log(data.get("bio"));
    }
    return (
        <div className="container">
        <Header />
        <h1>Profile Page</h1>
        <div>
            <form onSubmit={submitForm}>
            
            <label>
                Your login <br />
                <input type="text" name="name" defaultValue={PersonalData.login} />
            </label>
            <br />
            <label>
                Your name <br />
                <input type="text" name="name" defaultValue={PersonalData.name} />
            </label>
            <br />
            <label>
                Your lastname <br />
                <input
                type="text"
                name="lastname"
                defaultValue={PersonalData.lastname}
                />
            </label>
            <br />
            <label>
                Your email <br />
                <input
                type="email"
                name="lastname"
                defaultValue={PersonalData.email}
                />
            </label>
            <br />
            <label>
                Your bio <br />
                <textarea name="bio" defaultValue={PersonalData.bio} />
            </label>
            <br />
            <button type="submit">Send</button>
            </form>
        </div>
        </div>
    );
};