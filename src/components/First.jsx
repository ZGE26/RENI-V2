import { useNavigate } from "react-router-dom";

const First = () => {
    const navigate = useNavigate();
    return (
        <>
        <h1>Home Route</h1>
        <button onClick={() => navigate('/about')}>Chect About</button>
        </>
    );
}

export default First;